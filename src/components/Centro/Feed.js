import './Feed.css'

import Post from './Post/Post.js'

import perfil1 from '../../img/instaLogo.png';

export default function Feed(){
    return(
        <div className='Feed'>
            <Post
                perfil={perfil1}
                nome='moçoLegal'
                imgSrc="https://via.placeholder.com/150"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />

        </div>
    )
}