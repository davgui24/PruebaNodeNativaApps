# PruebaNodeNativaApps

Notas:
- La API de "omdbapi" no devuelve un listado de películas, solo devuelve un objeto con los atributos de una sola película (con el criterio del título ingresado).
- No pude conectarme a al servidor de Mongo que me entregaron, así que cree un servidor local, de esta manera ciando se ejecute el proyecto dese cualquier equipo (computadora) se creará la base 
  datos en ese equipo.
- No sé que quiere decir "nombre y apellido del candidato" ya que no se pidió creación de usuarios. El backend cosntruido lo puede consumir cualquiera, no valida usuario ni tokens, etc.
  El beckend recupera, el objeto de la película y los agrega a la base de datos en la coleccion "movies", solo se agregará otra película si la api devuelve un nuevo título, ya que   el objeto no trae _id para validación.  
- El Backend retorna ok, message, pelicula (si encontro una nueva), error (si hubo algun error en la consulta) y la lista de peliculas.
- El endpoint para listar las peliculas es: http://localhost:3500/createMovieAndList
