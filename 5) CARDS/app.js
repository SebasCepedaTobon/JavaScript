const main = document.querySelector('#main');
const cardTarjeta= document.querySelector('#tarjeta-wrap')
const footer = document.querySelector('.pie')
const templateCarrito = document.getElementById('template-carrito').content


const fragment = document.createDocumentFragment()

let sobresFIFA=[
    {precio: 95000, id: 1, title: "Cristiano", img: "img/cristiano.png"},
    {precio: 70000, id: 2, title: "Coutinho", img: "img/coutinho.png"},
    {precio: 120000, id: 3, title: "Dembele",  img: "img/dembele.png"},
    {precio: 230000, id: 4, title: "Joao Felix", img: "img/felix.png"},
    {precio: 600000, id: 5, title: "Neymar Jr", img: "img/neymar.png"},
    {precio: 350000, id: 6,  title: "Ibrahimovic",   img: "img/ibra.png"}
]

main.addEventListener('click', e =>{
    addCarrito(e)
})

create_card()


function create_card(){
    sobresFIFA.forEach(sobre => { //sobre representa a el producto en el for y sobresFiFA al (productos)
        const card=document.createElement('div');
        const imgCard = document.createElement('img');
        const nombreJugador=document.createElement('h2');
        const p_card=document.createElement('p')
        const card2=document.createElement('div');
        const pCard = document.createElement('p');
        const btnAgregar = document.createElement('button');

        card.classList.add('tarjeta');
        card.setAttribute('id', 'tarjeta')
        nombreJugador.classList.add('title')
        nombreJugador.setAttribute('id','title');
        nombreJugador.textContent=sobre.title;
        p_card.classList.add('precio')
        p_card.setAttribute('id', 'parrafo')
        p_card.textContent=sobre.precio     
        imgCard.setAttribute('id', 'articulo');
        imgCard.setAttribute('src', sobre.img);
        card2.classList.add('atras');
        pCard.textContent="Leonel Andres Messi juagador del Paris, Media punta con una media de 94";
        pCard.setAttribute('id', 'info');
        btnAgregar.classList.add('btn-agregar');
        btnAgregar.setAttribute('id', 'btn');
        btnAgregar.dataset.id=sobre.id;
        btnAgregar.textContent="Agregar"

        card.appendChild(nombreJugador)
        card.appendChild(imgCard);
        card.appendChild(p_card);
        card.appendChild(card2);
        card2.appendChild(pCard);
        card2.appendChild(btnAgregar);
        fragment.appendChild(card);
    });
    
    cardTarjeta.appendChild(fragment);
    main.appendChild(cardTarjeta);    
}


const addCarrito = e => {
    if(e.target.classList.contains('btn-agregar')){
        setCarrito(e)
    }
    e.stopPropagation()
}


function setCarrito(e){
    const button = e.target
    const item = button.closest('.tarjeta')

    const itemNombre = item.querySelector('h2').textContent

    const itemPrecio = item.querySelector('.precio').textContent

    const itemImg = item.querySelector('img').src

    const itemId = item.querySelector('button').dataset.id
    
    

    addItem(itemNombre, itemPrecio, itemImg, itemId)
}

function addItem(itemNombre, itemPrecio, itemImg, itemId){

    const contenedor_table = document.createElement('div')
    contenedor_table.setAttribute('id', 'contenedorTable')

    templateCarrito.querySelector('img').src = itemImg
    templateCarrito.querySelector('span').textContent = itemPrecio
    templateCarrito.querySelectorAll('td')[2].textContent = itemNombre
    templateCarrito.querySelectorAll('td')[0].textContent=itemId
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
    contenedor_table.appendChild(fragment)
    footer.appendChild(contenedor_table)
}







