Documentacion de Backend:

EVENTS · Contendrán toda la informacion de los diferentes eventos,  tanto los usuarios registrados como asistentes.

ARTISTS · Contendrán toda la informacion de los mismos en los diferentes EVENTOS. 

USERS - TYPES:

- SIN AUTH: Puede ver todos los eventos · Filtrar Eventos por precio, locacion o Artista · Puede registrarse y volverse USER · Ver o Buscar por ID, nombre o Categoria los Artistas.

- USER isAuth · Podrán entrar y registrarse / iniciar sesión  · Podrán modificar o eliminar su propio perfil. · Podrán crear eventos así como modificarlos o eliminarlos, volviendose ORGANIZADORES de los mismos · Pueden ver toda la informacion de un evento por ID · Filtrar los eventos por Precio Podran dar de alta Artistas nuevos y modificarlos en caso de ser necesario.

- ORGANIZADOR isOrganizer· Un USER puede crear eventos volviendose ORGANIZADOR · Puede modificar o eliminar eventos · Podran ver quienes asisten a sus eventos y si lo desean eliminar Assistentes · Podrán ver el número de asistentes a un evento · Crear o modificar ARTISTAS cuando los haya creado ·  

- ADMIN isAdmin · Tiene facultades para hacer todo en la pagina sin limitaciones.

ORIGEN: http://localhost:3000/api/v1

## ENDPOINTS

# Events // http://localhost:3000/api/v1/events

GET - getEvents - /events/ 
GET - getEventbyID - /events/:eventId - isAuth
GET - getEventbyPrice - /events/price/:price 
GET - getEventbyAssistant - /events/:id/:assistants - isAdmin - isOrganizer 
GET - getEventbyArtist - /events/artist/:artist 
GET - getEventByCategory - /events/category/:category
GET - getEventbyLocation - /events/location/:location 
POST - postEvent - /events/ - isAdmin - isOrganizer
PUT - deleteAssistant - /events/:id/removeAssistant - isAdmin - isOrganizer
PUT - updateEvent - /events/:id - isAdmin - isOrganizer 
DELETE - deleteEvent - /events/:id - isAdmin - isOrganizer

# Artist: // http://localhost:3000/api/v1/artist

GET - getArtists - /artist/
GET - getArtistbyID - /artist/:artistID
GET - getArtistbyNombre - /artist/nombre/:nombre
POST - postArtist - /artist/ - isAdmin - isOrganizer 
PUT - updateArtist - /artist/:id - isAdmin - isOrganizer 
POST - deleteArtist - /artist/:id - isAdmin

# Users // http://localhost:3000/api/v1/users

GET - getUsers - /users/ - isAdmin
GET - getUserById - /users/:id - isAdmin
POST - register - /users/register
POST - login - /users/login
PUT - updateUser - /users/:id  - isAuth - isAdmin
DELETE - deleteUser - /users/:id - isAuth - isAdmin

Para mas Información:

https://clever-filament-d99.notion.site/PROYECTO-10-Events-API-v2-93dd60f43ee842cfb07e9631bb3bb425?pvs=4
