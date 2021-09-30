import React from 'react';
import { Image } from 'react-bootstrap';

import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content__wrap">
        <div className="footer-content__col">
          <div>
            <Image
              className="social-media__icon"
              src="./image/instagram.png"
              alt="instagram"
            />
            <Image
              className="social-media__icon"
              src="./image/facebook.png"
              alt="facebook"
            />
            <Image
              className="social-media__icon"
              src="./image/youtube.png"
              alt="youtube"
            />
          </div>
          <p>Audio and subtitles</p>
          <p>Mediacenter</p>
          <p>Confidentiality</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-content__col">
          <p>Sound desciption</p>
          <p>For investors</p>
          <p>Legal provisions</p>
        </div>
        <div className="footer-content__col">
          <p>Support center</p>
          <p>Vacancies</p>
          <p>Cookies settings</p>
        </div>
        <div className="footer-content__col">
          <p>Gift card</p>
          <p>Use rules</p>
          <p>Corporate information</p>
        </div>
      </div>
      <div className="footer-content__wrap">
        &#169; 2021 Valeriia Novitska All rights reserved
      </div>
    </div>
  );
}
