<?php
header('Content-Type: text/html; charset=utf-8');

class ConexaoMySQL {
    private $conexao;
    private $dsn = "mysql:host=localhost;dbname=lojavirtual_trs";
    private $username = "root";
    private $passwd = "";
    //private $passwd = "swteam@ic2016";

    function __construct() {
        $this->AbrirConexao();
    }

    public function AbrirConexao() {
        try {
            $this->conexao = new PDO($this->dsn.";charset=utf8", $this->username, $this->passwd);
        } catch (PDOException $ex) {
            echo "Nao foi possivel conectar com o banco de dados, ERRO: " . $ex->getMessage();
            exit();
        }
    }

    public function FecharConexao(){
        return $this->conexao = null;
    }

    function getConexao() {
        return $this->conexao;
    }

}

?>
