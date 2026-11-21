import { Link } from "react-router";

function Header() {
    return(
        <header>
        <h1>OpenBoard</h1>
        <div className="header_actions">
            <Link to ={`/`}>Entrar</Link>
            <button className="btn btn--full">Publicar Vaga - $299</button>
        </div>
    </header>
    )
}
export default Header