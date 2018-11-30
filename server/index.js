require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')

const app = express()
app.use(bodyParser.json())


const port = process.env.PORT
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('You have connected to the database, my lord.')
    app.listen(port, () => { console.log(port + ' troopers at your command, my lord.') })
}).catch(err => console.log(err))




app.post('/products', controller.create)
app.get('/products', controller.getAll)
app.get('/products/:id', controller.getOne)
app.put('/products/edit/:id', controller.update)
app.delete('/products/:id', controller.delete)






