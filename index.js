
let btnNumeros = document.getElementsByClassName('botaoNumero');
let visor = document.getElementById('visor')
let btnOperadores = document.getElementsByClassName('botaoOperadores')
let valor_salvo = null;
let operador_salvo = null;
let botao_igual = document.getElementById('botao_igual')

for (let botao of btnNumeros) {
    botao.addEventListener('click', clica_Numero)
}

function clica_Numero(event) {
    if (isNaN(visor.innerHTML) === false) {
        visor.innerHTML += event.target.innerHTML;
    }
    else {
        visor.innerHTML = event.target.innerHTML;
    }
}

for (let botao of btnOperadores) {
    botao.addEventListener('click', clica_Operador)
}
function clica_Operador(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (valor_salvo === null) {
            valor_salvo = Number(visor.innerHTML)
        }
        else {
            let result = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
            visor.innerHTML = result;
        }
    }
    visor.innerHTML = event.target.innerHTML;
    operador_salvo = event.target.innerHTML;
}

let ac = document.getElementById('ac')
ac.addEventListener('click', limpa_Tudo)

function limpa_Tudo(event) {
    visor.innerHTML = ""
    valor_salvo = null
    operador_salvo = null
}

let c = document.getElementById('c');
c.addEventListener('click', limpa_um)

function limpa_um(event) {
    visor.innerHTML = visor.innerHTML.slice(0, visor.innerHTML.length - 1)
}

let ponto = document.getElementById('botao-ponto');
ponto.addEventListener('click', clica_ponto);

function clica_ponto(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (visor.innerHTML.includes('.') == false)
            visor.innerHTML += event.target.innerHTML;
    }
    else {
        visor.innerHTML = event.target.innerHTML;
    }
}

let body = document.getElementById('body')
body.addEventListener('keydown', keydown)
function keydown(event) {
    if (event.key === "/") {
        document.getElementById('botao-divisao').click();
    } else if (event.key === "X" || event.key === "x") {
        document.getElementById('botao-multiplicacao').click();
    } else if (event.key === "-") {
        document.getElementById('botao-menos').click();
    } else if (event.key === ".") {
        document.getElementById('botao-ponto').click();
    } else if (event.key === "+") {
        document.getElementById('botao-mais').click();
    }
    else if (event.key === "%") {
        document.getElementById('botao-porcentagem').click();
    }
    else if (event.key === "0") {
        document.getElementById('botao-zero').click();
    }
    else if (event.key === "1") {
        document.getElementById('botao-um').click();
    }
    else if (event.key === "2") {
        document.getElementById('botao-dois').click();
    }
    else if (event.key === "3") {
        document.getElementById('botao-tres').click();
    }
    else if (event.key === "4") {
        document.getElementById('botao-quatro').click();
    }
    else if (event.key === "5") {
        document.getElementById('botao-cinco').click();
    }
    else if (event.key === "6") {
        document.getElementById('botao-seis').click();
    }
    else if (event.key === "7") {
        document.getElementById('botao-sete').click();
    }
    else if (event.key === "8") {
        document.getElementById('botao-oito').click();
    }
    else if (event.key === "9") {
        document.getElementById('botao-nove').click();
    } else if (event.keyCode === 8) {
        limpa_um(event)
    } else if (event.keyCode === 46) {
        limpa_Tudo(event)
    }
    else if (event.keyCode === 13) {
        calcula_resultado(event)
    }
}
function clica_operadores(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (valor_salvo === null) {
            valor_salvo = Number(visor.innerHTML)
        }
    }

}
botao_igual.addEventListener('click', calcula_resultado);

function calcula_resultado(event) {
    if (valor_salvo != null && operador_salvo != null && isNaN(visor.innerHTML) === false) {
        let result = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
        visor.innerHTML = result;
        valor_salvo = null;
        operador_salvo = null;
    }
}
function executa_operacao(valor1, operador, valor2) {
    if (operador === '+')
        return valor1 + valor2
    else if (operador === '-')
        return valor1 - valor2
    else if (operador === 'X')
        return valor1 * valor2
    else if (operador === '÷')
        return valor1 / valor2
    else if (operador === '%')
        return valor1 * (valor2 / 100)
}