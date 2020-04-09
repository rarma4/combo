<?php
// Check for empty fields
if(empty($_POST['inputName']) || empty($_POST['inputEmpresa'])  || empty($_POST['inputCargo']) || empty($_POST['inputEmail']) || empty($_POST['inputConfEmail']) || empty($_POST['inputTel']) || empty($_POST['inputMsg']))
{
	//echo "No arguments Provided!";
	echo "<script>alert('Por favor preencher todos os campos'); window.open('$url', '_blank'); window.history.back(-1);</script>";
	return false;
}
	
$name = strip_tags(htmlspecialchars($_POST['inputName']));
$empresa = strip_tags(htmlspecialchars($_POST['inputEmpresa']));
$cargo = strip_tags(htmlspecialchars($_POST['inputCargo']));
$email = strip_tags(htmlspecialchars($_POST['inputEmail']));
$emailConf = strip_tags(htmlspecialchars($_POST['inputConfEmail']));
$tel = strip_tags(htmlspecialchars($_POST['inputTel']));
$assunto = ("contato pelo site combo");
$message = strip_tags(htmlspecialchars($_POST['inputMsg']));

$to = 'comercial@grupocaa.com.br, marketing@grupocaa.com.br'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "$assunto";
$email_body = "Você recebeu uma nova mensagem.\n\n"."\n\nNome: $name\n\nEmpresa: $empresa\n\nCargo: $cargo\n\nTelefone: $tel\n\nEmail: $email\n\nMensagem:\n$message";	
mail($to,$email_subject,$email_body,'From: comercial@grupocaa.com.br');
echo "<script>alert('Obrigado pelo seu contato!'); window.open('$url', '_blank'); window.location.href = './index.html';</script>";
//echo "<script>alert('Enviado com Sucesso!'); window.open('$url', '_blank'); window.history.back(-1);</script>";
//echo "mensagem enviada";
//header('Location: index.html');
//Swal.fire('Obrigdo','Seu e-mail foi enviado com sucesso','sucess')
return true;			
?>
