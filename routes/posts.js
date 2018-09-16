const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())

module.exports = {
  app.getPosts('/posts', (req, res) => {
    res.status(200).send(store.posts)
  })

  app.addPost('/posts', (req, res) =>{
    let newPost = req.body
    let id = store.posts.length
    store.posts.push(newPost)
    res.status(201).send({id: id})
  })

  app.updatePost('/posts/:postId', (req, res) => {

  })

  app.deletePost('/posts/:postId', (req, res) => {

  })
}
