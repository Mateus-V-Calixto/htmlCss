var prato ;
var bebida;
var sobremesa;

function escolherFrango() {
    document.getElementById("frango").setAttribute('class','select' )
    document.getElementById("carne").setAttribute('class', 'produto')
    prato = "Frango"
}

function escolherCarne() {
    document.getElementById("carne").setAttribute('class','select' )
    document.getElementById("frango").setAttribute('class', 'produto')
    prato = "Carne"
}

function escolherCoca() {
    document.getElementById("coca").setAttribute('class','select' )
    document.getElementById("refresco").setAttribute('class', 'produto')
    bebida = "Coca"
}

function escolherRefresco() {
    document.getElementById("refresco").setAttribute('class','select' )
    document.getElementById("coca").setAttribute('class', 'produto')
    bebida=  "Refresco"
}

function escolherPudim() {
    document.getElementById("pudim").setAttribute('class','select' )
    document.getElementById("sorvete").setAttribute('class', 'produto')
    sobremesa = 'Pudim'
}

function escolherSorvete() {
    document.getElementById("sorvete").setAttribute('class','select' )
    document.getElementById("pudim").setAttribute('class', 'produto')
    sobremesa = 'Sorvete'
}


function finalizarPedido() {
    alert(`${prato}${bebida}${sobremesa}`)
}


