  import { Link } from "react-router";
  function VagaCard(
   { 
    id,
    empresa,
    cargo,
    salario,
    modelo,
    tempo,}
   ) {
        return (
   
   <div className="card">
                    <div className="card__avatar">
                        <p>{empresa.charAt(0)}</p>
                    </div>
                    <div className="card__text">
                        <p>{empresa}</p>
                        <h3>{cargo}</h3>

                    <div className="card__informacoes">
                        <span className="salaro">{salario}</span>
                        <span>{modelo} · {tempo}</span>
                        </div>
                    </div>
                    <div className="card__actions">


                        <span>2h</span>
                        <Link to ={`/vaga/${id}`}> candidatar-se </Link>
                    </div>
                </div>

        )
    }       

    export default VagaCard;