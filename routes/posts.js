const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())

module.exports = {
  app.getPosts('/posts', (req, res) => {

  })

  app.addPost('/posts', (req, res) =>{

  })

  app.updatePost('/posts/:postId', (req, res) => {

  })

  app.deletePost('/posts/:postId', (req, res) => {
    
  })
}
