var btCadastrado = document.querySelector('#btCadastrado');
btCadastrado.addEventListener('click', function cadastrarEmpresa() {
    var outCadastrado = document.querySelector('#outCadastrado');
    var inEmpresa = document.querySelector('#inEmpresa');
    var inCnpj = document.querySelector('#inCnpj');
    var inFuncionario = document.querySelector('#inFuncionario');
    var inFuncao = document.querySelector('#inFuncao');
    var inTelefone = document.querySelector('#inTelefone');  
    var inEmail = document.querySelector('#inEmail'); 
    var inGerente = document.querySelector('#inGerente');

    var empresa = inEmpresa.value;
    var cnpj = Number(inCnpj.value);
    var funcionario = inFuncionario.value; 
    var funcao = inFuncao.value; 
    var telefone = Number(inTelefone.value);   
    var email = inEmail.value;  
    var gerente = inGerente.value; 


    dadosEmpresa = [empresa, cnpj, funcionario, funcao, telefone, email, gerente];

    dadosEmpresa.forEach(function (item, indice, array) {
        console.log(item, indice);

        return dadosEmpresa;
    });

    outCadastrado.textContent = "Prestador de Serviços " + funcionario + " Cadastrado";
    alert('Prestador cadastrado com sucesso')
});

var btConsulta = document.querySelector('#btConsulta');
btConsulta.addEventListener('click', function consultarEmpresa(dadosEmpresa) {

    var inConsultaFuncionario = document.querySelector('#inConsultaFuncionario');
    var inConsultaEmpresa = document.querySelector('#inConsultaEmpresa');
    var inConsultaCnpj = document.querySelector('#inConsultaCnpj'); 
    var outConsultarEmpresa = document.querySelector('#outConsultarEmpresa');
    var outConsultarFuncionario = document.querySelector('#outConsultarFuncionario');
    var outDadosDaEmpresa = document.querySelector('#outDadosDaEmpresa');

    var empresa = inEmpresa.value;
    var cnpj = Number(inCnpj.value);
    var funcionario = inFuncionario.value; 
    var funcao = inFuncao.value; 
    var telefone = Number(inTelefone.value);   
    var email = inEmail.value;  
    var gerente = inGerente.value; 

    var consultaFuncionario = inConsultaFuncionario.value; 
    var consultaEmpresa = inConsultaEmpresa.value;
    var consultaCnpj = Number(inConsultaCnpj.value)


    if(consultaFuncionario == funcionario || consultaEmpresa == empresa || consultaCnpj == cnpj) {
    dadosEmpresa = [empresa, cnpj, funcionario, funcao, telefone, email, gerente];

    dadosEmpresa.forEach(function (item, indice, array) {
        console.log(item, indice);

        outDadosDaEmpresa.textContent = "Dados Da Empresa: ";
        outConsultarEmpresa.textContent = " Nome da Empresa: " + empresa;
        outConsultarFuncionario.textContent = " Nome do Funcionário: " + funcionario;

    });
    } else {
        outDadosDaEmpresa.textContent = "";
        outConsultarEmpresa.textContent = " Prestador Não Encontrado";
        outConsultarFuncionario.textContent = "";
    }

});

