
# Angular Internationalization (i18n) Setup Guide

This github project is a sample project to show you how you can have multiple languages in angular using .json files

if you want to apply the i18n stuff in your own application follow the steps below.

## Step 1: Install Dependencies

First, navigate to your project directory and run the following commands to install the necessary dependencies:

```bash
npm install
npm install @angular/localize
ng add @angular/localize
npm install http-server -g
```

## Step 2: Update angular.json
In your `angular.json` file, locate this:
```json
  "projects": {
    "yoru project name": {
```

and add below this:
```json
"i18n": {
  "sourceLocale": "en",
  "locales": {
    "nl": "src/locale/messages.nl.json",
    "es": "src/locale/messages.es.json"
  }
},
```


Next, add configurations for the Dutch ("nl") and Spanish ("es") locales in the `"architect"` section:

```json
"development": {
    "optimization": false,
    "extractLicenses": false,
    "sourceMap": true,
    "localize": ["en"]
  },
"nl": {
  "optimization": false,
  "extractLicenses": false,
  "sourceMap": true,
  "localize": ["nl"]
},
"es": {
  "optimization": false,
  "extractLicenses": false,
  "sourceMap": true,
  "localize": ["es"]
}
```

## Step 3: Update package.json

In your `package.json` file, add scripts for serving and building your project with localization support:

```json
"scripts": {
  "start": "ng serve --host=127.0.0.1",
  "start-nl": "ng serve --configuration=nl --host=127.0.0.1",
  "start-es": "ng serve --configuration=es --host=127.0.0.1",
  "build": "ng build --localize --configuration=production --i18n-missing-translation error",
  "start-dist": "http-server dist/angular-i18n-tutorial/browser/ -p 3000"
}
```

The `--host=127.0.0.1` option is added to allow running VS Code Angular on debug mode.

## Step 4: Start Development Server

You can now start the development server for your project using the following commands:

- English (default):
  ```bash
  npm start
  ```

- Dutch:
  ```bash
  npm run start-nl
  ```

- Spanish:
  ```bash
  npm run start-es
  ```

## Step 5: Build for Production

To build your project for production with localization support, use the following command:

```bash
npm run build
```

## Step 6: Serve the Production Build

To serve the production build, use the following command:

```bash
npm run start-dist
```

This will serve your application on port 3000.

Now, your Angular project is set up with internationalization (i18n) support, and you can develop, build, and serve it in different languages as needed.
