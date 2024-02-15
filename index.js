let parcelas = parseFloat(prompt('Insira o valor das parcelas a investir:'))
let meses = parseFloat(prompt('Insira a quantidade de meses:'))
let juros = parseFloat(prompt('Insira o juros(%):'))
let valorAcumulado = 0

function CalcularJurosCompostos() {
    for(let i = 1; i <= meses; i++){
        valorAcumulado = (valorAcumulado + parcelas)
        let jurosCompostos = valorAcumulado + (valorAcumulado * (juros/100))
        console.log(`Mês ${i}: $${jurosCompostos}`)
    }
}
CalcularJurosCompostos()