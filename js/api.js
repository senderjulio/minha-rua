const BASE_URL ="https://brasilapi.com.br/api";
const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

inputCep.addEventListener("keyup", async (evento) => {   
    // alert('pegou');
    if (inputCep.value.length < 8){
        return;
        }      
    // alert('CEP completo');
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {method: "GET"});
    const conteudoResposta = await resposta.json();
    
    // console.log(conteudoResposta);
    inputBairro.value = conteudoResposta.neighborhood;
    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city;
    inputUF.value = conteudoResposta.state
    
});