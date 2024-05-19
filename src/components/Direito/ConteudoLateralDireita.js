import './conteudoLateralDireita.css';

import Perfils from './Perfils.js';

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
            
                <a><span>Sobre</span> .</a>
                 <a><span>Ajuda</span> .</a>
                 <a><span>Imprensa</span> .</a>
                 <a><span>API</span> .</a>
                 <a><span>Carreiras</span> .</a>
                 <a><span>Privacidade</span> .</a>
                 <a><span>Termos</span> .</a>
                 <a><span>Localizações</span> .</a>
                 <a><span>Idioma</span> .</a>
                 <a><span>Bearly Verified</span></a>
                 <div>© 2024 BEARTAGRAM FROM BEARLY</div>
            </footer>
        </div>
    )
}