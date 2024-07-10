
try{

const resultado = converte(123);

console.log(resultado);

}catch(error: any) {
    if (error instanceof TypeError)
        console.error("\nVocê digitou um número. Digite um texto e tente novamente! ");
    else
        console.log("\nErro inesperado! Contate o aministrador do sistema. ")
}finally{
    console.log("\nFim do código! ")
}          

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}

