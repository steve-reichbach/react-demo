### Demo react project
In order to setup this project you need to execute the following command:
```
npm run first-init
```
Then, when it's finished, run `npm start frontend` for running frontend part.
And `npm start backend` for running backend part respectively.

#### Backend API
__Node.js Express__
#### Front end
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
Where:
`resources`- is the main resources list,
`actions` – full data of `actions` entities,
`filteredResources` – filtered `resources` array due to `searchBox` value,
`selectedResource` – current resource
