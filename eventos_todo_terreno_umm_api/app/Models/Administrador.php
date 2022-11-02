<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    use HasFactory;

    protected $table = "administrador";

    protected $fillable = [
        "nome_administrador",
        "email_administrador",
        "password_administrator",
    ];

    public function index(){
        /*$this->query('SELECT * FROM administrador');
        $rows = $this->resultSet();
        return $rows;*/
    }

    public function store(){
     /*   // Sanitize POST
        $post = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

        if($post['submit']){

            //Insert into MySQL
            $this->query('INSERT INTO administrador (title, body, link, user_id, contact) VALUES(:title, :body, :link, :user_id, :contact)');
            $this->bind(':title', $post['title']);
            $this->bind(':body', $post['body']);
            $this->bind(':link', $post['link']);
            $this->bind(':user_id', 1);
            $this->bind(':contact', $post['contact']);
            $this->execute();
            //Verify
            if($this->lastInsertId()){
                //Redirect
                //header('Location:'.ROOT_URL.'shares');
            }
        }
        return;*/
    }
}
