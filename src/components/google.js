import React, { Component } from 'react';

const  setCookie = (key, value, expiry) => {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
  }
class GoogleTranslate extends Component {
  

    googleTranslateElementInit () {
        setCookie('googtrans', '/en/en',1);
        new window.google.translate.TranslateElement({
        //  pageLanguage: 'en',
        includedLanguages : 'ar,sq,it,en,pt',
         layout: window.google.translate.TranslateElement.InlineLayout.NONE
    },
     'google_translate_element')
     }

    componentDidMount() {
        // alert("test")

        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');        
        document.body.appendChild(addScript);  
        window.googleTranslateElementInit = this.googleTranslateElementInit;
    }

    render() {
        return (
            // <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
            <div id="google_translate_element"></div>
          );
     }
}

export default GoogleTranslate;