// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyDnIlOuLUEyWrAd2dJyE5jFci6E1oPcq_8",
      authDomain: "todoliste-a5393.firebaseapp.com",
      databaseURL: "https://todoliste-a5393.firebaseio.com",
      projectId: "todoliste-a5393",
      storageBucket: "todoliste-a5393.appspot.com",
      messagingSenderId: "998527481538"
    }
};
