import Menu from "@/componentes/Menu";
import Produto from "@/componentes/Produto";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [listaProduto, setListaProduto] = useState([])

  useEffect(() => {
    axios.get('https://localhost:7282/api/Produto/ListaAsync')
      .then(resp => {
        setListaProduto(resp.data)
        console.log(resp)
      })
    console.log(listaProduto)

  }, [])
  return (

    <div> <Menu/>
      <div className="container-fluid mt-2">
        <div className="row">
          {
            listaProduto.map((dado, index) =>
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
