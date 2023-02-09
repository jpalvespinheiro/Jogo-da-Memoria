import { paresDeCartas } from "../../constants/cartas"
import { Carta } from "../Cartas"
import { Placar } from "../Placar"

export const JogodaMemoria = () => {
 return (
   <div className="jogo-da-memoria">
    <div className="jogo-da-memoria_conteudo">
      <h1>Jogo da Memoria</h1>
       <Placar/>
       <div className="jogo-da-memoria_cartas">
        {paresDeCartas.map((carta) => <Carta key={carta.id} {...carta} />
        )}
       </div>
    </div>
   </div>
 );

}