const PORT = 3004
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const url = 'https://myanimelist.net/topanime.php'

const app = express()

axios(url)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
        const animeData = []

        $('.detail', html).each(function (){
            const animeDesc = $(this).text()
            const animeURL = $(this).find('a').attr('href')
            animeData.push({
                animeDesc,
                animeURL,
            })
        })
        console.log(animeData)

    })
    .catch(err => console.log(err)) 
    

app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))