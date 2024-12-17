const { Router } = require('express');
const indexRouter = Router();
const { meineLeidenschaft, meinZiel } = require('../../config.js');
const ejs = require('ejs');

indexRouter.get('/', async (req, res) => {
    // const body = await ejs.renderFile('views/index-content.ejs', {meineLeidenschaft, meinZiel});
    res.render('index-content', {meineLeidenschaft, meinZiel, title: 'Willkommen'});
});

module.exports = indexRouter;