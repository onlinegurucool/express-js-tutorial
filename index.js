const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));

// app.method("route",handler)
// method (get,post,put,delete)


app.use("/users",require('./routes/users'))

















app.listen(PORT,()=> {
    console.log(`App is listing PORT ${PORT}`)
})