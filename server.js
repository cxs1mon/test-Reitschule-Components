const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || 'localhost';
const angebotRouter = require(`./routes/pages/angebot`);
const indexRouter = require(`./routes/pages/index`);
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/(index)?', indexRouter);
app.use('/angebot', angebotRouter);

app.listen(PORT, () => console.log(`Server listening on: 
http://${HOST}:${PORT}`));
