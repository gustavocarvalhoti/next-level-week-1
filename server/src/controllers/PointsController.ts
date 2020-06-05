import knex from "../database/connection";
import {Request, Response} from 'express';

/* Body esperado
{
    "name" : "Mercado 01",
    "email": "mercado@terra.com",
    "whatsapp": "991676111",
    "latitude": -46.22222,
    "longitude" : -44.22222,
    "city": "Sumaré",
    "uf": "SP",
    "items": [1,2,6]
}
*/

class PointsController {
    // http://localhost:3333/points?city=Sumar&uf=SP&items=1,2,6
    async index(request: Request, response: Response) {
        const {city, uf, items} = request.query;
        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        console.log(String(uf) + ' - ' + String(city) + ' - ' + parsedItems);

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems) // point_items.item_id IN(1,2)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        console.log(points);
        return response.json(points);
    }

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const point = await knex('points').where('id', id).first();
        if (!point) {
            return response.status(400).json({message: 'Point not found.'});
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({
            ...point,
            items
        });
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;

        // Para executar uma transaction depois da outra, se uma falhar não executa a outra
        const trx = await knex.transaction();

        const point = {
            image: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        };

        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0];

        // Nesse ele retorna um array com 3 objetos, ai ele faz os 3 inserts
        const poin_items = items.map((item_id: number) => {
            return {
                item_id,
                point_id,
            }
        });

        await trx('point_items').insert(poin_items)

        // Persiste as informações
        await trx.commit();

        return response.json({
            point_id,
            ...point
        });
    }
}

export default PointsController;
