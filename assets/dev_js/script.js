import { frases } from './frases.min.js'

const gerarParagrafo = (qtd) => {
    const frasesAleatorias = [];
    for (let i = 0; i < qtd; i++) {
        const count = frases.length
        const indexRandomico = parseInt( Math.random() * count )
        frasesAleatorias.push(frases[indexRandomico])
    }
    return frasesAleatorias.join('\n\n')
}

document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result')
    const formGerar = document.getElementById('gera-paragrafo')
    const copyBtn = document.getElementById('copy-text')
    
    formGerar.addEventListener('submit', (e) => {
        e.preventDefault();
        const numeroParagrafo = document.getElementById('numero-paragrafo').value
        resultDiv.innerHTML = '';
        const retornoFrases = gerarParagrafo(numeroParagrafo)
        resultDiv.append(retornoFrases)
    })

    copyBtn.addEventListener('click', () => {
        resultDiv.select()
        document.execCommand('copy')
    })
});