const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')
const port = 3000

app.set('view engine', 'ejs')

app.use('/articleRouter', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title:  'test article',
        createdAt: Date.now(),
        description: 'test description'
    }]
    res.render('index.ejs', { artcles: articles})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${3000}`))