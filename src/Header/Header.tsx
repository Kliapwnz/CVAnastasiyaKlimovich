import React from 'react';
import img from "../anastasiya.jpg"
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.mainHeader}>
            <div className={s.text}>
                <h1 className={s.name}>Anastasiya Klimovich</h1>
                <p className={s.prof}>Web, UX/UI designer</p>
                <p><b>Minsk, Belarus</b></p>
                <p>Hello, I am a Web, UX/UI designer with 1,5 years experience on commercial projects. I also have 1.5
                    years of experience as SEO-assistant.</p>
            </div>
            <div className={s.imageBlock}>
                <img src={img} alt="" className={s.image}/>
            </div>
        </div>
    );
};

