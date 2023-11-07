# Proyecto: MyBox
  Actividad 2.2 Front-End II

# Integrantes

- Adolfo Ochoa 30.302.062
- Jose Mauricio Camacho  29.739.132
- Yetzenia Mendoa 27.268.361
- Carlos Pimiento 27.497.945

# Comandos


    git clone https://github.com/Ochoaadev/MyBox-BackEnd

    npm install --> Instalar Dependencias

    npm run dev --> Iniciar el servidor

# Profesor
  Ing. Freddy David Ramirez

# Funcionalidades

- Listar los productos
- Agregar productos
- Filtrar productos
- Editar un producto
- Eliminar un producto
- Registrarse
- Inciar Sección
- Agregar Usuarios
- Editar Usuarios
- Eliminar Usuarios

# Instrucciones

Paso 1
Lo primero que haremos será crearnos una cuenta en mongodb, que es, la base de datos con la cual estaremos trabajando en el backend. Para ello, nos ubicamos al siguiente link: https://www.mongodb.com/es
  
-	Una vez dentro de la página, nos dirigimos donde dice Prueba gratuita (dicho botón se encuentra en la parte superior derecha de la pantalla)

![Logo](https://i.imgur.com/Y3p2EMb.png)

Paso 2
-	Después de darle click al botón, nos redirige a la siguiente página, donde ingresamos nuestros datos y procedemos a crear nuestra cuenta:

![Logo](https://i.imgur.com/rLDNbiV.png)

Paso 3
- Una vez que nos registramos, procederemos a crear nuestra base de datos, presionando el botón de (+Create)

  ![Logo](https://i.imgur.com/NpAY5Dg.png)

Paso 4
- Cuando estamos adentro de la creación del Cluster, que usaremos para la base de datos, elegiremos las siguientes opciones:

![Logo](https://i.imgur.com/cUXczuQ.png)

- Elegimos el nombre de nuestro cluster (Que esta vez, le colocaré MiprimerCluster, como ejemplo), completamos el captcha y si todo sale bien, ya tendríamos nuestra base de datos creada

  ![Logo](https://i.imgur.com/sTPl0SI.png)

Paso 5

- Luego de haberse creado, nos dirigen a la siguiente página:

![Logo](https://i.imgur.com/xQeC0as.png)

- Donde crearemos un usuario (con su nombre de usuario y contraseña), donde podremos acceder a la base de datos y podremos empezar a trabajar con ella. Posteriormente, si seguimos bajando nos pide que seleccionemos una dirección de IP con la que trabajará la el cluster. Por defecto, colocamos 0.0.0.0/0

![Logo](https://i.imgur.com/Hyopj1N.png)

- Después de haber creado nuestro usuario, y haber asignado la dirección ip, ya podremos finalizar y salir de este espacio:

  ![Logo](https://i.imgur.com/kmcNeV1.png)

Paso 6

- Ahora, en el menú principal, nos dirigimos a barra de navegación de la parte de izquierda de la pantalla, y seleccionamos Database:

  ![Logo](https://i.imgur.com/QuOYfTa.png)

- Cuando seleccionamos nuestra base de datos “MiprimerCluster”, tendremos las siguientes opciones:

  ![Logo](https://i.imgur.com/ovoLtZY.png)

-  Pero, nosotros nos dirigimos a donde dice Collections. Una vez dentro, nos saldrán las siguientes opciones, y nosotros elegiremos la opción “Add My Own Data”

  ![Logo](https://i.imgur.com/nTU97Cl.png)

-  Nos saldrán los siguientes recuadros, los cuales colocaremos la siguiente información:
    •	Database Name: Tienda	 Asignamos el nombre a nuestra base de datos
    •	Collection Name: users		La colección será el lugar donde recibiremos los datos de nuestro proyecto (sean peticiones CRUD, etc).
   
- Luego, procedemos a crear la base de datos, junto con la colección:

![Logo](https://i.imgur.com/9F5AR29.png)

Paso 7

-  Para descargar el repositorio, haremos uso del Git Bash(la cual, puedes descargar a través del siguiente link: https://git-scm.com/downloads)

-   Una vez descargado e instalado el Git Bash, procedemos hacer click derecho en el escritorio, y elegimos el Git Bash

  ![Logo](https://i.imgur.com/f9Q8Vrz.png)

- Después de abrirse procedemos a colocar el siguiente comando para clonar nuestro repositorio

      Git clone https://github.com/Ochoaadev/MyBox-BackEnd

-  Una vez colocado procedemos a darle enter y esperar a que se nos descargue

  ![Logo](https://i.imgur.com/cjPyqor.png)

Paso 8 

-  Una vez descargado el repositorio, procedemos a abrirlo en nuestro Visual Studio Code. Una vez abierto el Visual, abriremos el terminal con ctrl  + ñ. Después de abrir la terminal, procedemos a colocar el siguiente comando:

        npm install

![Logo](https://i.imgur.com/uGhfRTw.png)

-  El comando anterior instalará todas las dependencias necesarías para el funcionamiento del Backend
  
Paso 9

- Sucesivamente, encontraremos un archivo .env, que nos servirá para realizar la conexión a nuestra base de datos:

  ![Logo](https://i.imgur.com/tEhxJ2F.png)
  
-  Ahora bien, presta mucha atención, tenemos 3 datos que colocar, como USER_DB, PASSWORD_DB y DBBNAME. Dichos datos los podemos encontrar en la página de mongo
      ¡Por ejemplo!:
          •	En el caso de USER_DB tendría el nombre del usuario que tiene acceso a la base de datos (En este ejemplo, sería ochoarondonaa)
          •	En el caso de PASSWORD_DB, tendría que ir la contraseña que le colocaron (o asignaron) al usuario.
          •	Por último, en el DBNAME, sería la base de datos que creamos en nuestro cluster(de nombre, Tienda)
   
   - Se tendría que ver algo así:
 
   ![Logo](https://i.imgur.com/vjAtZfs.png)

Paso 10

-  Ahora bien, también tendremos que registrarnos en cloudinary (Para esto, se debe de usar VPN, ya que el servicio no se encuentra disponible en nuestra región). Dentro de la página nos dirigimos al botón de registro que se encuentra en la parte superior derecha de la pantalla:

  ![Logo](https://i.imgur.com/Ue3VRQw.png)

-  Estando en el apartado de registro, tendremos multiples opciones de registro, como por Google, email o Github, en esta ocasión usaremos Email:

![Logo](https://i.imgur.com/MXVZEwo.png)

- ¡Completamos con nuestros datos y procedemos a registrarnos correctamente!

![Logo](https://i.imgur.com/5drRJi3.png)

-   Una vez dentro de la página, nos dirigimos a la barra de navegación que se encuentra en la parte izquierda de nuestra pantalla, y nos vamos a la sección de Dashboard. 
Allí encontraremos 3 parámetros que tendremos que usar para nuestro backend, como lo son, 
      •	Cloud_name
      •	Api_key
      •	Api_secret
    
Si bien, ahora nos quedarían 2 datos para finalmente, tener nuestra conexión a la base de datos mongodb. Dichos datos son:

•	SaltRounds   Usualmente pueden colocarse de valores si bien, 8 o 10
•	TOKEN_SECRET  Aquí tendremos que colocar el token con el que se trabajará, con el propósito de proteger tu JWT

-  Finalmente, el archivo .env se tendría que visualizar de esta manera:

  ![Logo](https://i.imgur.com/BOKGZCp.png)

(Recuerda reemplazar los ** por las clave que te generan las página cloudinary, así como 
reemplazar por el Token secreto a usar)

Ojo, tener en cuenta que el archivo .env debe ir dentro de la carpeta backend

Paso 11

- Ya nos quedaría iniciar el servidor con el comando:

      npm run dev

  ![Logo](https://i.imgur.com/NHvnUOs.png)

Paso 12

- Descarga el repositorio de Front-End y sigue sus intrucciones (https://github.com/JMCA2805/MyBox-FrontEnd)

      git clone https://github.com/JMCA2805/MyBox-FrontEnd.git
