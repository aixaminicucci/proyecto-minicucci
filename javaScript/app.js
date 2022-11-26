const tiendaContenido = document.getElementById("tiendaContenido");
const mirarCarrito = document.getElementById ("mirarCarrito");
const modalContenedor = document.getElementById ("modalContenedor");
const unidadesCarrito = document.getElementById ("unidadesCarrito");
let carrito = [];

mercancia.forEach((product) => {
    let contenido = document.createElement("div");
    contenido.className = "card";
    contenido.innerHTML = ` 
    <img src="${product.img}">
    <h2> ${product.nombre}</h2>
    <p class="precio">$${product.valor} </p>
    `;
    
    tiendaContenido.append(contenido);

    let comprar = document.createElement ("button")
    comprar.innerText = "AGREGAR AL CARRITO";
    comprar.className = "agregar";

    contenido.append(comprar);

    comprar.addEventListener ("click", () => {
        const coincidir = carrito.some ((coincidirProducto) => coincidirProducto.id === product.id);

        if (coincidir){
            carrito.map((produc) => {
                if (produc.id === product.id) {
                    produc.unidades++;
                }
            });
        } else {
            carrito.push({
            id : product.id,
            nombre: product.nombre,
            valor: product.valor,
            unidades: product.unidades,
        });
        console.log (carrito);
        console.log (carrito.length);
        carritoCounter ();
        saveLocal ();
    }
    });
});

const saveLocal = () =>{
localStorage.setItem ("carrito", JSON.stringify(carrito));
};