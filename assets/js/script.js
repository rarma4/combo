function openclose() {
  var link = document.getElementById("linkmobile");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
}
/*
function send_mail(){
    Email.send({
        SecureToken : "142eae68-e7ef-406f-9c95-6b353c5d85a0",
        To : "dephkwon@gmail.com",
        From : "dephkwon@gmail.com",
        Subject : "teste",
        Body : '<h1>recebimento de mail</h1> </br> <h3>ok </h3>'
    }).then(
      //message => alert(message)
    );
  }
*/function valida_campus(){
    let nome = document.getElementById("inputName").value;
    var empresa = document.getElementById("inputEmpresa").value;
    var cargo = document.getElementById("inputCargo").value;
    var email = document.getElementById("inputEmail").value;
    var emailconfirm = document.getElementById("inputConfEmail").value;
    var tel = document.getElementById("inputTel").value;
    var msg = document.getElementById("inputMsg").value;

    if(nome == ""){
    Swal.fire(
      'Atenção',
      'O campo "nome" não pode estar vazio...',
      'error'
    )
    meu_form.nome.focus();
    return false;
    }else{
      
    }
    if(empresa==""){
      Swal.fire(
        'Atenção',
        'O campo "Empresa" não pode estar vazio...',
        'error'
      )
      meu_form.empresa.focus();
      return false;
    }
    if(cargo==""){
      Swal.fire(
        'Atenção',
        'O campo "Cargo" não pode estar vazio...',
        'error'
      )
      meu_form.cargo.focus();
      return false;
    }
    if(email == "" || emailconfirm == ""){
      Swal.fire(
        'Atenção',
        'O campo e-mail e confirmação não pode estar vazio...',
        'error'
      )
      meu_form.email.focus();
      return false;
    }
    if(email != emailconfirm){
      Swal.fire(
        'Atenção',
        'O campo e-mail e confirmação não são iguais',
        'error'
      )
      meu_form.email.focus();
      return false;
    }
    if(tel==""){
      Swal.fire(
        'Atenção',
        'O campo "Telefone" não pode estar vazio...',
        'error'
      )
      meu_form.tel.focus();
      return false;
    }
    if(msg==""){
      Swal.fire(
        'Atenção',
        'Digite sua mensagem...',
        'error'
      )
      meu_form.msg.focus();
      return false;
    }
}

function send_mail(){

    
/*
    alert('Nome: '+nome+'\nEmpresa: '+empresa+'\ncargo: '+cargo+'\nemail: '+email+'\nTelefone: '+tel+'\nMensagem: '+msg);
    
    let cpf = sessionStorage.getItem('CPF')
    var data = (new Date()).toISOString().match(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}/)[0].split('-').reverse().join('/');

    
    var strUser = e.options[e.selectedIndex].value;

    if(strUser === "Outros"){
        let outros = document.getElementsByClassName("m_cancelar")[0].value
        strUser = outros
    }*/
    Email.send({
      SecureToken : "142eae68-e7ef-406f-9c95-6b353c5d85a0",
      To : "dephkwon@gmail.com",
      From : "dephkwon@gmail.com",
        Subject : "Contato pelo site COMBO: ",
        Body : '<h1>Nome:'+nome+'</h1> </br> <h2>Empresa:'+empresa+'</h2></br><h3>cargo: '+cargo+'</h3></br><h3>email: '+email+'</h3></br><h3>Telefone: '+tel+'</h3></br><h4>Mensagem:</h4></br><p>'+msg+'</p></br>'
    }).then(
      //message => alert(message)
    );
}