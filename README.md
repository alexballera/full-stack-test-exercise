# RAY Login Challenge

## Tecnología:

Utilicé la última versión de Nextjs en el front y Firebase para el proceso de autenticación y persistencia de datos

Anexo 2 archivos zip: uno con todo el código fuente del proyecto y otro con los archivos listos para desplegarlos, adicionalmente envío un enlace del repositorio en Github del proyecto y un enlace del proyecto en producción.

### GitHub

[Enlace al proyecto haciendo click aquí](https://github.com/alexballera/full-stack-test-exercise)

### Enlace en "producción"

[Enlace del proyecto aquí](https://ray-prueba-fullstack.netlify.app/home)

### Manejador de estados

Para el manejo de los estados de la aplicación utilicé Redux Toolkit, con el cual contruí el store en donde se persisten los datos del usuario logueado con el token para verificar su status con Firebase y usar sus datos de manera global en el proyecto, de manera que se pueda acceder a los datos del usuario en cualquier sitio de la palicación.

También utilicé el hook del contexto (context) como auxiliar para el manejo de estados entre componentes.

## Vistas

Para el cumplimiento del reto relacionado con el login se realizaron 4 vistas.

### Home

Esta vista es pública, se puede acceder sin necesidad de loguearse, acá se muestran los enlaces para el registro o login.

### Login

Muestra un formulario con correo y password para loguearse y con la posibilidad de loguearse con Google. En el caso de Google, automáticamente registra al usuario y luego le permite el acceso a la app.

### Register

Muestra un formulario con 3 campos: Nombre y apellido, correo y password para realizar el registro respectivo, una vez registrado se loguea automáticamente y permite el acceso a la app.

### Dashboard

Es la vista que se muestra una vez logueado, si se dirige a esta vista por el navegador y el usuario no se encuentra autenticado se redirecciona al Home. En esta vista tiene un botón para desloguearse.

### SEO

A cada vista se le modifican las metadatas, para mostrar que se pueden modificar para temas de optimización en los motores de búsqueda.
