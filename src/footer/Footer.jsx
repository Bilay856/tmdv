import React, { useContext } from 'react';
import Footer_logo from '../img/footer img.svg'
import './Footer.css'
import { MovieContext } from '../context';

const Footer = () => {
    const { t } = useContext(MovieContext);

    return (
        <div id='footer'>
            <div className="footer">
                <div className="footer_dives">
                    <div className="footer_div">
                        <img src={Footer_logo} alt="" width='200px'/>
                    </div>
                    <div className="footer_div">
                        <h1>{t.footerMain}</h1>
                        <h2 className='gg'>{t.footerAbout}</h2>
                        <h2 className='gg'>{t.footerApiDocs}</h2>
                        <h2 className='gg'>{t.footerApiBusiness}</h2>
                        <h2 className='gg'>{t.footerSystemStatus}</h2>
                    </div>
                    <div className="footer_div">
                        <h1>{t.footerJoin}</h1>
                        <h2 className='gg'>{t.footerEditorGuide}</h2>
                        <h2 className='gg'>{t.footerAddMovie}</h2>
                        <h2 className='gg'>{t.footerAddSeries}</h2>
                    </div>
                    <div className="footer_div">
                        <h1>{t.footerCommunity}</h1>
                        <h2 className='gg'>{t.footerGuides}</h2>
                        <h2 className='gg'>{t.footerHonor}</h2>
                        <h2 className='gg'>{t.footerSupportForums}</h2>
                    </div>
                    <div className="footer_div">
                        <h1>{t.footerLegal}</h1>
                        <h2 className='gg'>{t.footerTerms}</h2>
                        <h2 className='gg'>{t.footerApiTerms}</h2>
                        <h2 className='gg'>{t.footerPrivacy}</h2>
                        <h2 className='gg'>{t.footerDmca}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;