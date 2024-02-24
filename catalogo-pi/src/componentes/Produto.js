

export default function Produto() {
    return (
        <div className="coll-3">
            <div style={{ width: "100%", height: 200, backgroundColor: "gray" }}></div>
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