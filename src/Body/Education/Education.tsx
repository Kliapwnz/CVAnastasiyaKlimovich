import React from 'react';
import s from "./Education.module.css"

export const Education = () => {
    return (
        <div className={s.mainEducation}>
            <h2 className={s.mainNameEducation}>Education</h2>
           <div className={s.school}>
               <div className={s.pointSchool}>
                   <p className={s.yearStudy}>2020-2025</p>
                   <p className={s.nameSchool}><b>BSUCA</b></p>
                   <p className={s.profName}>Advertising and PR Management</p>
               </div>
               <div className={s.pointSchool}>
                   <p className={s.yearStudy}>2014-2018</p>
                   <p><b>Minsk State Technological College</b></p>
                   <p className={s.profName}>Artist</p>
               </div>
           </div>
        </div>
    );
};

