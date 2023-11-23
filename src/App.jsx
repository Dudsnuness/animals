import { useState } from "react";
import "./App.css";
import Cadastrar from "./components/Cadastro";
import Tarefa from "./components/Tarefa";
import Filtrar from "./components/filtrar";
 
function App() {
 
  const [listaTarefas, setListaTarefas] = useState([
    { id: 1, descricao: "Espécie: Cachorro \n Raça: Vira-Lata \n Última vez visto: Mercado \n Animal Perdido ou Procura-se: Procura-se", imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petlove.com.br%2Fdicas%2Fvira-latas-saiba-como-os-srds-sao-chamados-em-diferentes-regioes&psig=AOvVaw3qN6MD5cEifDv7ObU8_zvP&ust=1700828031129000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIin0qaM2oIDFQAAAAAdAAAAABAE" },
    { id: 2, descricao: "Espécie: Gato \n Raça:  \n Última vez visto: Posto de Saúde \n Animal Perdido ou Procura-se: Perdido", imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.cobasi.com.br%2Fgato-siames-delicado-e-carinhoso%2F&psig=AOvVaw3zR_IUjrZTlkSOzbUIb1i1&ust=1700828089363000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD_-MGM2oIDFQAAAAAdAAAAABAE" },
    { id: 3, descricao: "Espécie: Pássaro \n Raça: Arara \n Última vez visto: Zoológico \n Animal Perdido ou Procura-se: Perdido", imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.voolivia.com.br%2Fdecoracao%2Farara-de-galho-em-madeira-azul-e-amarela&psig=AOvVaw1Q3qGbXe8erGmCri-GTFEY&ust=1700828119651000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi3vNCM2oIDFQAAAAAdAAAAABAE" },
  ]);
 
 
  const addAnimal = (txtDescricao, txtImagem) => {
    const newTarefas = [...listaTarefas, {
      id: Math.floor(Math.random() * 1000000),
      descricao: txtDescricao,
      imagem: txtImagem,
      isFinalizado: false,
    }];
 
    setListaTarefas(newTarefas);
  };
 
  const concluirTarefa = (id) => {
    const newTarefas = listaTarefas.map((item) => {
      if (item.id === id) {
        item.isFinalizado = !item.isFinalizado;
      }
      return item;
    });
 
    setListaTarefas(newTarefas);
  };
 
  const removerTarefa = (id) => {
    const newTarefas = listaTarefas.filter((item) => item.id !== id);
 
    setListaTarefas(newTarefas);
  };
 
  const [filtrar, setFiltrar] = useState("Todos");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
 
  return (
    <>
      <div className="app">
        <h1 className='titulo_cadastrar'>ENCONTRE SEU PET</h1>
        <br></br>
 
        <Cadastrar addAnimal={addAnimal} />
 
        <Filtrar filtrar={filtrar} setFiltrar={setFiltrar} search={search} setSearch={setSearch} setSort={setSort} />
 
        <div className='listaTarefas'>
          {
            listaTarefas
              .filter((item) => {
                if (item.descricao.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              })
              .filter((item) => {
                return filtrar === "Todos" ? true :
                  filtrar === "Concluidas" ? item.isFinalizado === true :
                    item.isFinalizado === false;
              })
              .sort((a, b) => {
                return sort === "Crescente" ? a.descricao.localeCompare(b.descricao) :
                  sort === "Decrescente" ? b.descricao.localeCompare(a.descricao) : false;
              })
              .map((item) => (
                <Tarefa key={item.id} item={item} concluirTarefa={concluirTarefa} removerTarefa={removerTarefa} />
                ))
              }
            </div>
           </div>
          </>
       )
      }
     
      export default App