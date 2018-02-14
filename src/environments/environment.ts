// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyACOZUpG5ZXXTurFyEzbw_1HhUTrXbVYr8",
    authDomain: "nodejs-webapp-956d6.firebaseapp.com",
    databaseURL: "https://nodejs-webapp-956d6.firebaseio.com",
    projectId: "nodejs-webapp-956d6",
    storageBucket: "gs://nodejs-webapp-956d6.appspot.com/",
    messagingSenderId: "533232003352"
  },
  ws_url:'http://localhost:5000'
};
