import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import './Footer.sass'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="column is-3">
        <p className="hu-footer__link-title">
          <a href="https://www.humio.com/">Home</a>
        </p>
        <p className="bd-footer-link">
          <a href="/2018/06/20/automatic-variables-documentation/">
            Automatic variables docs
          </a>
        </p>
        <p className="bd-footer-link">
          <a href="/2018/06/20/automatic-variables-documentation/">
            Automatic variables docs
          </a>
        </p>
      </div>
      <div className="column is-3"></div>
      <div className="column is-3"></div>
    </div>
  </footer>
)

export default Footer
