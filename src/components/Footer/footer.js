import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer">
                    <h3 id='form'>FormBuzz.</h3>
                    <div className="social-wrapper">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" />
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" />
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" />
                        <img src="https://img.icons8.com/material-sharp/30/000000/youtube-play.png" />
                    </div>
                    <div class="content-wrapper">
                        Terms of service- Privacy policy <img src="https://img.icons8.com/windows/20/fa314a/copyright.png" /> 2019 All Rights Reserved by < br />
                        <a href="#">Tubidii</a> Website by impression
                    </div>
                </div>
            </div>
        </>

    )
}