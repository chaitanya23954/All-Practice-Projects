// Sequelize CRUD Example using MySQL

const express = require('express');
const bodyParser = require("body-parser");
const router = require("./routers/emp.routes");
const sequelize = require("./db");

const app = express();
app.use(bodyParser.json());

app.use("/api", router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(400).json({message : "something went wrong"});
});

// Sync database and riun server
sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
})
  .catch(err => {
    console.error('Error syncing DB:', err);
    });


