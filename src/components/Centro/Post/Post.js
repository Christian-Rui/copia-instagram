import './Post.css'

import { useState } from 'react';
import React, { useEffect, useRef } from 'react';

import { FaRegHeart, FaSlidersH } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { GoSmiley } from "react-icons/go";

import Picker from 'emoji-picker-react';

export default function Post(props) {
    const [likes, setLikes] = useState(FaSlidersH);
    const [animate, setAnimate] = useState(false);

    const [comentario, setComentario] = useState('');
    const [postarComentario, setPostarComentario] = useState([]);

    const handleInputChange = (event) => {
        setComentario(event.target.value);
    };

    const adicionarComentario = () => {
        setPostarComentario([...postarComentario, comentario]);
        setComentario('');
      };

    const handleIconClick = () => {
        setLikes(!likes);
    };

    const handleMouseLeave = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300); // Reset after animation duration
    };

    const textareaRef = useRef(null);

    useEffect(() => {
        textareaRef.current.style.height = '20px';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }, [comentario]);

    const [emojiPickerState, SetEmojiPicker] = useState(false);

    const onEmojiClick = (emojiObject) => {
        setComentario(comentario + emojiObject.emoji);
    };

    let emojiPicker;
    if (emojiPickerState) {
        emojiPicker = (
            <Picker
                onEmojiClick={onEmojiClick}
                theme='dark'
                emojiStyle='google'
            />
        );
    }

    const triggerPicker = (event) => {
        event.preventDefault();
        SetEmojiPicker(!emojiPickerState);
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
                <div className='icons-post'>
                    {likes ?
                        <FaRegHeart onClick={handleIconClick} onMouseLeave={handleMouseLeave} className={`icon ${animate ? 'animate' : ''}`} style={{
                            fontSize: 24,

                        }}></FaRegHeart> :
                        <FaHeart onClick={handleIconClick} className={`icon expanded`} style={{
                            fontSize: 24,
                            color: 'Red',

                        }}></FaHeart>
                    }
                    <TbMessageCircle className='icon' style={{
                        transform: 'scaleX(-1)',
                        fontSize: 28,
                    }}></TbMessageCircle>
                    <HiOutlinePaperAirplane style={{
                        fontSize: 25,
                        marginLeft: '2px',
                        marginBottom: '8px'
                    }} className='rotate-icon icon' />
                    <BiBookmark className='icon save' style={{
                        fontSize: 25,
                    }}>
                    </BiBookmark>
                </div>
                <p><span>{5 + (!likes ? 1 : 0)} curtidas</span></p>
                <p><span>{props.nome}</span> {props.body}</p>
                {postarComentario.map((comentario, index) => (
                    <p key={index}><span>{props.nome}</span> {comentario}</p>
                ))}
                <div className='area-comentario'>
                    <textarea ref={textareaRef} className='input-comentario'
                        type="text"
                        value={comentario}
                        onChange={handleInputChange}
                        placeholder='Adicione um comentário...' style={{
                            width: '100%', 
                            fontSize: '16px', 
                            fontWeight: 300,
                            maxHeight: '100px'
                        }}></textarea>
                    {comentario && <p className='publicar' onClick={adicionarComentario} style={{fontSize: '16px', fontWeight: 600}}>Publicar</p>}
                    <GoSmiley onClick={triggerPicker} className='emoji' style={{fontSize: '18px'}}></GoSmiley>
                </div>
                {emojiPicker}
            </div>
            
        </div>
    );
}