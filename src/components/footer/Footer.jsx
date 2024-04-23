import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">.Iyed</h1>
        <ul className="footer__list">

          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">Journey</a>
          </li>

        </ul>
        <div className="footer__social">

          <a href="https://github.com/iyedlimem" className="footer__social-link" target="_blank">
            <i class="uil uil-github"></i>
          </a>

          <a href="https://linkedin.com/in/iyed-limem" className="footer__social-link" target="_blank">
            <i class="ui uil-linkedin"></i>
          </a>


        </div>

      </div>
    </footer>
  )
}

export default Footer