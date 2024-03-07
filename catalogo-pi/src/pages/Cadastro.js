import CustomCheckBoxLabel from "@/componentes/CustomCheckboxLabel"
import CustomInputlabel from "@/componentes/CustomInputLabel"
import CustomTextAreaLabel from "@/componentes/CustomTextAreaLabel"
import Menu from "@/componentes/Menu"
import axios from "axios"
import { useState } from "react"



export default function cadastro() {

    function handleSalvar(e) {
        console.log(e.target)
        //console.log(e.target.id)

        if (e.target.type == "checkbox") {
            dadosProduto[e.target.id] = e.target.checked
        } else {
            dadosProduto[e.target.id] = e.target.value
        }
    }

    const [dadosProduto, setDadosProdutos] = useState({
        id: 0,
        nome: "",
        descricao: "",
        preco: 0,
        novidade: true,
        disponivel: true,
    })

    function handleSalvar() {
        //Enviaremos o post para a API
        axios.post("https://localhost:7282/api/Produto", dadosProduto)
            .then(res => console.log(res))
    }

    function handleChange(e) {
        //console.log(e.target.id, e.target.value)

        if (e.target.type == "checkbox")
            dadosProduto[e.target.id] = e.target.checked
        else dadosProduto[e.target.id] = e.target.value

        setDadosProdutos(dadosProduto)

        console.log(dadosProduto)
    }

    return (
        <>
            <Menu />
            <div className="container-fluid">
                <div className="row">

                    <CustomInputlabel id="nome" onChange={handleChange} texto="Nome" col="8" />
                    <CustomInputlabel id="preco" onChange={handleChange} texto="Preço" col="4" />
                    <CustomTextAreaLabel id="descricao" onChange={handleChange} text="Descrição" col="12" />
                    <CustomInputlabel id="image" onChange={handleChange} texto="URL da imagem" col="12" />
                    <CustomCheckBoxLabel id="disponivel" onChange={handleChange} texto="Disponível" col="6" />
                    <CustomCheckBoxLabel id="novidade" onChange={handleChange} texto="Novidade" col="6" />
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