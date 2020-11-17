const mongoose = require('mongoose');

const app = require('./app');

mongoose
  .connect('mongodb://localhost:27017/ekobits', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection is successful!');
  });

const port = 8000;

app.listen(port, () => {
  console.log(`Application is running on port ${port}...`);
});
