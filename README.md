# Frontend (Vue.js) Template

This is the readme explaining the template for the frontend code.

## Connection to backend

The way we have implemented it here, the frontend is installed and deployed together with the backend.
That is, dependencies for the frontend are handled in the same way as for the backend, and also installed via:
```bash
npm install
```

In the same way, the following command starts the server, including your frontend code:

```bash
npm start
```

## Packaging

We will use Vue single file components in this assignments. These are files that end on .vue and contain HTML, CSS, and JavaScript code. To build a Vue.js application, they first have to be packaged into regular files. This is done (in this template) using [Browserify](http://browserify.org/).

We have modified the package.json file so that everytime you run ```npm install```, the packaging process is run as well.
So if you have changed your frontend, simply re-run ```npm install``` before running ```npm start```.

## Users

For this example, we have slightly modified the original backend template to include the MongoDB database and provide GET and DELETE operations for camels (originally we just returned static content).
Essentially, we used the same camel model as in L4 and the GET and DELETE operations on that model.

We have created the structure for two classes of users, ```owners``` (which can view and delete camels) and ```buyers``` (which, in this template, can't really do anything).
The SPA for owners is served at ```/owner``` and the SPA for buyers at ```/buyer```.
The buyer SPA is essentially empty, but the owner SPA contains both a basic bootstrap design and some Vue.js components. If you add camels to your database using the model defined above, you will see that camels are listed and can be deleted in the owner frontend.

## Viewing Vue Single Component Files in VSCode

VSCode does not know the file ending ```.vue``` by default. Therefore, the single component files for Vue will not come with syntax highlighting.
To enable syntax highlighting also for this kind of files, install the Vetur extension in VSCode.
