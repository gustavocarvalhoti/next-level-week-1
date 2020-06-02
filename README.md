# Treinamento - Next Level Week - Rocketseat
## Tecnologias utilizadas
```
React
React Native
Node v12.17.0
npm  6.14.4
TypeScript                      <- Deixar claro a estrutura das informações
Knex.js                         <- Linguagem unificada para os DB - Query builder
Sqlite
```

## Install - Backend
```
cd server
npm init -y                     <- Cria o projeto (y pega as configs default)
npm install express
npm install @types/express -D   <- "-D" apenas em desenv, em prod não precisa
npm install ts-node -D
npm install typescript -D
npx tsc --init                  <- Cria o config do typescript, tsconfig.json
npm install ts-node-dev -D      <- Hotdeploy
npm install knex                <- Igual o JPA
npm install sqlite3             <- DB       
npx knex migrate:latest --knexfile knexfile.ts migrate:latest   <- Configura as migrations   
npm install cors -D             <- Para acessar de outro projeto   
```

## Install - Frontend
```
npx create-react-app web --template=typescript  <- Cria um projeto React/Typescript
cd web
```

## Start
```
Backend
npx ts-node src/server.ts
npx ts-node-dev src/server.ts       <- Hotdeploy
npm run knex:migrate                <- Roda as migrations
npm run knex:seed                   <- Cria a massa de dados
npm run dev                         <- Pelo package
OBS: transpileOnly --ignore-watch   <- Deixa mais rápido ainda a transpilação

Frontend
npm start
```
