import React from 'react';
import be from "../../be.png"
import s from "./Portfolio.module.css"

export const Portfolio = () => {
    return (
        <div className={s.mainPortfolio}>
            <h2 className={s.headerName}>Portfolio</h2>
            <div className={s.center}>
                <div className={s.portfolioContent}>
                    <img className={s.imgPortfolio} src={be} alt=""/>
                </div>
                <div className={s.portfolioContents}>
                    <a
                       href="https://www.behance.net/anastasiya_klimovich">behance.net/anastasiya_klimovich</a>
                </div>
            </div>
        </div>
    );
};

