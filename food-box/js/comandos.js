var prato ;
var bebida;
var sobremesa;

function escolherFrango() {
    document.getElementById("frango").setAttribute('class','select' )
    document.getElementById("carne").setAttribute('class', 'produto')
    prato = "frango"
}

function escolherCarne() {
    document.getElementById("carne").setAttribute('class','select' )
    document.getElementById("frango").setAttribute('class', 'produto')
    prato = "carne"
}

function escolherCoca() {
    document.getElementById("coca").setAttribute('class','select' )
    document.getElementById("refresco").setAttribute('class', 'produto')
    bebida = "coca"
}

function escolherRefresco() {
    document.getElementById("refresco").setAttribute('class','select' )
    document.getElementById("coca").setAttribute('class', 'produto')
    bebida=  "refresco"
}

function escolherPudim() {
    document.getElementById("pudim").setAttribute('class','select' )
    document.getElementById("sorvete").setAttribute('class', 'produto')
    sobremesa = 'pudim'
}

function escolherSorvete() {
    document.getElementById("sorvete").setAttribute('class','select' )
    document.getElementById("pudim").setAttribute('class', 'produto')
    sobremesa = 'sorvete'
}


function finalizarPedido() {
    let msg = montarMensagem(prato, bebida, sobremesa)
    window.open(`https://wa.me/+5521999999999?text=${msg}`)
}

function montarMensagem(prato, bebida, sobremesa) {
    if (prato == null) {
        prato = ''
    }else{
        prato = `${prato}`
    }
    
    if (bebida == null) {
        bebida = ''
    }else{
        bebida = `, ${bebida}`
    }

    if (sobremesa == null) {
        sobremesa = ''
    }else{
        sobremesa = `e ${sobremesa}`
    }


    let mensagem = `Ola Gostaria de pedir um combo de ${prato}${bebida} ${sobremesa}`
    return mensagem

    
        

}


