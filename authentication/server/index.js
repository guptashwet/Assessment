const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const Post = require('./models/Post')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            } else {
                res.json("the password is incorrect")
            }
        } else{
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(emloyees => res.json(emloyees))
    .catch(err => res.json(err))
});

app.post('/post', (req,res) => {
     Post.create(req.body)
     .then(Post => res.json(Post))
     .catch(err => res.json(err))
});

app.get('/Postlist', (req,res) =>{
    Post.find()
    .then(Post => res.json(Post))
    .catch(err => res.status(500).json({ error: err.message }));
});

//delete post route

app.delete('/post/:id', async (req, res) => {
    try {
      const result = await Post.findByIdAndDelete(req.params.id);
      if (!result) {
        return res.status(404).send({ message: 'Post not found' });
      }
      res.status(200).send({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Error deleting post' });
    }
  });

app.listen(3001, () => {
    console.log("server is running");
})