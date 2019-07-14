const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User');

router.get('/', (req, res) => {
    Blog.find().then(blogs => {
            res.status(200).json(blogs)
        });
    });

router.get('/featured', (req,res) => {
    Blog
        .where({ featured: true })
        .then(blogs => {
            res.status(200).json(blogs)
        });
});

router.get('/:id', (req, res) => {
    Blog
        .findById(req.params.id)
        .then(findBlog => {
            if(!findBlog) { return res.status(404).end(); }
            res.status(200).json(findBlog);
        })
});

router.post('/', (req, res) => {
    var blog = new Blog (req.body)
    blog.save(function (err, post) {
        if(err) { return next(err) }
        res.json(201, blog)
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    Blog
        .findByIdAndUpdate(id, {
            title: req.body.title,
            article: req.body.article,
            published: req.body.published,
            featured: req.body.featured,
            author: req.body.author
        })
        .then(blogs => {
            res.status(204).json(blogs)
        })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id

    Blog
        .findByIdAndRemove(id)
        .then(blogs => {
            if(blogs) res.status(200).json(blogs)
        })
})

module.exports = router;