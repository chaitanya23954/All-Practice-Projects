

const express = require('express');
const { sequelize } = require('./models');
const emp_router = require('./routers/emp.routes');

const  app = express();
app.use(express.json());
app.use('/api/employees', emp_router);


sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
      console.log('server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Connection error:', err)
  });
