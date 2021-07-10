var btCadastrarProfessor = document.querySelector('#btCadastrarProfessor');
btCadastrarProfessor.addEventListener('click', function cadastrarProfessor() {

    var inProfessor = document.querySelector('#inProfessor');
    var inMatricula = document.querySelector('#inMatricula');
    var inDiploma = document.querySelector('#inDiploma');
    var inPis = document.querySelector('#inPis');
    var inTitulo = document.querySelector('#inTitulo');
    var inZona = document.querySelector('#inZona');  
    var inSessao = document.querySelector('#inSessao');  
    var inCertidaoProfessor = document.querySelector('#inCertidaoProfessor');  
    var inEmailProfessor = document.querySelector('#inEmailProfessor');  
    var inTelefoneProfessor = document.querySelector('#inTelefoneProfessor');  
    var inBanco = document.querySelector('#inBanco');  
    var inAgencia = document.querySelector('#inAgencia');  
    var inConta = document.querySelector('#inConta');  
    var outProfessorCadastrado = document.querySelector('#outProfessorCadastrado')

    var professor = inProfessor.value;
    var matricula = Number(inMatricula.value);
    var diploma = inDiploma.value; 
    var pis = inPis.value; 
    var titulo = inTitulo.value; 
    var zona = inZona.value; 
    var sessao = inSessao.value;  
    var certidao = inCertidaoProfessor.value;  
    var email = inEmailProfessor.value;  
    var telefone = inTelefoneProfessor.value;  
    var banco = inBanco.value;  
    var agencia = inAgencia.value;  
    var conta = inConta.value;  

    dadosProfessor = [professor, matricula, diploma, pis, titulo, zona, sessao, certidao, email, telefone, banco, agencia, conta];

    dadosProfessor.forEach(function (item, indice, array) {
        console.log(item, indice);

        return dadosProfessor;
    });

    outProfessorCadastrado.textContent = "Professor(a) " + professor + " Cadastrado(a)";
    alert('Professor cadastrado com sucesso')
});

var btConsultaProfessor = document.querySelector('#btConsultaProfessor');
btConsultaProfessor.addEventListener('click', function consultarProfessor(dadosProfessor) {

    var inProfessor = document.querySelector('#inProfessor');
    var inMatricula = document.querySelector('#inMatricula');
    var inDiploma = document.querySelector('#inDiploma');
    var inPis = document.querySelector('#inPis');
    var inTitulo = document.querySelector('#inTitulo');
    var inZona = document.querySelector('#inZona');  
    var inSessao = document.querySelector('#inSessao');  
    var inCertidaoProfessor = document.querySelector('#inCertidaoProfessor');  
    var inEmailProfessor = document.querySelector('#inEmailProfessor');  
    var inTelefoneProfessor = document.querySelector('#inTelefoneProfessor');  
    var inBanco = document.querySelector('#inBanco');  
    var inAgencia = document.querySelector('#inAgencia');  
    var inConta = document.querySelector('#inConta');  
    var inConsultaProfessor = document.querySelector('#inConsultaProfessor');  
    var inConsultaMatricula = document.querySelector('#inConsultaMatricula');  
    var inConsultaPis = document.querySelector('#inConsultaPis');  
    var outDadosDoProfessor = document.querySelector('#outDadosDoProfessor')
    var outConsultarProfessor = document.querySelector('#outConsultarProfessor')
    var outConsultarMatricula = document.querySelector('#outConsultarMatricula')

    var professor = inProfessor.value;
    var matricula = Number(inMatricula.value);
    var diploma = inDiploma.value; 
    var pis = inPis.value; 
    var titulo = inTitulo.value; 
    var zona = inZona.value; 
    var sessao = inSessao.value;  
    var certidao = inCertidaoProfessor.value;  
    var email = inEmailProfessor.value;  
    var telefone = inTelefoneProfessor.value;  
    var banco = inBanco.value;  
    var agencia = inAgencia.value;  
    var conta = inConta.value;  

    var consultaProfessor = inConsultaProfessor.value; 
    var consultaMatricula = Number(inConsultaMatricula.value);
    var consultaPis = Number(inConsultaPis.value)


    if(consultaProfessor == professor || consultaMatricula == matricula || consultaPis == pis) {
        dadosProfessor = [professor, matricula, diploma, pis, titulo, zona, sessao, certidao, email, telefone, banco, agencia, conta];


        dadosProfessor.forEach(function (item, indice, array) {
            console.log(item, indice);

        outDadosDoProfessor.textContent = "Dados do Professor: ", "\n";
        outConsultarProfessor.textContent = "Nome do Professor(a): " + professor, "\n";
        outConsultarMatricula.textContent = "Numero de Matricula: " + matricula;

    });
    } else {
        outDadosDoProfessor.textContent = "";
        outConsultarProfessor.textContent = "Professor Não Encontrado";
        outConsultarMatricula.textContent = "";
    }

});

