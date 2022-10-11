const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const conn = require('./db/conn')

const router = require('./routers/ProductsRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

app.use('/products',router)

app.listen(5000)