function Tarefa({ item, concluirTarefa, removerTarefa }) {
    return (
      <div className="tarefa">
        <span
          style={{ textDecoration: item.isFinalizado ? "line-through" : "" }}
        >
          {item.descricao}
        </span>
        <img
          src={item.imagem}
          alt={item.descricao}
          style={{ width: "150px", height: "150px", borderRadius: "10px" }}
        />
        <div className="acoes">
          <button
            className="botaoProcura"
            onClick={() => concluirTarefa(item.id)}
          >
            Em procura
          </button>
          <button
            className="botaoEncontrado"
            onClick={() => removerTarefa(item.id)}
          >
            Encontrado
          </button>
        </div>
      </div>
    );
  }
 
  export default Tarefa;