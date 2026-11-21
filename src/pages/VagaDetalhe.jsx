import { useParams } from "react-router";
import vagalist from "../data/vagas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DetalhesVaga from "../components/DetalhesVaga";

function VagaDetalhe(){
    const {id} = useParams();
    const vagaLoop = vagalist.filter(item=>{
        return item.id === Number(id)
    });
    
    if (vagaLoop.length===0){
        return(
            <div>
                <h1>Vaga com o ID {id} não encontrado</h1>
            </div>
        )
    }


    const vagaSelecionada = vagaLoop[0];

      return (
        <div>   
            <Header />  

        <div>
            <DetalhesVaga />

        
            <Footer />
        </div>
        </div>
    )
}

export default VagaDetalhe;