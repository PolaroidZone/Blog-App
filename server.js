const express = require('express')
const mongoose = require('mongoose')
const app = express()
const articleRouter = require('./routes/articles')
const port = 3000

mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title:  'test article',
        createdAt: new Date(),
        description: 'test description'
    }]
    res.render('articles/index', { articles: articles})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${3000}`))