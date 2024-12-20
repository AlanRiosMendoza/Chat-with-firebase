# Building an Ionic Firebase Chat with Authentication and Geolocation 


# Firebase Project Setup


## ⏬ Instalacion

Clona el proyecto

```bash
  https://github.com/AlanRiosMendoza/Chat-with-firebase.git
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
## Cristian Paredes

![{DF6BD9CC-4DDD-46B4-B8AA-9AC65FCED7E5}](https://github.com/user-attachments/assets/5d8b8fee-dfbc-44d3-9851-e85836cd00be)

## app/app-routing.module.ts
![{9996FE14-882E-48FC-BCC5-FDB3769327CB}](https://github.com/user-attachments/assets/eb6cad2a-730e-4b70-aeb1-43bed003d004)


# Creating a Service for the Ionic Firebase Chat

## app/services/chat.service.ts
![{7B713549-11B3-48B3-8048-98D28E0DECEF}](https://github.com/user-attachments/assets/d539d68b-340a-4287-bfd4-742507d3b0cf)

## app/services/chat.service.ts
![{AE7B2B18-92D6-4408-9DD5-6E32E54DFEC4}](https://github.com/user-attachments/assets/40504a27-2429-4395-a547-98e2a360708e)

# Create a Login and Signup Page for Firebase Authentication

## app/pages/login/login.module.ts
![{16AA5EE0-1ACA-450F-BECC-3804E6CA6CD3}](https://github.com/user-attachments/assets/a2e10590-c3ed-45d9-a735-02bbdffedbe4)

## src/app/pages/login/login.page.ts 
![{A7FCEE97-1546-4A00-8D98-9AE6262BCC86}](https://github.com/user-attachments/assets/0cd55634-b232-419d-915c-a9ac7eba4038)

## src/app/pages/login/login.page.html 
![{380990EB-807E-4B10-9A7F-3C31D87C3D4A}](https://github.com/user-attachments/assets/ae94cdaa-8779-461a-a1d4-e81d282c3a25)

# Creating the Ionic Chat View
## Alan Rios

## src/app/pages/chat/chat.page.ts
![{C53A0231-86F4-4C11-BF54-9C1402BA8A8F}](https://github.com/user-attachments/assets/6bfff8ff-c571-438e-b3a9-5200bc4e120d)

## src/app/pages/chat/chat.page.html 
![{19E8C6CD-190B-45B1-93E8-F27FB05F8713}](https://github.com/user-attachments/assets/c835551f-817c-464f-a298-4a9b603a673d)

 ## src/app/pages/chat/chat.page.scss
 ![{B14D3F8B-1780-4DA5-93E0-9CA225A0CFE0}](https://github.com/user-attachments/assets/c909b570-7320-45a8-8a60-131dc11d8a34)

# Capacitor-geolocation

Install
```bash
  npm install @capacitor/geolocation
  npx cap sync
```

## src/app/pages/chat/chat.page.ts
![{B1425229-154E-453C-A94D-E8FA51BA2D40}](https://github.com/user-attachments/assets/2ea302c7-ccba-40f6-aa39-3db7a2c7ffcc)

## Android
![{542488F1-E785-4278-AE49-7D9926B1CB6A}](https://github.com/user-attachments/assets/e25563fb-08cd-4b15-b219-5e41b9959a81)

# APK

![{7ADD19B1-B2FC-49F2-9258-548B44005AAB}](https://github.com/user-attachments/assets/cd0ef742-261a-446d-9ec6-dc7500e05e78)

![{E8A77106-D37D-4FC6-B948-7E531AE20CE0}](https://github.com/user-attachments/assets/aa0f4e5f-0e3b-4cb1-aaee-b43591415c5f)

![{65A2C2F5-1B9D-49DF-BB73-69B024D5FE53}](https://github.com/user-attachments/assets/b247fb4c-af8d-4321-85a2-d95f883f04fe)

![{DBF7DAA4-1CC8-449F-B8EE-B58EC8F29121}](https://github.com/user-attachments/assets/63d38775-4be5-4741-a386-6ade4c4aa585)

![{57A8D4B4-82AF-445C-9348-DB4EC4CDE213}](https://github.com/user-attachments/assets/fc1b0be5-8713-4362-82c8-7a8d7703f526)

![{E4773964-2248-4DDF-99C4-AB3394D23E5A}](https://github.com/user-attachments/assets/66a5add6-e211-49b8-bacd-bcd5f2e3c171)

![{F9F9CD90-BDBB-409F-B645-18C7ACB16837}](https://github.com/user-attachments/assets/b6a7bfa8-53c7-4e6e-9b29-fb213c4e531f)




























































