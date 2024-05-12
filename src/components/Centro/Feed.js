import './Feed.css'

import Post from './Post/Post.js'

import perfil1 from '../../img/Perfil2.png';
import post1 from '../../img/Post1.jpg';


export default function Feed(){
    return(
        <div className='Feed'>
            <Post
                perfil={perfil1}
                nome='bearlyKKK'
                imgSrc={post1}
                body="Só passendo com os melhores nesse dia 🐻" />
        </div>
    )
}