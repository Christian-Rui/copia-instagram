import './Post.css'

import { useState } from 'react';

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {AiOutlineMessage} from "react-icons/ai"

export default function Post(props) {
    const [likes, setLikes] = useState(0);
    const [animate, setAnimate] = useState(false);

    const handleIconClick = () => {
      setLikes(!likes);
    };
  
    const handleMouseLeave = () => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300); // Reset after animation duration
    };

    return (
        <div className="card post">
            <div className="card-header">
                <div>
                    <img src={props.perfil}></img>
                </div>        
                <h3>{props.nome}</h3>
            </div>
            <div className="card-body">
                <div className='body-img'>
                    <img src={props.imgSrc} />
                </div>
                    {likes % 2 === 0 ? 
                    <FaRegHeart onClick={handleIconClick} onMouseLeave={handleMouseLeave} className={`icon ${animate ? 'animate' : ''}`} style={{
                        fontSize: 24,
                        
                    }}></FaRegHeart> : 
                    <FaHeart onClick={handleIconClick} className={`icon expanded`}  style={{
                        fontSize: 24,
                        color: 'Red',
                        
                    }}></FaHeart>}
                <AiOutlineMessage></AiOutlineMessage>
                <p>{props.body}</p>
            </div>
            <div className="card-footer">
                
            </div>
        </div>
    );
}