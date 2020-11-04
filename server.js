
const express = require('express')
const bodyParser = require('body-parser')
const ejsLayouts = require('express-ejs-layouts')


PORT = 3000

const app = express()

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

const message = `Thank you ${userData.firstname} ${userData.lastname} for registering`
console.log(userData)
res.render('index', message)


})


app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});