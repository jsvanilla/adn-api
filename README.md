## RUTAS
[La api se encuentra en] (https://sdf)

## DOCUMENTACION
Falto implementar la documentacion en swagger
Falto implementar autenticacion por JWT



## ARQUITECTURA Y PATRONES DE DISEÑO

La aplicacion de manera global implementa el patrón repositorio, de esta manera, es mas facil cambiar en el futuro la base de datos, o el enrutador sin tocar la logica de la aplicación.
El algoritmo de dna implementa el patron proxy
La conexion a mongo db implementa el patron singleton

## TESTING

Para correr los test `npm run test`
Para ver la cobertura de los test `npm run test:coverage`

Un html informe de covertura es generado en la carpeta `./coverage`
