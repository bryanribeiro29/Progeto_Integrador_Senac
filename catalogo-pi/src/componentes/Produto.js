

export default function Produto(props) {
    return (
        <div className="coll-3">
            <div style={"/assets/Bmw m3.png"}{{ width: "100%", height: 200, backgroundColor: "gray" }}></div>
            <div className="card-body">
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
                    <h3 className="text-body-secundary">{props.Preco}</h3>
                </div>
            </div>
        </div>
    )
}


<div className="col-3">
            <div className="card shadow-sm p-4">
                <div className="text-center ">
                <Image src={"/assets/Air-Jordan-4.png"} width={250} height={150} />.




                Apagar isso aqui em cima após alterar o que for feito.