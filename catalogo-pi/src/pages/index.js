import Menu from "@/componentes/Menu";
import Produto from "@/componentes/Produto";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [listaProduto, setListaProduto] = useState([])
  const [listaProdutoFiltrado, setListaProdutoFiltrado] = useState([])

  useEffect(() => {
    axios.get('https://localhost:7282/api/Produto/ListaAsync').then(resp => {
        setListaProduto(resp.data);
        setListaProdutoFiltrado(resp.data);
        console.log(resp);
      })
    console.log(listaProduto)

  }, [])

  function handlePesquisar(filtro){
    const valorFiltro = filtro.target.value

    const filtrado = listaProduto.filter((dado) => dado.nome.toLowerCase().includes(valorFiltro.toLowerCase()))

    setListaProdutoFiltrado(filtrado)
    console.log(filtro)
  }

  return (
    
    <div> <Menu pesquisar={handlePesquisar}/>
      <div className="container-fluid mt-2">
        <div className="row mt-2">
          {
            listaProdutoFiltrado.map((dado, index) =>
              <Produto
                key={index}
                nome={dado.nome}
                descricao={dado.descricao}
                disponivel={dado.disponivel}
                novidade={dado.novidade}
                preco={dado.preco}
                imagem={dado.image} />)
          }

        </div>
      </div>
    </div>
  );
}
