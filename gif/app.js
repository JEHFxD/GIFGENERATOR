const apiKey = "YwuSVJOSyuP5FgIz1kAalS3zpL6KIcej"
const GifSearch = document.getElementById('gif-search')
const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
const gifContainer = document.getElementById('gif')


const makegif = (mygif)=>{
    const container = document.createElement('div')
    container.classList.add('gif')

    const imgGif= document.createElement('img')
    imgGif.src=mygif.images.original.url

    container.appendChild(imgGif)
    gifContainer.appendChild(container)

    document.getElementById('gif').appendChild(container)
}

const render = (gifs)=>{
    gifContainer.innerHTML=""
    gifs.forEach(gifto=>makegif(gifto))
    console.log(gifto)
}

const getgif = async()=>{
    const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
    const data = await response.json()
    data.data.forEach(gifto=>makegif(gifto)) 
}

const searchGif = async()=>{
    const response = await fetch(url)
}

window.addEventListener('DOMContentLoaded',getgif)