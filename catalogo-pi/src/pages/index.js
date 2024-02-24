import Produto from "@/componentes/Produto";
import axios from "axios";
import { useState } from "react";

export default function Home() {

  const [listaProduto, setListaPRoduto] = useState([])

  axios.get('http://localhost:3000')
    .then(resp => setListaPRoduto(resp.data))

  return (

    <div className="contairner-fluid mt-2">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-ms-3 g-3">
        {
          listaProduto.map((dado, index) => <Produto
            key={index}
            nome={dado.nome} 
            descricao={dado.descricao}
            disponivel={dado.disponivel} 
            novidade={dado.novidade}
            preco={dado.preco} />)
        }

      </div>
    </div>

  );
}
