<?php
header('Content-Type: text/html; charset=utf-8');

require_once("SimpleRest.php");
require_once("model/Produto.php");

class LojaRestHandler extends SimpleRest {

	function getAllProduct(){

		$produto = new Produto();

		$rawProduct = $produto->ListaProdutos();

		$arrayProduto = array('item' => $rawProduct);
		$response = $this->encodeJson($arrayProduto);

		echo $response;
	}

	function addProduct($nome, $descricao, $preco){

		$produto = new Produto();
		$rawProduct = $produto->addProduto($nome, $descricao, $preco);

		if($rawProduct == 0) {
			$statusCode = 404;
			$response = "Insertion problem!";
		} else {
			$statusCode = 200;
			$response = "Saved successfully!";
		}

		echo $response;
	}

	function editProduct($id, $nome, $descricao, $preco){

		$produto = new Produto();
		$rawProduct = $produto->editProduto($id, $nome, $descricao, $preco);

		if($rawProduct == 0) {
			$statusCode = 404;
			$response = "Edition problem!";
		} else {
			$statusCode = 200;
			$response = "Edited successfully!";
		}

		echo $response;
	}

	function deleteProduct($id){

 	 $produto = new Produto();
 	 $rawProduct = $produto->editProduto($id);

 	 if($rawProduct == 0) {
 		 $statusCode = 404;
 		 $response = "Delete problem!";
 	 } else {
 		 $statusCode = 200;
 		 $response = "Delete successfully!";
 	 }

 	 echo $response;
  }

	public function encodeHtml($responseData) {

		$htmlResponse = "<table border='1'>";
		foreach($responseData as $key=>$value) {
    			$htmlResponse .= "<tr><td>". $key. "</td>
					                      <td>". $value['nome']. "</td>	</tr>";
		}
		$htmlResponse .= "</table>";
		return $htmlResponse;
	}

	public function encodeJson($responseData) {
		$jsonResponse = json_encode($responseData);
		return $jsonResponse;
	}

	public function encodeXml($responseData) {
			// creating object of SimpleXMLElement
			$xml = new SimpleXMLElement('<?xml version="1.0"?><mobile></mobile>');
			foreach($responseData as $key=>$value) {
				$xml->addChild($key, $value);
			}
			return $xml->asXML();
		}
}
?>
