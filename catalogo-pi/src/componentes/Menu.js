import Image from "next/image";
import Link from "next/link";
export default function Menu(props) {

  return (<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div>
      <Link className="Menu ms-2 link" href="/">Menu</Link>
      <Link className="Cadastro ms-2 link" href="/Cadastro">Cadastro</Link>
    </div>
    <div>
      <input
        placeholder="Pesquisar"
        onChange={props.pesquisar}
      />


      <button className="carrinho " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <Image src={"/assets/car.png"} alt="..." width={35} height={35} />
      </button>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Carrinho</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>
    </div>
  </nav>)

}


