import React from 'react';
import s from "./Languages.module.css"

export const Languages = () => {
    return (
        <div className={s.mainLanguage}>
            <h2 className={s.nameLanguage}>Languages</h2>
            <div className={s.pointsLanguages}>
                <div className={s.english}>
                    <p className={s.points}>English</p>
                    <p className={s.levelKnow}>B2</p>
                </div>
                <div className={s.border}></div>
                <div className={s.russian}>
                    <p className={s.points}>Russian</p>
                    <p className={s.levelKnow}>Native</p>
                </div>
            </div>
        </div>
    );
};

