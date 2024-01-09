import React from 'react';
import s from "./Programs.module.css"
import figma from "../../figma.png"
import photo from "../../Photoshop.png"
import illustrator from "../../Ilustrator.png"
import after from "../../After.png"

export const Programs = () => {
    return (
        <div className={s.mainPrograms}>
            <h2 className={s.mainNamePrograms}>Programs</h2>
            <div className={s.allProgram}>
                <div>
                    <p className={s.itemPrograms}>Figma</p>
                    <img className={s.imgProgram} src={figma} alt=""/>
                </div>
                <div>
                    <p className={s.itemPrograms}>Adobe Photoshop</p>
                    <img className={s.imgProgram} src={photo} alt=""/>
                </div>
                <div>
                    <p className={s.itemPrograms}>Adobe Illustrator</p>
                    <img className={s.imgProgram} src={illustrator} alt=""/>
                </div>
                <div>
                    <p className={s.itemPrograms}>AfterEffects</p>
                    <img className={s.imgProgram} src={after} alt=""/>
                </div>
                <p className={s.itemPrograms}><span className={s.wordOne}> Additionally:</span> InDesign, Google Analytics, Search Console, Ahrefs, Miro, Jira. </p>
            </div>
        </div>
    );
};

