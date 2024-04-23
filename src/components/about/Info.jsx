import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-award-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">6 Months</span>
            </div>
            <div className="about__box">
                <i class="uil uil-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">+5 projects</span>
            </div>
            <div className="about__box">
                <i class="uil uil-user-check about__icon "></i>
                <h3 className="about__title">Available</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info