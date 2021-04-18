# Getting Bookshelf-App on your local machine
Bookshelf app was created to help you keep track of the books you have read. It uses the Google Books api to find books and it uses firebase to store user information.

## Clone repository and install dependencies

```
https://github.com/this-is-you/bookshelf-app.git
```

```
cd bookshelf-app
```

```
npm install
```

## Connecting Firebase
Create a new project at [firebase](https://firebase.google.com/) and add get your api keys.

Create a dev.js file in ```filey/src/config```

![image](https://user-images.githubusercontent.com/36117697/114625813-a6447180-9c67-11eb-90ad-9ddd6786eb64.png)

Copy the following code into your ```dev.js``` file and replace the 'key' string with the corresponding key.

```
module.exports = {
    apiKey: 'key',
    authDomain: 'key',
    projectId: 'key',
    storageBucket: 'key',
    messagingSenderId: 'key',
    appId: 'key',
    databaseURL: 'key',
};
```
