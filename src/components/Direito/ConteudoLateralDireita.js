import './conteudoLateralDireita.css';

import Perfils from './Perfils.js';
import Suggestions from './SugestoesPerfil';

import perfil from '../../img/Perfil2.png';
import sugestao1 from '../../img/Capipurple.png';
import sugestao2 from '../../img/ingrid_ihaaa.png';
import sugestao3 from '../../img/junjun_ly.png';
import sugestao4 from '../../img/kaaaaatchau.png';
import sugestao5 from '../../img/nao_e_gustavo.png';

const listaPerfils = [
    {
        imagem: sugestao1,
        nome: 'capipurple',
    },
    {
        imagem: sugestao2,
        nome: 'ingrid_ihaaa',
    },
    {
        imagem: sugestao3,
        nome: 'junjun_ly',
    },
    {
        imagem: sugestao4,
        nome: 'kaaaaatchau',
    },
    {
        imagem: sugestao5,
        nome: 'nao_e_gustavo',
    }
];

export default function ConteudoLateralDireita() {
    return (
        <div className='conteudoLateralDireita'>
            <Perfils
                img={perfil}
                nome="bearlykkk"
                subDescricao="Bear Rui"
                btn="Mudar"
            />
            <div className='container_sugestoes'>
                <p className='sugestoes'>Sugestões para você</p>
                <p className='btn_branco'>Ver tudo</p>
            </div>
            {listaPerfils.map(objeto =>
                <Perfils
                    img={objeto.imagem}
                    nome={objeto.nome}
                    subDescricao="Sugestões para você"
                    btn="Seguir"
                />
            )}
            <footer className='footer'> 
            
                <a>Sobre <span>.</span></a>
                 <a>Ajuda <span>.</span></a>
                 <a>Imprensa <span>.</span></a>
                 <a>API <span>.</span></a>
                 <a>Carreiras <span>.</span></a>
                 <a>Privacidade <span>.</span></a>
                 <a>Termos <span>.</span></a>
                 <a>Localizações <span>.</span></a>
                 <a>Idioma <span>.</span></a>
                 <a>Bearly Verified</a>
                 <div>© 2024 BEARTAGRAM FROM BEARLY</div>
            </footer>
        </div>
    )
}