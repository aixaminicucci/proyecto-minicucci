const arrayMercaderia = [];

const mercaderia1 = new Mercaderia(1, 'torta bomba', 2500);
const mercaderia2 = new Mercaderia(2, 'magic cupcakes', 350);
const mercaderia3 = new Mercaderia(3, 'eclairs con crema', 150);
const mercaderia4 = new Mercaderia(4, 'medialunas', 110);
const mercaderia5 = new Mercaderia(5, 'donas', 130);
const mercaderia6 = new Mercaderia(6, 'lemon pie', 2200);
const mercaderia7 = new Mercaderia(7, 'chocotorta', 2100);
const mercaderia8 = new Mercaderia(8, 'chipitas', 400);
const mercaderia9 = new Mercaderia(9, 'alfajores de chocolate', 300);

arrayMercaderia.push (mercaderia1, mercaderia2, mercaderia3, mercaderia4, mercaderia5, mercaderia6, mercaderia7, mercaderia8, mercaderia9)

console.log (arrayMercaderia);

const disponerMayorAMenorValor = () => {
    arrayMercaderia.sort ((a, b) => b.valor - a.valor);
    presentarMenuSegunValor ();
};

const disponerMenorAMayorValor = () => {
    arrayMercaderia.sort ((a, b) => a.valor - b.valor);
    presentarMenuSegunValor ();
};

const presentarMenuSegunValor = () => {
    let array = [];
    arrayMercaderia.forEach (mercaderia => array.push(mercaderia.nombre+' $'+mercaderia.valor));
    alert ('Nuestros productos:'+'\n'+array.join('\n')) 
};

function saludar (){
    let nombre = prompt ('Ingrese su nombre');
    alert ('Bienvenido/a a Le Péché '+nombre)
}


function comprarProductos () {
    let mercaderiaNombre = '';
    let unidades = 0;
    let valorTotal = 0;
    let continuarComprando = false;

    do {
        mercaderiaNombre = prompt ('Escribe lo que desee comprar','Ej: medialunas');
        unidades = parseInt (prompt('Escriba la cantidad de unidades'));

        const mercaderia = arrayMercaderia.find (mercaderia => mercaderia.nombre === mercaderiaNombre);
        
        if (mercaderia) {
            valorTotal += mercaderia.valor * unidades;
        } else {
            alert ('No se encontraron resultados')
        }
        console.log(mercaderia);
        continuarComprando = confirm('Agregar mas productos');

    } while (continuarComprando)

    atribuirPromo (valorTotal);

}
function atribuirPromo (valorTotalAccion) {
    if (valorTotalAccion >= 10000) {
        valorTotalAccion = valorTotalAccion * 0.75;
        alert ('Accediste a nuestra promo exclusiva. El total de la compra es: '+valorTotalAccion);
    } else {
        alert('El total de la compra es: '+valorTotalAccion);
    }
};
function ordenar () {
    const ordenar = confirm ('¿Desea ordenar nuestro menú de mayor a menor costo?');
    if (ordenar) {
         disponerMayorAMenorValor();
    } else {
        disponerMenorAMayorValor ();
    }
    comprarProductos ();
};
function retirar () {
    alert ('Ya estamos realizando su pedido, estará listo en 20 minutos. ¡Lo/a esperamos!');
}
saludar ();
ordenar ();
retirar ();