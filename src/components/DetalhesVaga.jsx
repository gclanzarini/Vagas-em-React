import { Link } from "react-router";
import maleta from "../assets/maleta.png";
import relogio from "../assets/relogio.png";
import sifrao from "../assets/sifrao.png";
import aviao from "../assets/aviao.png";
import { useParams } from "react-router";
import vagalist from "../data/vagas";
import { useState } from "react";


function DetalhesVaga() {

    const [candidatado, setCandidatado] = useState(false);

    const { id } = useParams();
    const vaga = vagalist.find(item => item.id === Number(id));
    if (!vaga) {
    return <h1>Vaga não encontrada!</h1>;
}


    return(
        <div className="Detalhes_vaga">
            <div className="Detalhes_vaga_voltar">
                <Link to ={`/Home`}> Voltar para vagas </Link>
            </div>
            <div className="Detalhes_vaga_main">
                <div>
                    <h2>Detalhes da Vaga</h2>
                    <h2>{vaga.cargo}</h2>
                </div>
                <div>
                    <button
                        className="Detalhes_vaga_btn"
                        onClick={() => setCandidatado(!candidatado)}
                    >
                        {!candidatado && (
                            <img
                                src={aviao}
                                alt="Ícone de avião"
                                className="Detalhes_vagas_icones"
                            />
                        )}

                        {candidatado ? "Enviado" : "Candidatar-se"}
                    </button>
                </div>
            </div>
            <div className="Detalhes_vaga_informacoes">
                <div className="card__avatar">
                    <p>{vaga.empresa.charAt(0)}</p>
                </div>
                <h2>{vaga.empresa}</h2>
            </div>
            
            <div className="Detalhes_vaga_informacoes">
                <div className="Detalhes_vagas_icon">
                    <img src={maleta} alt="icone de maleta" className="Detalhes_vagas_icones"/>
                    <p>{vaga.area}</p>
                </div>
                <p>|</p>
                <div className="Detalhes_vagas_icon">
                    <img src={relogio} alt="icone de relogio" className="Detalhes_vagas_icones"/>
                    <p>{vaga.modelo}</p>
                </div>
                <p>|</p>
                <div className="Detalhes_vagas_icon">
                    <img src={sifrao} alt="icone de sifrao" className="Detalhes_vagas_icones"/>
                    <p>{vaga.salario}</p>
                </div>
            </div>
            <div className="Detalhes_vaga_sobre">
                <h2>
                    Sobre a vaga
                </h2>
                <p>
                    {vaga.sobre}
                </p>
            </div>
        </div>
    )
}

export default DetalhesVaga