import React from "react";
import '../style/App.css';

const Footer = () => {
    return (

        <footer className="page-footer font-small bg-primary">

            <div className="footer-copyright text-center py-3"><img src="logo.png" className="logo_footer mt-24" alt="Wise Emotions" /></div>
            <div className="footer-copyright text-center py-3">Via S. Paolo, 1 - 20121 Milano MI - Italy</div>
            <div className="footer-copyright text-center py-3"><a className="black" href="mailto:hr@wisemotions.com">hr@wisemotions.com</a></div>
            <div className="footer-copyright text-center py-3">© Copyright 2020 Wise Emotions S.r.L. All rights reserved. Partita IVA 07388960960</div>

        </footer>
    );
};


export default Footer;
