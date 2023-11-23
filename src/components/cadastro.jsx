import React, { useState } from "react";
 
const Cadastro = ({ addAnimal }) => {
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
 
  const handleAddAnimal = () => {
    if (descricao.trim() !== '' && imagem.trim() !== '') {
      addAnimal(descricao, imagem);
      setDescricao('');
      setImagem('');
    }
  }
 
  return (
<>
<h2>Cadastre o animal perdido que você encontrou:</h2>
<div className="cadastrar">
<input
          type="text"
          value={descricao}
          id="descricao"
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Informe a espécie animal / Informe a raça do animal / Ultima vez visto / Perdido ou Encontrado"
        />
 
        <input
          type="text"
          value={imagem}
          id="imagem"
          onChange={(e) => setImagem(e.target.value)}
          placeholder="URL da imagem"
        />
<button className="botaoCadastro" type="button" onClick={handleAddAnimal}>
          Cadastrar
</button>
</div>
</>
  );
};
 
export default Cadastro;