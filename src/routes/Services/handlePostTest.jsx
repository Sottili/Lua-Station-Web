// Importações do React
import React, { useState } from "react";

//Importações do Firebase
import { getAuth } from "firebase/auth";
import { ref, getDatabase, push, child, update } from "firebase/database";
import { firebaseConfig } from "../../Services/configFirebase";

// Component

const Home = () => {
  // Conexão do banco de dados
  const db = getDatabase(firebaseConfig);

  // Pegando o UID do Usuário
  const auth = getAuth();
  const userId = auth.currentUser.uid;

  // Setando os dados do Post
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");

  // Função para registrar o Post no Banco de Dados
  function handlePost() {
    const postData = {
      title: title,
      textBody: textBody,
    };

    // Gerando uma Key aleatória pro post
    const newPostKey = push(child(ref(db), "posts")).key;

    // Setando o post na pasta do usuario
    return update(ref(db, `/users/${userId}/my-posts/}` + newPostKey), {
      title: postData.title,
    });
  }

  return (
    <>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <textarea name="" onChange={(e) => setTextBody(e.target.value)} />
        </div>
        <button type="submit" onClick={handlePost} className="button">
          Cadastrar
        </button>
      </form>
    </>
  );
};

export default Home;
