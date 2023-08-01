const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const userRoutes = require('./src/routes/userRoutes')
const productRoutes = require('./src/routes/productRoutes')
const {connectDB} = require('./src/utils/db')
const app = express()

app.use(express.json())
app.use(morgan('common'))

app.use('/user',userRoutes)
app.use('/products',productRoutes)

app.listen(3000,()=>{
  console.log('Server started',3000)
  connectDB("mongodb://127.0.0.1:27017")
})

