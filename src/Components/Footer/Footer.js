import React, { Component } from 'react';
import './Footer.css';

function Footer({copyright, copyname}){
        return(
            <div className="footer-copyright text-center py-3 bg-dark text-light">
        
          &copy; {new Date().getFullYear()} {copyright}{copyname}
    
        </div>


        )

}

export default Footer