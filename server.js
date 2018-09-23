const express = require('express')
const routes = require('routes')

let app = express()

let store = {
  posts:[{
    name:"",
    url: "",
    text: "",
    comments:[]
  }]
};

app.listen(3000)
