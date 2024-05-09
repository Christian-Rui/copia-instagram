import Story from './Story'
import './Stories.css'


var listaUsuario = [
    {
        nome: 'Gabs',
        url: 'https://avatars.githubusercontent.com/u/48858978?v=4'
    },
    {
        nome: 'Bosak',
        url: 'https://s2-oglobo.glbimg.com/TBHKF5iXMhHB2JEzL8iVEMRQshU=/0x0:439x273/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/U/C/V9PkuMSEu3hQDv1bzUmg/screenshot-201.png'
    },
    {
        nome: 'Erik',
        url: 'https://i.pinimg.com/originals/e3/db/38/e3db3867fe6ea9484ca7c2ec599ddb2b.jpg'
    },
    {
        nome: 'Gretzel',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtVfgiKNu0Rm4TVZfEGO1-DeN4mxiaeUG_Lh7UHv1Fw&s'
    },
    {
        nome: 'Eduardo',
        url: 'https://www.gatogeek.com.br/cdn/shop/products/urso-cabecudinho-pelucia-engracada-pelucia-gatogeek-990691.jpg?v=1683867912'
    },
    {
        nome: 'RuiRui',
        url: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4a/aa/d4/4aaad43e-7835-d5d1-2640-1aaba9b1af2f/0.jpg/800x800cc.jpg'
    }

];
export default function Stories() {
    return (
        <div className="Stories">
            {
            listaUsuario.map((usuario) => {
                return <Story caminhoDaImagem={usuario.url} nomeUsuario={usuario.nome} />
            })
            }

            {/* <Story />
            <Story />
            <Story />
            <Story />
            <Story /> */}
        </div>
    )
}