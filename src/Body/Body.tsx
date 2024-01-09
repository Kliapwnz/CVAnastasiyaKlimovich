import React from 'react';
import {Portfolio} from "./Porfolio/Portfolio";
import s from "./Boby.module.css"
import {Languages} from "./Languages/Languages";
import {Education} from "./Education/Education";
import {Contacts} from "./Contacts/Contacts";
import {WorkExperience} from "./WorkExperience/WorkExperience";
import {Programs} from "./Programs/Programs";

export const Body = () => {
    return (
        <div className={s.mainBody}>
           <div>
            <Portfolio/>
            <Languages/>
            <Education/>
            <Contacts/>
           </div>
            <div>
            <WorkExperience/>
            <Programs/>
            </div>
        </div>
    );
};

