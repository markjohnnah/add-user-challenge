
const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const ejsLayouts = require('express-ejs-layouts')

const User = require("./models/user")

PORT = 3000

const app = express()

//mongoose.connect("mongodb://localhost/user-collection", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = global.Promise;

// Connecting to the database
  mongoose.connect('mongodb://localhost/user-collection', {
    useNewUrlParser: true,  
            useUnifiedTopology: true,
            useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

app.set('view engine','ejs')
app.use(ejsLayouts)

app.get('/', function(req, res) {

    res.render('index')

})
app.post('/register', function(req, res) {

    let userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email

    }

//create user
// const user = new User( {   
      
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email
// })

//save user
// user.save()
// .then(user => {
//     console.log(user.body);
// }).catch(err => {
//     res.status(500).send({
//         message: err.message || "error creating user."
//     });
// });
console.log(userData)
res.render('index', userData)


})


app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});