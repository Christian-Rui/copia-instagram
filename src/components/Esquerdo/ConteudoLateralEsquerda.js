import logo from '../../img/instaLogo.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css'

import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { CgClapperBoard } from "react-icons/cg";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { RiMenuLine } from "react-icons/ri";

import perfil from '../../img/Perfil2.png';


export default function ConteudoLateralEsquerda() {
    var tamanhoIcon = 27;
    var corIcon = 'White';

    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />

            <ul>
                <Menu nome="Página Inicial" classe="text-menu" icone={<GoHomeFill style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                }} />} />

                <Menu nome="Pesquisa" classe="text-menu" icone={<IoSearch style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                }} />} />

                <Menu nome="Explorar" classe="text-menu" icone={<MdOutlineExplore style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                }} />} />

                <Menu nome="Reels" classe="text-menu" icone={<CgClapperBoard style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                }} />} />

                <Menu nome="Mensagens" classe="text-menu" icone={<HiOutlinePaperAirplane style={{
                    fontSize: 25,
                    color: corIcon,
                    marginLeft: '2px',
                    marginBottom: '8px'
                }} className='rotate-icon' />} />

                

                <Menu nome="Notificações" classe="text-menu" icone={<GoHeart style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                }} />} />

                <Menu nome="Criar" classe="text-menu" icone={<CgAddR style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                }} />} />

                <li className='text-menu'>
                    <img src={perfil} style={{
                        borderRadius: '50%',
                        width: '25px',
                        height: '25px'
                    }}></img>
                    <p>Perfil</p>
                </li>
            
                <Menu nome="Mais" classe="text-menu" icone={<RiMenuLine style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                }} />} />


            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;