const mirarCarrito = document.getElementById ("mirarCarrito");
const modalContenedor = document.getElementById ("modalContenedor");
const unidadesCarrito = document.getElementById ("unidadesCarrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let tiendaContenido = document.querySelector ("#tiendaContenido")
fetch ("archivo.json")
    .then ((resp) => resp.json ())
    .then ((archivo) => {
        console.log (archivo.results);

        archivo.map ((item) => {
            const contenido = document.createElement ("div");
            contenido.className = "card";
            contenido.innerHTML = ` 
            <img src="${item.img}">
            <h2> ${item.nombre}</h2>
            <p class="precio">$${item.valor} </p>
            `;
            tiendaContenido.append(contenido);
            let comprar = document.createElement ("button")
            comprar.innerText = "AGREGAR AL CARRITO";
            comprar.className = "agregar";

            contenido.append(comprar);

            comprar.addEventListener ("click", () => {
            const coincidir = carrito.some ((coincidirProducto) => coincidirProducto.id === item.id);

            if (coincidir){
                carrito.map((produc) => {
                    if (produc.id === item.id) {
                        produc.unidades++;
                }
            });
            } else {
                carrito.push({
                id : item.id,
                nombre: item.nombre,
                valor: item.valor,
                unidades: item.unidades,
        });
        console.log (carrito);
        console.log (carrito.length);
        carritoCounter ();
        saveLocal ();
    }
    });
        });   
});

const saveLocal = () =>{
localStorage.setItem ("carrito", JSON.stringify(carrito));
};

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_dkrv3yo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviando Email';
      swal('Tu mensaje ha sido enviado');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});