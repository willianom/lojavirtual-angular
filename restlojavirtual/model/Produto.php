<?php
  require_once "ConexaoMySQL.php";

  class Produto {

    private $id;
    private $nome;
    private $descricao;
    private $preco;
    private $imagem;

    function getId(){
      return $this->$id;
    }

    function getNome(){
      return $this->$nome;
    }

    function getDescricao(){
      return $this->$descricao;
    }

    function getPreco(){
      return $this->$preco;
    }

    function getImagem(){
      return $this->$imagem;
    }


    function setId(){
      $this->id = $id;
    }

    function setNome(){
      $this->nome = $nome;
    }

    function setDescricao(){
      $this->descricao = $descricao;
    }

    function setPreco(){
      $this->preco = $preco;
    }
    
    function setImagem(){
      $this->imagem = $imagem;
    }

    public function ListaProdutos(){
        $DB   = new ConexaoMySQL();
        $conn = $DB->getConexao();

        $sql   = "SELECT * FROM produto ORDER BY nome";

        $stmt  = $conn->query($sql);
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $users;
    }

    public function getProduto($idProduto){
        $DB   = new ConexaoMySQL();
        $conn = $DB->getConexao();

        $sql   = "SELECT *
                  FROM   produto
                  WHERE  id = '$idProduto'";

        $stmt  = $conn->query($sql);
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $users;
    }

    public function addProduto($nome, $descricao, $preco){
        $DB   = new ConexaoMySQL();
        $conn = $DB->getConexao();

        $sql   = "INSERT INTO produto(nome, descricao, preco)
                  VALUES (?,?,?)";

        $stmt = $conn->prepare($sql);
        $stmt->bindValue(1, $nome);
        $stmt->bindValue(2, $descricao);
        $stmt->bindValue(3, $preco);
        //$stmt->bindValue(4, $imagem);
        $stmt->execute();

        return $stmt->rowCount();
    }


    public function editProduto($nome, $descricao, $preco){
        $DB   = new ConexaoMySQL();
        $conn = $DB->getConexao();

        $sql   = "UPDATE produto SET nome = ? , descricao = ? , preco = ? 
                  WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bindValue(1, $nome);
        $stmt->bindValue(2, $descricao);
        $stmt->bindValue(3, $preco);
        //$stmt->bindValue(4, $imagem);
        $stmt->execute();

        return $stmt->rowCount();
    }

    public function deleteProduto($id){
        $DB   = new ConexaoMySQL();
        $conn = $DB->getConexao();
        
        $sql   = "DELETE FROM produto WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bindValue(1, $id);
        $stmt->execute();

        return $stmt->rowCount();
    }

  }
  ?>
