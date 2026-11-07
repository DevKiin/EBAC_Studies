// Classe que representa o parquímetro.
class Parquimetro {
    constructor(valor) {
        this.valor = valor;
        this.tempoMinutos = 0;
        this.troco = 0;
    }

    calcular() {
        if (!Number.isFinite(this.valor) || this.valor < 1) {
            return 'Insira um valor válido em reais. O valor mínimo é R$ 1,00.';
        }

        this.tempoMinutos = Math.floor(this.valor) * 10;
        this.troco = Math.round((this.valor % 1) * 100);

        return {
            tempoMinutos: this.tempoMinutos,
            troco: this.troco
        };
    }
}

function formatarTempo(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    if (horas > 0) {
        return `${horas} hora(s) e ${minutosRestantes} minuto(s)`;
    }

    return `${minutosRestantes} minuto(s)`;
}

function exibirResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');

    if (typeof resultado === 'string') {
        resultadoElemento.textContent = resultado;
        console.log(resultado);
        return;
    }

    resultadoElemento.textContent =
        `Tempo de estacionamento: ${formatarTempo(resultado.tempoMinutos)}. ` +
        `Troco: R$ ${(resultado.troco / 100).toFixed(2)}`;

    console.log(`Tempo de estacionamento: ${formatarTempo(resultado.tempoMinutos)}`);
    console.log(`Troco: R$ ${(resultado.troco / 100).toFixed(2)}`);
}

let tempoRestante = 0;
let intervaloCronometro = null;

function atualizarCronometro() {
    const cronometroElemento = document.getElementById('cronometro');
    const horas = Math.floor(tempoRestante / 3600);
    const minutos = Math.floor((tempoRestante % 3600) / 60);
    const segundos = tempoRestante % 60;

    cronometroElemento.textContent =
        `${String(horas).padStart(2, '0')}:` +
        `${String(minutos).padStart(2, '0')}:` +
        `${String(segundos).padStart(2, '0')}`;
}

function iniciarCronometro(minutos) {
    tempoRestante += minutos * 60;
    atualizarCronometro();

    if (intervaloCronometro !== null) {
        return;
    }

    intervaloCronometro = setInterval(() => {
        tempoRestante--;
        atualizarCronometro();

        if (tempoRestante <= 0) {
            clearInterval(intervaloCronometro);
            intervaloCronometro = null;
            tempoRestante = 0;
            atualizarCronometro();
        }
    }, 1000);
}

function configurarFormulario() {
    const formulario = document.getElementById('parquimetroForm');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const campoValor = document.getElementById('valor');
        const valor = Number(campoValor.value);
        const parquimetro = new Parquimetro(valor);
        const resultado = parquimetro.calcular();

        if (typeof resultado === 'string') {
            campoValor.value = '';
        } else {
            iniciarCronometro(resultado.tempoMinutos);
        }

        exibirResultado(resultado);
    });
}
// Configura o formulário quando o conteúdo do DOM estiver carregado.
document.addEventListener('DOMContentLoaded', configurarFormulario);
