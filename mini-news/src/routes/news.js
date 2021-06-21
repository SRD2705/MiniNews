const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
const { render } = require('ejs')

newsRouter.get('', async(req,res) => {
    try{
        const testAPI = await axios.get('https://srd2705-news-api.herokuapp.com/')
        const newsAPI = await axios.get('https://srd2705-news-api.herokuapp.com/india_news')
        res.render('news', { articles : newsAPI.data })
        

    } catch (err) {
        if(err.response){
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }

})

//Testing

newsRouter.get('/india.ejs', async(req,res) => {
    try{
        const newsAPI = await axios.get('https://srd2705-news-api.herokuapp.com/india_news')
        res.render('news', { articles : newsAPI.data })

    } catch (err) {
        if(err.response){
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }

})

newsRouter.get('/world.ejs', async(req,res) => {
    try{
        const newsAPI = await axios.get('https://srd2705-news-api.herokuapp.com/world_news')
        res.render('news', { articles : newsAPI.data })

    } catch (err) {
        if(err.response){
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }

})

newsRouter.get('/tech.ejs', async(req,res) => {
    try{
        const newsAPI = await axios.get('https://srd2705-news-api.herokuapp.com/tech_news')
        res.render('news', { articles : newsAPI.data })


    } catch (err) {
        if(err.response){
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }
    

})

newsRouter.get('/sports.ejs', async(req,res) => {
    try{
        const newsAPI = await axios.get('https://srd2705-news-api.herokuapp.com/sports_news')
        res.render('news', { articles : newsAPI.data })

    } catch (err) {
        if(err.response){
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }

})

newsRouter.get('/entertainment.ejs', async(req,res) => {
    try{
        const newsAPI = await axios.get('https://srd2705-news-api.herokuapp.com/entertainment_news')
        res.render('news', { articles : newsAPI.data })

    } catch (err) {
        if(err.response){
            res.render('news', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            res.render('news', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', err.message)
        }
    }

})


module.exports = newsRouter