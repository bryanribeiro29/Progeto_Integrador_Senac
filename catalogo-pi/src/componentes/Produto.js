import Image from "next/image";


export default function Produto(props) {
    return (
        <div className="col-sm-6 col-md-4 col-xl-4 mt-2">
            <div className="">
                <div className="card shadow-sm p-4 h-100">
                    <div className="text-center ">
                        <img src={props.imagem} width="auto" height={200} />
                        <h2>{props.nome}</h2>
                        <p>{props.descricao}</p>
                        <div className="d-flex justify-content-between aling-items-center">
                            {
                                props.disponivel === false
                                    ? <span className="badge text-bg-secondary">Indisponivel</span>
                                    : null
                            }
                            {
                                props.novidade == true
                                    ? <span className="badge text-bg-success">Novidade</span>
                                    : null
                            }
                        </div>
                        <div className="text-end mt-3">
                            <h3 className="text-body-secundary">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.preco)}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
