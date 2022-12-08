const apretarCarrito = () => {
    modalContenedor.innerHTML ="";
    modalContenedor.style.display ="flex";
    const modalHeader = document.createElement ("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = ` 
        <h1 class="modal-header-titulo"> Tus compras</h1>
    `;
    
    modalContenedor.append (modalHeader);

    const modalButton =document.createElement ("button");
    modalButton.innerHTML= "X";
    modalButton.className= "modal-header-button";

    modalButton.addEventListener ("click", () => {
        modalContenedor.style.display ="none";
    });

    modalHeader.append (modalButton);

    carrito.forEach ((product) => {
        let carritoContenido = document.createElement ("div")
        carritoContenido.className = "modal-contenido"
        carritoContenido.innerHTML =  `
            <h4>${product.nombre}</h4>
            <p>$${product.valor}</p>
            <span class="restar"> - </span>
            <p>unidades: ${product.unidades} </p>
            <span class="sumar"> + </span>
            <button class= "borrar-producto"> Quitar producto </button>
        `;

        modalContenedor.append(carritoContenido);

        let restar =carritoContenido.querySelector (".restar");
        restar.addEventListener ("click", () =>{
            if(product.unidades !==1){
                product.unidades--;
            }
            saveLocal();
            apretarCarrito ();
        });

        let sumar = carritoContenido.querySelector (".sumar")
        sumar.addEventListener("click", () => {
            product.unidades++;
            saveLocal();
            apretarCarrito();
        });

        let descartar = carritoContenido.querySelector (".borrar-producto");

        descartar.addEventListener("click", () => {
            descartarProducto (product.id);
        })
    });


    const total = carrito.reduce ((acumulado, elemento) => acumulado + elemento.valor * elemento.unidades, 0);

    const totalCompra = document.createElement ("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total de tu compra: $ ${total}
    <button id="vaciar-carrito" class="vaciar-carrito"> Vaciar carrito </button>
    `;
    modalContenedor.append (totalCompra);

    let vaciar = totalCompra.querySelector (".vaciar-carrito")
    vaciar.addEventListener ("click", () => {
        carrito.length = 0;
        swal('Vaciaste tu carrito');
        carritoCounter ();
        saveLocal();
        apretarCarrito();
        
    });

};

mirarCarrito.addEventListener ("click", apretarCarrito);

const descartarProducto = (id) => {
    const buscarId = carrito.find ((element) => element.id ===id);
    carrito = carrito.filter ((carritoId) => {
        return carritoId !==buscarId;
    });
    carritoCounter ();
    saveLocal ();
    apretarCarrito ();
};



const carritoCounter = () => {
    unidadesCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem ("carritoLength", JSON.stringify(carritoLength))
    unidadesCarrito.innerText = JSON.parse (localStorage.getItem ("carritoLength"))
};

carritoCounter ();