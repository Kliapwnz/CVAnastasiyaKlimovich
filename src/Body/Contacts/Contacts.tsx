import React from 'react';
import s from "./Contacts.module.css"
import mail from "../../mail.png"
import phone from "../../phone.png"
import linkedin from "../../linkedin.png"
import telegram from "../../telegramm.png"


export const Contacts = () => {
    return (
        <div className={s.mainContacts}>
            <h2 className={s.mainNameContacts}>Contacts</h2>
            <div className={s.allContacts}>
                <div className={s.pointContact}>
                    <img className={s.imgContact} src={phone} alt=""/>
                    <a className={s.infoContact} href="tel:+375296029303">+37529-602-93-03</a>
                </div>
                <div className={s.pointContact}>
                    <img className={s.imgContact} src={mail} alt=""/>
                    <a href="https://www.southbrain98@gmail.com">southbrain98@gmail.com</a>
                </div>
                <div className={s.pointContact}>
                    <img className={s.imgContact} src={linkedin} alt=""/>
                    <a href="https://www.linkedin.com/in/anastasiya-klimovich">linkedin.com/in/anastasiya-klimovich</a>
                </div>
                <div className={s.pointContact}>
                    <img className={s.imgContact} src={telegram} alt=""/>
                    <a href="https://t.me/simon_ololo">@simon_ololo</a>
                </div>
            </div>
        </div>
    );
};
