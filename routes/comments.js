const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())

module.exports = {
  app.getComments('/posts/:postId/comments', (req, res) => {

  })

  app.addPost('/posts/:postId/comments', (req, res) =>{

  })

  app.updatePost('/posts/:postId/comments/:commentId', (req, res) => {

  })

  app.deletePost('/posts/:postId/comments/:commentId', (req, res) => {

  })
}
