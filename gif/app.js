const apiKey = "lJJE56M5im4gZI8B7LCzCAJCvDsvb6yR"
const GifSearch = document.getElementById('gif-search')
const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
const url_search=`http://api.giphy.com/v1/gifs/search?api_key=`+apiKey+`&q=`
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
    gifs.forEach((gifto)=>{
        makegif(gifto);
    })
}

const getgif = async()=>{
    let query= url+"&limit=14"
    const response = await fetch(query)
    const data = await response.json()
    data.data.forEach((gifto)=>{makegif(gifto)}) 
}

const searchGif = async()=>{
    const response = await fetch(url_search+GifSearch.value+"&limit=14")
    const data = await response.json()
    render(data.data)
}

window.addEventListener('DOMContentLoaded',getgif)
GifSearch.addEventListener('keyup',searchGif)