const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const api=require('./server/routes/api')//

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/',api);


app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

////////////////////

// app.get('/buy/:furnitureName', function (request, response) {
//     let name = request.params.furnitureName
//     let found_index = store.findIndex(a => a.name === name);
//     let inv=store[found_index].inventory--;
//     response.send(store[found_index])
// })
