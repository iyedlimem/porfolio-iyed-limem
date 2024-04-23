import React from 'react'
import "./qualification.css";
import { useState } from 'react';

const Qualification = () => {

    const [toggleState, settoggleState] = useState(1);

    const toggleTab = (index) => {
        settoggleState(index);
    }

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__conatiner container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                    }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Graduated Software Engineer </h3>
                                <span className="qualification__subtitle"> Esprit School of engineering </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">{' '}</i>
                                    Oct 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>

                            </div>
                            <div>
                                <h3 className="qualification__title">Mobile and web devolopment </h3>
                                <span className="qualification__subtitle"> Esprit School of engineering  </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">{' '}</i>
                                    2021-2023
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Pre Engineering </h3>
                                <span className="qualification__subtitle"> IPEIN pre engineering school </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">{' '}</i>
                                    2018-2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification__content qualification__content-active"
                            : "qualification__content"
                    }

                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Full-stack Web Developer </h3>
                                <span className="qualification__subtitle"> RegRow </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">{' '}</i>
                                    Oct 2023 - Mars 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder">  </span>
                                <span className="qualification__line"></span>

                            </div>
                            <div>
                                <h3 className="qualification__title">Web Intern</h3>
                                <span className="qualification__subtitle">Regrow </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">{' '}</i>
                                    Mars 2023 - Oct 2023
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Web Developer Freelancer </h3>
                                <span className="qualification__subtitle"> Flenci </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">{' '}</i>
                                    Aug 2022 - Jan 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification