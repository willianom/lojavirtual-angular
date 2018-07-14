<?php
require_once("LojaRestHandler.php");

$view = "";
if(isset($_GET["view"]))
	$view = $_GET["view"];
/*
controls the RESTful services
URL mapping
*/
switch($view){

	case "lista_produtos":
		$lojaRestHandler = new LojaRestHandler();
		$lojaRestHandler->getAllProduct();
	break;

	case "add_produtos":
		$lojaRestHandler = new LojaRestHandler();
		$lojaRestHandler->addProduct($_GET["nome"], $_GET["descricao"], $_GET["preco"]);
	break;

	case "edit_produtos":
		$lojaRestHandler = new LojaRestHandler();
		$lojaRestHandler->editProduct($_GET["id"], $_GET["nome"], $_GET["descricao"], $_GET["preco"]);
	break;

	case "delete_produtos" :
		$lojaRestHandler = new LojaRestHandler();
		$lojaRestHandler->deleteProduct($_GET["id"]);
	break;
}
?>
