// Progression 1: create a function and fetch the api using axios
let api = 'https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=9496c5384c5f3f0a3fe369fe06fd650e'

async function getData() {
  try{
    let respnse = await axios.get(api)
    let storeData = respnse.data.articles;
    console.log(storeData)
    let container = document.getElementsByClassName('container')[0]
    display(storeData)
  }
  catch(er){
    console.log(er.message)
  }
}
 

function display(storeData){
  let container = document.getElementsByClassName('container')[0]
  storeData.forEach((element) => {
    container.innerHTML += `<div class="boxData">
      <h3>${element.title}</h3>
      <div>
        <img src="${element.image}" alt="imgPost">
      </div>
      <div>${element.description}</div>
    </div>`
    })
}
getData()