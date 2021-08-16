import Capa from '../../assets/capa.svg';
import Clock from '../../assets/clock.svg';
import Star from '../../assets/star.svg';
import StarGray from '../../assets/StarGray.svg';

import './styles.scss'

export function Body () {
  return (
    <section>
      <img src={Capa} alt="Capa do filme" />
      <article>
      <p>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </p>
      <span>
      <img src={Clock} alt="tempo do filme" /> 51 min
        <div class="star">
          <img src={Star} alt="estrela" />
          <img src={Star} alt="estrela" />
          <img src={Star} alt="estrela" />
          <img src={Star} alt="estrela" />
          <img src={StarGray} alt="estrela" />
        </div>
        2021
      </span>
      <div class="buttons">
        <button id="watch">ASSISTIR AGORA</button>
        <button id="trailer">TRAILER</button>
      </div>
      </article>
    </section>
  );
}