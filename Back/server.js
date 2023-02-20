const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Facts Events service listening at http://localhost:${PORT}`)
})

app.use('/convert', (req, res) => { // appel de la fonction 'convert'
  convert(req.body.data).then((resultat) => {
    res.send(resultat)
  })
})

const convert = (async (input) => { // conversion du champ en entrer
  var decimal = [100, 90, 50, 40, 10, 9, 5, 4, 1]
  var roman = ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let output = 0
  let newData = input;
  
  for (let i = 0; i <= decimal.length; i++) {
    while (newData % decimal[i] < newData) {
      output += roman[i];
      newData -= decimal[i];
    }
  }
  return output;
});