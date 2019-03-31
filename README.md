### Demo react project
In order to setup this project you need to execute the following command:
```
npm run first-init
```
Then, when it's finished, run `npm start frontend` for running frontend part, 
and `npm start backend` for running backend part respectively.

### Backend API
__Node.js Express__
`app.js` is the main file
`stubs/data.json` stub file

### Frontend
__React JS + Redux__

`React JS` is being used as UI components library
`Redux` – as a state management utility.

Main store has the following structure:
```
  store = {
    resources: {
        resources: [],
        actions: [],
        filteredResources: [],
        selectedResource: {},
      }
  }
```

`resources`- is the main resources list,
`actions` – full data of `actions` entities,
`filteredResources` – filtered `resources` array due to `searchBox` value,
`selectedResource` – current resource

Directories structure:
`frontend/src/componets` contains all the react components used in the app;

`frontend/src/helpers` is a project library

`frontend/redux` hosts all the Redux elements: `actions` and `reducers`