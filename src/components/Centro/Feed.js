import './Feed.css'

import Post from './Post/Post.js'

import perfil1 from '../../img/Perfil2.png';
import perfil2 from '../../img/emojiDeUrso.png'
import perfil3 from '../../img/polo.jpg'
import post1 from '../../img/Post1.jpg';
import post2 from '../../img/Post3.jpg';
import post3 from '../../img/Post4.jpg';


const listaPosts = [
    {
        foto: perfil1,
        fundo: true,
        nome:'bearlykkk',
        postagem: post1,
        descricao: "Só passendo com os melhores nesse dia 🐻"
    },
    {
        foto: perfil2,
        nome:'leeee_ti',
        postagem: post2,
        descricao: "Treinando para o campeonato mundial de ping pong sem ping",
        comentarios: [
            ['kkkaike',"Eu to torcendo pelo @rogerio"],
            ['yone_S2',"Fala dele 😽"]
        ]
    },
    {
        foto: perfil3,
        nome:'kdoo_dino',
        postagem: post3,
        descricao: "Familia❤️‍🩹",
        comentarios: [
            ['ursocomcurso',"Lindooooooooos aaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
        ]
    }
]

export default function Feed(){
    return(
        <div className='Feed'>
            {listaPosts.map((objeto) => (
                <Post
                logado='bearlykkk'
                perfil={objeto.foto}
                fundoColorido={objeto.fundo}
                nome={objeto.nome}
                imgSrc={objeto.postagem}
                body={objeto.descricao}
                comentarios={objeto.comentarios}
                 />
            ))}
            {/* <Post
                perfil={perfil1}
                nome='bearlyKKK'
                imgSrc={post1}
                body="Só passendo com os melhores nesse dia 🐻"
                 />
            <Post
                perfil={perfil1}
                nome='bearlyKKK'
                imgSrc={post1}
                body="Só passendo com os melhores nesse dia 🐻"
                 /> */}
        </div>
    )
}