var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
var qstring = require('querystring');
var https = require('https');
var foodDataJSON; //used to store api data into json form
var clientData = []; //used to send data for client
const API_KEY = 'c763b365d2f0baf8066b14f761311356';

//if user opens localhost:3000 they will be redirected to app main page /recipes
router.get('/', function(req, res, next) {
  res.redirect('/recipes');
});

//take url parameters for ingredients and call get recipe function
router.get('/recipes', function(req, res, next) {
var reqUrl = req.url;
let query = url.parse(reqUrl).query;
if(query !== null) {
  //if there is ingredient query within url
  var qsUrl = qstring.parse(query);
  console.log("Search query:");
  console.log(qsUrl);
  getRecipes(qsUrl.ingredient, res);
} else {
  //if empty submit request is made or on loading page, load default recipes (food2fork top 9)
  var qsUrl = qstring.parse(query);
  qsUrl.ingredient = 'default';
  console.log("Search query received from client: ");  
  getRecipes(qsUrl.ingredient, res);
  }
});

//post requests made by submit button are changed to get request and is redirected to route /recipe with appropriate ingredients
router.post('/recipes/submit', function(req, res, next) {
  var ingredient = req.body.ingredient;
  res.redirect('/recipes/?ingredient=' + ingredient);
});

//take recipe data in chunks and convert into json, then send json data to client and sendfile recipes.html to be displayed on client
function parseRecipeAndSend(recipeResponse, res) {
  let foodData = '';
  recipeResponse.on('data', function (chunk) {
    foodData += chunk
  })
  recipeResponse.on('end', function () {
    foodDataJSON = JSON.parse(foodData);
    //if ingredients(s) have less than 9 entries, app will not function
    if(foodDataJSON.count < 9) {
      res.send('These ingredients have less than 9 entries. App unable to display. Please go back and try a different search.');
      return;
    }
    for(var i=0; i<9; i++) {
      clientData[i] = foodDataJSON.recipes[i];
    }
    router.get('/recipes/data', function(req,res,next) {
      res.json(clientData);
      console.log("To see JSON data being sent to server, uncomment line 60 of index.js");
      console.log("JSON Data sent to client: ");  console.log(clientData);
    })
    res.sendFile(path.resolve('views/recipes.html'));
  })

}

//get recipe api data from food2fork.com using registered key using http request
function getRecipes(ingredient, res) {

var options = '';
if(ingredient=='default'){
   options = {
    host: 'www.food2fork.com',
    path: '/api/search?key=' + API_KEY
  }
} else {
  options = {
     host: 'www.food2fork.com',
     path: '/api/search?q=' + ingredient + '&key=' + API_KEY
  }
 }
  https.request(options, function(apiResponse){
    console.log("HERE2");
    console.log(options);
    console.log(apiResponse);
  parseRecipeAndSend(apiResponse, res);
  }).end()
}

module.exports = router;
