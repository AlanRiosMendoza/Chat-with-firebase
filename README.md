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

##  Variables de Entorno

# Iniciando la integración de su aplicación Ionic y Firebase 


```bash
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

































