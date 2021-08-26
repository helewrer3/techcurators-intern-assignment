# TechCurators Intern Assignment
API to take question data from a public [google sheet](https://docs.google.com/spreadsheets/d/1y9FaIqgfUYcuBsfFzKrdCA3-hiw6fcsD_B3dau525n4/edit?usp=sharing) and insert it into MongoDB database.

### The webapp will be deployed on [Heroku](https://techcurators-intern-assignment.herokuapp.com/)

## Technologies Used
+ NodeJS
+ Express
+ MongoDB
+ Mongoose
+ Google APIs
+ HTML, Javascript

## Usage
+ ```/```: "Welcome Screen"
+ ```/all```: "Getting all questions currently in the DB"
+ ```/save```: "Saving all questions into DB, no duplicate questions are inserted."}

## Deploying Locally
Simply clone the repo locally and run the following commands at the root of the project - 
```
  npm install
  npm start
```
Log into the port number 5000 or whatever port number you have set as your environment variable of node.

### Dependencies
To run this app locally, you need to have [NodeJS](https://nodejs.org/en/) installed in your system.