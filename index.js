const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Load Connection
const connection = require('./database/database')
//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conectado com sucesso')
    })
    .catch(error => {
        console.log('error')
    })


//View engine
app.set('view engine', 'ejs')

//Static
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log('Server running in 8080')
})