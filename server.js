const express = require('express');
const app = express();
const sunset = 'https://static.rootsrated.com/image/upload/s--dOztdKo4--/t_rr_large_traditional/xeeqiz2egntxuc7u5mce.jpg'


app.use(express.static('public'))


app.get('/', (request, response) => {
  response.send('hello world');
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});


const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};
app.use(urlLogger, timeLogger);

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Robbie"});
});

app.get('/sunsets', (request, response) => {
  response.send(`<img src=${sunset}>`)
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
