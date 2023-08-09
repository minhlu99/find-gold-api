const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const mongoose = require('mongoose');

const app = express()
const port = 3009

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`abcdf ${port}`)
})

const appRoute = require("./app/app.routes")
app.use("/", appRoute)


const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        tittle: "Find Gold",
        version: "1.0.0"
    }
}

const options = {
    swaggerDefinition,
    apis: [
    "./app/app.routes.js"
    ]
}

const swaggerSpec = swaggerJsdoc(options)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

mongoose.connect('mongodb+srv://find-gold:find-gold@cluster0.mw6xpff.mongodb.net/Find-Gold')
mongoose.connection
.once('open', function () {
    console.log('MongoDB running')
})
.on('error', function (err) {
    console.log(err)
})

// async function f() {
//     const kittySchema = new mongoose.Schema({
//         name: String,
//         age: Number
//     })
    
//     const Kitten = mongoose.model('Kitten', kittySchema)
    
//     // await Kitten.create({
//     //     name: "00a",
//     //     age: 10
//     // })
//     const tt = await Kitten.find({
        
//     })
// }

// f()