import Image from "next/image";
import Link from "next/link";
export default function Menu(props) {

  return (<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div>
      <Link className="Menu ms-2 link" href="/">Menu</Link>

      <Link className="Cadastro ms-2 link" href="/Cadastro">Cadastro</Link>
    </div>
    <div  >
      <input className="me-4"
        placeholder="Pesquisar"
        onChange={props.pesquisar}
      />


      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
       
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>
    </div>
  </nav>)

}


