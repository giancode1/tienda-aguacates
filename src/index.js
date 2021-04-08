console.log('Happy hacking :)')

const url = 'https://platzi-avo.vercel.app/api/avo';
const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app')

//web api: Int    formato: fecha-monedas
//documentacion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
const formaPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style:'currency',
        currency: "USD"
    }).format(price)
    return newPrice
}

//web api



//async await
const aguacates = async() => {
  try{
    const respuesta = await fetch(`${baseUrl}/api/avo`)
    const datos = await respuesta.json()

    const todosLosItems = []

    datos.data.forEach((item) =>{
       // console.log(item.name)
    const imagen = document.createElement("img")    
    imagen.src = `${baseUrl}${item.image}`

    const title = document.createElement("h2")  
    title.textContent = item.name  
    //title.style = "font-size: 3rem"
    //title.style.fontSize = "3rem"
    //title.className = "muy-grande"
    title.className = "text-lg text-green-500" //tailwind

    const price = document.createElement("div")
    //price.textContent =  item.price   //le pongo el precio en esta etiqueta
    price.textContent = formaPrice(item.price)
    price.className = "price" 

    const container = document.createElement("div")
    container.className = "aguacate-container" 
    container.append(imagen, title, price)

    todosLosItems.push(container)
    })
    //document.body.append(...todosLosItems)
    appNode.append(...todosLosItems)
  }catch(error){
    console.log(error)
  }
}
aguacates()