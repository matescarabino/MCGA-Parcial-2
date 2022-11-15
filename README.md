# MCGA - Partial 2

**Students:** Ojeda Milton - Scarabino Mateo<br>
**Career:** T1-09 COMPUTER SYSTEMS ENGINEERING<br>
**Commission:** 4-A<br>
**Turn:** Night<br>
**Project Start date:** 08/11/2022<br>
**Project End date:** 15/11/2022<br>

**Teachers:** Frare Esteban / Martin Barea

Open [Repository](https://github.com/matescarabino/MCGA-Parcial-2).

## Statement of the Partial 📋
Develop a web application that meets the following requirements:
- Must be built with React using the create-react-app CLI.
- Have a list of resources following the logic of an ABM.
- It must have a library for managing forms. (react-hook-form)
- It must have a layout, which must contain:
    Headers / NavBar (Navigation Bar) / Body or content/ footer
- Must have more than 1 navigable route.
- The app must have AT LEAST 2 screens:
- Home: This must have the names of the members and the name of the
app. It is basically to be able to test the routing of the application.
- Resource: in this screen they should show the list of resources with the logic of the
AMB (if they work alone, they should only have home and that of the worked resource) to
to be able to show the navigation within the app.
- It must have components for both the Header, Body and Footer, as well as a
component for the table. In turn, these components must use components
shared, such as: buttons, inputs. These components must have their
.css files, preferably using CSS modules.
- You must have forms when performing a POST, a DELETE or an UPDATE
of a new resource to the list.
- Each form must have the corresponding validations to avoid adding
new resources with erroneous data or no data.
- It must be possible to make the different requests (GET, POST, PUT, DELETE) from the
ABM of each resource.
- You must have a file where the initial configuration of the Redux store is done.
- You must have a reducer for each resource and a rootReducer.
- You must have an actions file for each resource.
- You must have a file of types (constants) for the actions.
- You must have the use of action creators using the Redux Thunk library, which
they are necessary to make the connection of the FE with the BE. For this, they must use the
API already done for the first partial.

<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install dependencies

    npm install

### Setup environment file
create a file at root called `.env` and add this:

    REACT_APP_API=<server url>

### Run App
npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br>

## Built with 🛠️
- JavaScript ES6
- React Js
- Redux
- React Hook Form
- NPM
- Git
### Collaborators

|Photo | Name  | Mail | Github
| :-----: | :-----: | :-----: | :-----: |
<img src="https://avatars.githubusercontent.com/u/71444915?v=4" height="50" width="50">| Martin Barea | martin.barea@radiumrocket.com | [@BareaMartin](https://github.com/BareaMartin)
<img src="https://avatars.githubusercontent.com/u/91098568?v=4" height="50" width="50">| Mateo Scarabino | matescarabino@gmail.com | [@matescarabino](https://github.com/matescarabino)
<img src="https://avatars.githubusercontent.com/u/93325550?v=4" height="50" width="50">| Milton Ojeda | miltonezequielojeda@hotmail.com  | [@ojedamilton](https://github.com/ojedamilton)