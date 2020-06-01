# Treinamento - Next Level Week - Rocketseat
## Tecnologias utilizadas
```
React
React Native
Node v12.17.0
npm  6.14.4
TypeScript                      <- Deixar claro a estrutura das informações
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
npx ts-node-dev src/server.ts   <- Hotdeploy
npm run dev                     <- Pelo package

Frontend
npm start
```
