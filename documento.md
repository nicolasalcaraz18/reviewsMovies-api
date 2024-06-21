(ORT_YA_TALLER_II_TP_API_RESTful_Curso_E_ALCARAZ_NICOLAS)          
                                            Proyecto API de Gestión de Películas. 

Descripción:
    Esta API permite a los usuarios gestionar reseñas sobre películas.
    También incluye la creación, lectura, actualización y eliminación de usuarios, películas y reseñas.

Alcance el proyecto:
    Usuarios: Crear, leer, actualizar y eliminar usuarios
    Películas: Crear, leer, actualizar y eliminar películas.
    Reseñas: Crear, leer, actualizar y eliminar reseñas.

Requerimientos Funcionales:

    1. Gestión de Usuarios:
        Permitir a los usuarios crear una cuenta, iniciar sesión, actualizar su perfíl y eliminar su cuenta.
    Inputs: 
        Crear cuenta: nombre, email, contraseña.
        Inicio sesión: email, contraseña
    Outputs:
        Crear cuenta: Mensaje de éxito y detalles del usuario creado.
        Iniciar sesión: Token de autenticación y detalles del usuario.
        Actualizar perfil: Mensaje de éxito y detalles del usuario actualizado.
        Eliminar cuenta: Mensaje de confirmación de eliminación.

    2. Gestión de Películas:
        Descripción: Permitir a los usuarios crear, leer, actualizar y eliminar películas.
    Inputs: 
        Crear película: título, descripción, director, año de lanzamiento.
        Actualizar película: título, descripción, director, año de lanzamiento.
    Outputs:
        Crear película: Mensaje de éxito y detalles de la película creada.
        Actualizar película: Mensaje de éxito y detalles de la película actualizada.
        Obtener películas: Lista de películas con detalles.

    3. Gestión de Reseñas.
        Descripción: Permitir a los usuarios crear, leer, actualizar y eliminar reseñas de películas.
    Inputs:
        Crear reseña: usuarioId, peliculaId, rating, comentario.
        Actualizar reseña: usuarioId,peliculaId, rating, comentario.
    Outputs:
        Crear reseña: Mensaje de éxito y detalles de la reseña actualizada.
        Actualizar reseña: Mensaje de éxito y detalles de la reseña actualizada.
        Obtener reseña: Lista de reseñas con detalles.

Requerimientos No Funcionales:

    Rendimiento: Responder a las solicitudes en menos de 2 segundos.
    Seguridad: Cifrar contraseñas de los usuarios.







