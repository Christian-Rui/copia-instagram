import logo from '../../img/instaLogo.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css'
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";


export default function ConteudoLateralEsquerda() {
    var tamanhoIcon = 30;
    var corIcon = 'Gray';
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />

            <ul>
                <Menu nome="Página Inicial" classe="text-menu" icone={<GoHomeFill style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                    cursor: 'pointer'
                }} />} />

                <Menu nome="Explore" classe="text-menu" icone={<IoSearch style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                    cursor: 'pointer'
                }} />} />

                <Menu nome="Mensagens" classe="text-menu" icone={<TbBrandMessenger style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                    cursor: 'pointer'
                }} />} />

                <Menu nome="Notifications" classe="text-menu" icone={<GoHeart style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                    cursor: 'pointer'
                }} />} />

                <Menu nome="Create" classe="text-menu" icone={<CgAddR style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                    cursor: 'pointer'
                }} />} />


                <Menu className='Profile' nome="Profile" classe="text-menu" icone={<FaUserAlt style={{
                    fontSize: tamanhoIcon,
                    color: corIcon,
                    cursor: 'pointer'
                }} />} />



            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;