
const express = require('express')
const bodyParser = require('body-parser')
const ejsLayouts = require('express-ejs-layouts')

PORT = 3000

const app = express()

//attaches data to response object
app.use(bodyParser.urlencoded({extended:true}));

//serves staic files
app.use(express.static('public'))

//sets ejs view engine template
app.set('view engine','ejs')
app.use(ejsLayouts)

//default route
app.get('/', function(req, res) {

    res.render('index')

})

//handles form post request
app.post('/register', function(req, res) {

    let userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    }
//TODO: add user to db

const message = `Thank you ${req.body.firstname} ${req.body.lastname} for registering`
console.log(userData)
res.render('index', {
    message: message
})


})


app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});