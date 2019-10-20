const express = require('express');
const PORT = 8080;
const exphbs = require('express-handlebars');



const app = express();

var hbs = exphbs.create({
    extname: 'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')

app.use(express.urlencoded({extended: true}));

// app.method("route",handler)
// method (get,post,put,delete)


app.use("/users",require('./routes/users'))

















app.listen(PORT,()=> {
    console.log(`App is listing PORT ${PORT}`)
})