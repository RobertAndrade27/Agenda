const express = require('express');
const app = express ();
const morgan = require('morgan');
require('./database')

app.use(morgan('dev'));

app.set('port', 3001);

app.listen(app.get('port'), () => {
  console.log(`Api está rodando na porta  ${app.get('port')}`)
})
