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

prueba tecnica la nacion
﻿

DELETE
eliminar producto
http://localhost:3001/v1/api/products/3
Crear producto

Body
raw (json)
json
{
    "Id": 12,
    "sku": 1002,
    "id_categoria": 123,
    "nombre_producto": "sarazaibo",
    "descripcion": "lorem ipsum este es un long text",
    "precio": 1240,
    "id_estado": 1
}
POST
Crear producto
http://localhost:3001/v1/api/products
﻿

Body
raw (json)
json
{
    "sku": 221,
    "id_categoria": 123334,
    "nombre_producto": "pincel",
    "descripcion": "para pintar cositas",
    "precio": 23112,
    "id_estado": 3
}
GET
Traer todos los productos
http://localhost:3001/v1/api/products
﻿

Body
raw (json)
json
{
    "Id": 12,
    "sku": 1002,
    "id_categoria": 123,
    "nombre_producto": "sarazaibo",
    "descripcion": "lorem ipsum este es un long text",
    "precio": 1240,
    "id_estado": 1
}
PUT
actualizar producto
http://localhost:3001/v1/api/products/8
﻿

Body
raw (json)
json
{
    "nombre_producto": "mouse"
}
GET
Traer un solo producto
http://localhost:3001/v1/api/products/8
﻿

Body
raw (json)
json
{
    "Id": 12,
    "sku": 1002312345,
    "id_categoria": 123,
    "nombre_producto": "sarazaibo",
    "descripcion": "lorem ipsum este es un long text",
    "precio": 1240,
    "id_estado": 1
}


## Corriendo El cliente

Tenemos que clonar el siguiente repositorio: https://github.com/matiasnsartori/ln-client.git

Luego lo corremos con los pasos previos realizados y la api corriendo.

```bash
# Dev Mode
$ npm run dev
```

