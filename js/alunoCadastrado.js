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

    outAlunoCadastrado.textContent = "Aluno " + aluno + " Cadastrado";
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
    var outConsultarAluno = document.querySelector('#outConsultarAluno')
    var outConsultarResponsavel = document.querySelector('#outConsultarResponsavel')

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
    var consultaCpf = Number(inConsultarCpf.value)


    if(consultaAluno == aluno || consultaResponsavel == responsavel || consultaCpf == cpf) {
    dadosAluno = [aluno, cpf, responsavel, pessoaAutorizada, certidao, atestado];

    dadosAluno.forEach(function (item, indice, array) {
        console.log(item, indice);

        outDadosDaAluno.textContent = "Dados do Aluno: ", "\n";
        outConsultarAluno.textContent = " Nome do Aluno: " + aluno, "\n";
        outConsultarResponsavel.textContent = "Nome do Responsável: " + responsavel;

    });
    } else {
        outDadosDaAluno.textContent = "";
        outConsultarAluno.textContent = "Aluno Não Encontrado";
        outConsultarResponsavel.textContent = "";
    }

});

