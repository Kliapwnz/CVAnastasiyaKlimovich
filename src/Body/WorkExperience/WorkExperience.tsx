import React from 'react';
import s from "./WorkExperience.module.css"
import lineAnd from "../../lineAnd.png"

export const WorkExperience = () => {
    return (
        <div className={s.mainExperience}>
            <h2 className={s.mainNameExperience}>Work Experience</h2>
            <div className={s.allWorkExperience}>
                <img className={s.imgExp} src={lineAnd} alt=""/>
                <div className={s.workExp}>
                    <div className={s.helpF}>
                        <div className={s.itemExperience}>
                            <p className={s.dataExperience}>March 2022 - Now</p>
                            <p className={s.placeExperience}><b>Tactics Digital YYC</b> (Canada, Calgary)</p>
                            <p className={s.profInfo}>Web-designer, UX/UI-designer</p>
                        </div>
                        <ul className={s.itemSkills}>
                            <li>Interface design and prototyping</li>
                            <li>User research</li>
                            <li>Creating information architecture</li>
                            <li>Usability testing</li>
                        </ul>
                    </div>
                    <div className={s.helpF}>
                        <div className={s.itemExperience}>
                            <p className={s.dataExperience}>October 2020 - March 2022</p>
                            <p className={s.placeExperience}><b>Intermedia Ventures LLC</b> (USA)</p>
                            <p className={s.profInfo}>SEO Assistant</p>
                        </div>
                        <ul className={s.itemSkills}>
                            <li>Checking content and updates on the site</li>
                            <li>Working with projects analytics</li>
                            <li>Work with reports on site optimization</li>
                            <li>Control of task fulfillment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

