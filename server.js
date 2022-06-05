const express = require("express");
const ConnectDB = require("./config/connectDb");
const Router = require("./routes/userRoute");
const pizzasRoute = require("./routes/pizzasRoute")

const Pizza = require('./models/pizzaModel')
const app = express();

const PORT = process.env.PORT || 5000;
const ordersRoute = require('./routes/ordersRoute')

// db connection
ConnectDB();
// routes
app.use(express.json());
app.use("/api/users", Router);
app.use('/api/pizzas/', pizzasRoute);
app.use('/api/orders/', ordersRoute)



app.get("/getpizzas", (req, res) => {

    Pizza.find({}, (err, docs) => {

        if (err) {
            console.log(err)
        } else {
            res.send(docs)
            console.log(docs)
        }

    })

})




app.listen(
    PORT,
    console.log(`server is up and running on http://localhost:${PORT}`)
);