## Description

Aplicacion NestJs con microservicios.

## Requisitos Previos
Tener Docker y Node instalado en el equipo.

## Instalacion
Debemos instalar las depencias y con docker corriendo levantar la base de datos de PostgreSQL
La misma se persiste en el directorio ./postgres-db

```bash
$ npm install
$ docker-compose up -d database
```

## Corriendo la Api
Debemos correr la app principal, y tambien el microservicio de products que se comunica por TCP.
```bash
# development
$ npm run start msartori-ln-23
$ npm run start products

# watch mode
$ npm run start:dev msartori-ln-23
$ npm run start:dev products

## Test

```bash
# unit tests
$ npm run test
```

## Documentacion de la Api
## DELETE
http://localhost:3001/v1/api/products/:id
## POST
http://localhost:3001/v1/api/products/
body: {
  sku: number;
  id_categoria: number;
  nombre_producto: string;
  descripcion: string;
  precio: number;
  id_estado: number;
}
## GET - todos los productos
http://localhost:3001/v1/api/products/
## GET - un producto
http://localhost:3001/v1/api/products/:id
## PUT
http://localhost:3001/v1/api/products/:id
body: { "elemento":"cambio"}


## Corriendo El cliente

Tenemos que clonar el siguiente repositorio: https://github.com/matiasnsartori/ln-client.git

Luego lo corremos con los pasos previos realizados y la api corriendo.

```bash
# Dev Mode
$ npm run dev
```

