const express = require("express")

const routerUsers= require('./routes/users');

const app= express()

app.use(routerUsers)
app.get('/', (req, res) => {

    res.status(404).send( { "message": "Recurso solicitado no encontrado"  })

})
app.listen(3000)
