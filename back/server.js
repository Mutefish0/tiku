"use strict"

let express = require('express')
let app = express()

app.use(express.static('../front/public'))
app.listen(80)