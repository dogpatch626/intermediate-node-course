const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const port=8000;
const app= express();

const User = require('./models/User');
mongoose.connect('mongodb://localhost/userData')

app.use(bodyParser.json());

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}

})


module.exports= mongoose.model('User',UserSchema)


app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users',(req,res)=>{
  // User.create()
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})

