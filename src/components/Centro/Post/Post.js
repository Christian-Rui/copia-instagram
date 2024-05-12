import './Post.css'

import { useState } from 'react';

import {FaRegGrinHearts} from 'react-icons/fa'
import {AiOutlineMessage} from "react-icons/ai"

export default function Post(props) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="card post">
            <div className="card-header">
                <img src={props.perfil}></img>
                <h3>{props.nome}</h3>
            </div>
            <div className="card-body">
                <div className='body-img'>
                    <img src={props.imgSrc} />
                </div>
                <FaRegGrinHearts
                    onClick={() => setLikes(likes + 1)}
                style={{color: likes % 2 === 0 ? 'black' : 'red', fontSize: "36"}}></FaRegGrinHearts>
                <AiOutlineMessage></AiOutlineMessage>
                <p>{props.body}</p>
            </div>
            <div className="card-footer">
                
            </div>
        </div>
    );
}