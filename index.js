const express = require('express');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));

router.get('/',(req,res) => {
    res.render('Home');
      });

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});

