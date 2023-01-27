document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result')
    const formGerar = document.getElementById('gera-paragrafo')
    const copyBtn = document.getElementById('copy-text')
            
    formGerar.addEventListener('submit', (e) => {
        e.preventDefault();
        const numeroParagrafo = document.getElementById('numero-paragrafo').value
        const craqueNetoIpsum = window.mIpsum({
            pNum: numeroParagrafo,
            tagBefore: '',
            tagAfter: '\n\n'
        });
        resultDiv.innerHTML = '';
        resultDiv.innerHTML = craqueNetoIpsum;
    });
    copyBtn.addEventListener('click', () => {
        resultDiv.select()
        document.execCommand('copy')
    })
});