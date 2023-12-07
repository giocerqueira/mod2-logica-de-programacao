console.log("Ano novo está chegando!!")

const nomeCantora = "Mariah Carey"
let idadeCantora = 54
let anoAtual = 2023
const anoDeNascimento = anoAtual - idadeCantora
console.log(`A cantora ${nomeCantora} nasceu no ano de ${anoDeNascimento}. Como estamos no ano de ${anoAtual}, atualmente, a cantora tem ${idadeCantora} anos.`)

let quartaFeira = false
console.log(typeof quartaFeira)

let idade = 17
if (idade >= 18) {
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.")
} else {
    console.log("Sinto muito, mas assistirá da TV Globo.")
}

let mes = "Fevereiro"
if (mes === "Agosto" || mes === "Dezembro" || mes === "Junho") {
    console.log("Uma ou mais opções estão corretas")
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi o mês ${mes}.`)
}
