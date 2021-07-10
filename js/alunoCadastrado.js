var btCadastrarAluno = document.querySelector('#btCadastrarAluno');
btCadastrarAluno.addEventListener('click', function cadastrarAluno() {

    var inAluno = document.querySelector('#inAluno');
    var inCpf = document.querySelector('#inCpf');
    var inResponsavel = document.querySelector('#inResponsavel');
    var inPessoaAutorizada = document.querySelector('#inPessoaAutorizada');
    var inCertidao = document.querySelector('#inCertidao');
    var inAtestado = document.querySelector('#inAtestado');  
    var outAlunoCadastrado = document.querySelector('#outAlunoCadastrado')

    var aluno = inAluno.value;
    var cpf = Number(inCpf.value);
    var responsavel = inResponsavel.value; 
    var pessoaAutorizada = inPessoaAutorizada.value; 
    var certidao = inCertidao.value; 
    var atestado = inAtestado.value;  


    dadosAluno = [aluno, cpf, responsavel, pessoaAutorizada, certidao, atestado];

    dadosAluno.forEach(function (item, indice, array) {
        console.log(item, indice);

        return dadosAluno;
    });

    outAlunoCadastrado.textContent = "Aluno(a) " + aluno + " Cadastrado";
    alert('Aluno cadastrado com sucesso')
});

var btConsultaAluno = document.querySelector('#btConsultaAluno');
btConsultaAluno.addEventListener('click', function consultarAluno(dadosAluno) {

    var inAluno = document.querySelector('#inAluno');
    var inCpf = document.querySelector('#inCpf');
    var inResponsavel = document.querySelector('#inResponsavel');
    var inPessoaAutorizada = document.querySelector('#inPessoaAutorizada');
    var inCertidao = document.querySelector('#inCertidao');
    var inAtestado = document.querySelector('#inAtestado');  

    var outDadosDaAluno = document.querySelector('#outDadosDaAluno')
    var outConsultarAluno = document.querySelector('#outConsultarAluno');
    var outConsultarResponsavel = document.querySelector('#outConsultarResponsavel');
    var outConsultarCpf = document.querySelector('#outConsultarCpf');

    var inConsultarAluno = document.querySelector('#inConsultarAluno');
    var inConsultarResponsabel = document.querySelector('#inConsultarResponsabel');
    var inConsultarCpf = document.querySelector('#inConsultarCpf');

    var aluno = inAluno.value;
    var cpf = Number(inCpf.value);
    var responsavel = inResponsavel.value; 
    var pessoaAutorizada = inPessoaAutorizada.value; 
    var certidao = inCertidao.value; 
    var atestado = inAtestado.value;  

    var consultaAluno = inConsultarAluno.value; 
    var consultaResponsavel = inConsultarResponsabel.value;
    var consultaCpf = Number(inConsultarCpf.value);


    if(consultaAluno == aluno || consultaResponsavel == responsavel || consultaCpf == cpf) {
        dadosAluno = [aluno, cpf, responsavel, pessoaAutorizada, certidao, atestado];

        dadosAluno.forEach(function (item, indice, array) {
            console.log(item, indice);

            outDadosDaAluno.textContent = "Dados do Aluno: ", "\n";
            outConsultarAluno.textContent = " Nome do Aluno: " + aluno, "\n";
            outConsultarResponsavel.textContent = "Nome do Responsável: " + responsavel;
            outConsultarCpf.textContent = "CPF do Aluno: " + cpf;

        });
    } else {
        outDadosDaAluno.textContent = "";
        outConsultarAluno.textContent = "Aluno(a) Não Encontrado";
        outConsultarResponsavel.textContent = "";
        outConsultarCpf.textContent = "";
    }
});

var btAlterarAluno = document.querySelector('#btAlterarAluno');
btAlterarAluno.addEventListener('click', function AlterarAluno(dadosAluno) {

    var inAluno = document.querySelector('#inAluno');
    var inCpf = document.querySelector('#inCpf');
    var inResponsavel = document.querySelector('#inResponsavel');
    var inPessoaAutorizada = document.querySelector('#inPessoaAutorizada');
    var inCertidao = document.querySelector('#inCertidao');
    var inAtestado = document.querySelector('#inAtestado');  

    var outDadosDaAluno = document.querySelector('#outDadosDaAluno')
    var outAlterarAluno = document.querySelector('#outAlterarAluno');
    var outAlterarResponsavel = document.querySelector('#outAlterarResponsavel');
    var outAlterarCpf = document.querySelector('#outAlterarCpf');

    var inAlterarAluno = document.querySelector('#inAlterarAluno');
    var inAlterarResponsabel = document.querySelector('#inAlterarResponsabel');
    var inAlterarCpf = document.querySelector('#inAlterarCpf');

    var aluno = inAluno.value;
    var cpf = Number(inCpf.value);
    var responsavel = inResponsavel.value; 
    var pessoaAutorizada = inPessoaAutorizada.value; 
    var certidao = inCertidao.value; 
    var atestado = inAtestado.value;  

    var alterarAluno = inAlterarAluno.value; 
    var alterarResponsavel = inAlterarResponsabel.value;
    var alterarCpf = Number(inAlterarCpf.value);


    if(alterarAluno != aluno) {
        dadosAluno = [aluno, cpf, responsavel, pessoaAutorizada, certidao, atestado];

        dadosAluno.forEach(function (item, indice, aray) {
            console.log(item, indice);

            aluno = alterarAluno;
 
            outDadosDaAluno.textContent = "Dados do Aluno: ", "\n";
            outAlterarAluno.textContent = " Nome do Aluno: " + aluno, "\n";
            outAlterarResponsavel.textContent = "Nome do Responsável: " + responsavel;
            outAlterarCpf.textContent = "CPF do Aluno: " + cpf;
            
            return aluno;

        });
    } 
    
    if(alterarResponsavel != responsavel){
        dadosAluno = [aluno, cpf, responsavel, pessoaAutorizada, certidao, atestado];

        dadosAluno.forEach(function (item, indice, aray) {
            console.log(item, indice);

            responsavel = alterarResponsavel;

            outDadosDaAluno.textContent = "Dados do Aluno: ", "\n";
            outAlterarAluno.textContent = " Nome do Aluno: " + aluno, "\n";
            outAlterarResponsavel.textContent = "Nome do Responsável: " + responsavel;
            outAlterarCpf.textContent = "CPF do Aluno: " + cpf;
            
            return responsavel;
        });    
    }
    if(cpf != alterarCpf){
        dadosAluno = [aluno, cpf, responsavel, pessoaAutorizada, certidao, atestado];

        dadosAluno.forEach(function (item, indice, aray) {
            console.log(item, indice);

            cpf = Number(alterarCpf);

            outDadosDaAluno.textContent = "Dados do Aluno: ", "\n";
            outAlterarAluno.textContent = " Nome do Aluno: " + aluno, "\n";
            outAlterarResponsavel.textContent = "Nome do Responsável: " + responsavel;
            outAlterarCpf.textContent = "CPF do Aluno: " + cpf;

            return cpf;
        });  
    }
});

