# Building an Ionic Firebase Chat with Authentication and Geolocation 


# Firebase Project Setup


## ⏬ Instalacion

Clona el proyecto

```bash
  https://github.com/AlanRiosMendoza/Firebase-with-auth-and-photo.git
```

Posiciónate la carpeta del proyecto

```bash
  cd my-project
```

Instala las dependencias

```bash
  npm install
```

Inicia el servidor

```bash
  ionic serve
```



La aplicación utilizará por defecto el puerto 4200

```bash
  http://localhost:4200/
```

Todo esto es necesario para que pueda funcionar correctamente

##  Firebase Chat App


```bash

 ionic start devdacticFire blank --type=angular --capacitor
 cd ./devdacticFire
 ng add @angular/fire
 ionic g page pages/login
 ionic g page pages/chat
 ionic g service services/chat

```

## environments/environment.ts

```bash

 export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
 }
 };

```

## app/app.module.ts
![{DF6BD9CC-4DDD-46B4-B8AA-9AC65FCED7E5}](https://github.com/user-attachments/assets/5d8b8fee-dfbc-44d3-9851-e85836cd00be)

## app/app-routing.module.ts
![{9996FE14-882E-48FC-BCC5-FDB3769327CB}](https://github.com/user-attachments/assets/eb6cad2a-730e-4b70-aeb1-43bed003d004)


# Creating a Service for the Ionic Firebase Chat


























































