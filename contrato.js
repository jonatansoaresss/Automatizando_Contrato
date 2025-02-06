function locador(){
    let resp = window.confirm("AGORA VOCE VAI PREENCHER AS INFORMÇÕES DO LOCADOR")
     if (resp == false){
         return fim() //retona e encerra
     }
    let locador_nome = document.getElementById ("locador_nome")
    let nacionalidade_locador = document.getElementById ("nacionalidade_locador")
    let status_locador = document.getElementById ("status_locador")
    let profissão_locador = document.getElementById ("profissão_locador")
    let cpf_locador0 = document.getElementById ("cpf_locador0")
    let rg_locador = document.getElementById ("rg_locador")
    let endereco_locador = document.getElementById ("endereco_locador")
     let cpf_locador1 = document.getElementById("cpf_locador1")
    //adicionando informações atraves do prompt

    locador_nome.innerText = window.prompt("informe o nome do locador")

    nacionalidade_locador.innerText = window.prompt("informe a nacionalidade")

    status_locador.innerText = window.prompt("informe seu status civil")
   
    profissão_locador.innerText = window.prompt("informe sua profissão")

    cpf_locador0.innerText = window.prompt("informe seu CPF: ")
     cpf_locador1.innerText = cpf_locador0.innerText
    rg_locador.innerText = window.prompt("Informe seu RG: ") 

    endereco_locador.innerText = window.prompt("informe seu endereco: ")
    let res = window.prompt("DESEJA PREENCHER AS INFORMAÇÕES DO LOCATARIO, 1 - SIM   2 - NAO")

    if (res == 1){
        locatario()
    }else{
        window.alert("OBRIGADO, AGUARDO MINHA COMISSÃO")
    }
}
function locatario(){
    window.alert("AGORA VOCE VAI PREENCHER AS INFORMAÇÕES DO LOCATARIO")
    let locatario_nome = document.getElementById("locatario_nome")
    let nacionalidade_locatario = document.getElementById("nacionalidade_locatario")
    let status_locatario = document.getElementById("status_locatario")
    let profissão_locatario = document.getElementById("profissão_locatario")
    let cpf_locatario0 = document.getElementById("cpf_locatario0")
    let rg_locatario = document.getElementById("rg_locatario")
    let endereco_locatario = document.getElementById("endereco_locatario")

    let cpf_locador1 = document.getElementById("cpf_locatario1")

    // adicionando informações atraves do prompt

    locatario_nome.innerText = window.prompt("informe seu nome")
    nacionalidade_locatario.innerText = window.prompt("informe a nacionalidade")
    status_locatario.innerText =  window.prompt("status civil")
    profissão_locatario.innerText = window.prompt("informe sua profissão")

    cpf_locatario0.innerText = window.prompt("cpf: ")
    cpf_locatario1.innerText = cpf_locatario0.innerText

    rg_locatario.innerText = window.prompt("rg: ")

    endereco_locatario.innerText = window.prompt("endereço")

    let res = window.prompt("DESEJA PREENCHER AS INFORMAÇÕES DO RESTO DAS CLAUSULAS?, 1 - SIM   2 - NAO")

    if (res == 1){
        clausulas()
    }else{
        window.alert("OBRIGADO, AGUARDO MINHA COMISSÃO")
    }

}
function clausulas(){
    let imovel_situado = document.getElementById("imovel_situado")
    let prazo = document.getElementById("prazo")
    let prazo_inicio = document.getElementById("prazo_inicio")
    let prazo_fim = document.getElementById("prazo_fim")

    let valor_aluguel0 = document.getElementById("valor_aluguel0")
    let valor_aluguel1 = document.getElementById("valor_aluguel1")


    let dia_aluguel = document.getElementById("dia_aluguel")
    let dados_pagamento = document.getElementById("dados_pagamento")

    let inclusao = document.getElementById("inclusao")

    let aluguel_com_caucao = document.getElementById("aluguel_com_caucao")
    let valor_caucao = document.getElementById("valor_caucao")
    let valor_aluguel2 = document.getElementById("valor_aluguel2")
     let data = document.getElementById("data")
    
    //adicionando informações
    imovel_situado.innerText = window.prompt("Informe onde o imovel é situado")
    prazo.innerText = window.prompt ("informe a vigencia do prazo (geralmente 1 ano)")
    prazo_inicio.innerText = window.prompt("informe quando o prazo inicia")
    prazo_fim.innerText = window.prompt("informe quando o prazo termina")
    
    valor_aluguel0.innerText = window.prompt("informe o valor o aluguel")

    valor_aluguel1.innerText = valor_aluguel0.innerText
    valor_caucao.innerText = valor_aluguel1.innerText
    valor_aluguel2.innerText = valor_aluguel1.innerText

    dia_aluguel.innerText = window.prompt("informe o dia do aluguel")

    dados_pagamento.innerText = window.prompt("informe os dados relacionados ao pagamento")

    inclusao.innerText = window.prompt("informe oq esta incluso")

    aluguel_com_caucao.innerText = window.prompt("informe o valor do aluguel cm a caucao")

    data.innerText = window.prompt("informe a data de hj: ")
}
function casos(){

    let opções = window.prompt("Informe \n 1 - Locador 2 - locatario 3 - outras clausulas\n")
   if(opções == 1){
    locador()
   }else if(opções == 2){
    locatario()
   }else if (opções == 3){
    clausulas()
   }
   
   
}
function começo(){

}
function fim(){
   window.alert("obg")
}