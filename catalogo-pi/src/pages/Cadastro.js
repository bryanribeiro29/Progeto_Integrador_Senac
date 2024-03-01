import CustomCheckBoxLabel from "@/componentes/CustomCheckboxLabel"
import CustomInputlabel from "@/componentes/CustomInputLabel"
import CustomTextAreaLabel from "@/componentes/CustomTextAreaLabel"
import Menu from "@/componentes/Menu"
import axios from "axios"
import { useState } from "react"



export default function cadastro() {

    const [dadosPRoduto, setDadosProdutos] = useState({})

    function handleSalvar()
    {
        //Enviaremos o post para a API
        axios.post("https://localhost:7282/api/Produto")
            .then(res => console.log(res))
    }

    return (
        <>
            <Menu />
            <div className="container-fluid">
                <div className="row">

                    <CustomInputlabel id="nome" text="Nome" col="8" />
                    <CustomInputlabel id="preco" text="Preço" col="4" />
                    <CustomTextAreaLabel id="descricao" text="Descrição" col="12" />
                    <CustomInputlabel id="imagem" texto="URL da imagem" col="12" />
                    <CustomCheckBoxLabel id="disponivel" texto="Disponível" col="6" />
                    <CustomCheckBoxLabel id="novidade" texto="Novidade" col="6" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-primary" onClick={handleSalvar}>Salvar</button>
                </div>
            </div>

        </>
    )
}