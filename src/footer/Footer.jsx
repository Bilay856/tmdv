import React, { useContext } from "react";
import Footer_logo from "../img/footer img.svg";
import "./Footer.css";
import { MovieContext } from "../context";

const Footer = () => {
  const { t } = useContext(MovieContext);

  return (
    <div id="footer">
      <div className="container">
        <div className="footer_dives">
          <div className="footer_div footer_logo">
            <img src={Footer_logo} alt="" />
          </div>
          <div className="footer_div">
            <h4>{t.footerMain}</h4>
            <p className="gg">{t.footerAbout}</p>
            <p className="gg">{t.footerApiDocs}</p>
            <p className="gg">{t.footerApiBusiness}</p>
            <p className="gg">{t.footerSystemStatus}</p>
          </div>
          <div className="footer_div">
            <h4>{t.footerJoin}</h4>
            <p className="gg">{t.footerEditorGuide}</p>
            <p className="gg">{t.footerAddMovie}</p>
            <p className="gg">{t.footerAddSeries}</p>
          </div>
          <div className="footer_div">
            <h4>{t.footerCommunity}</h4>
            <p className="gg">{t.footerGuides}</p>
            <p className="gg">{t.footerHonor}</p>
            <p className="gg">{t.footerSupportForums}</p>
          </div>
          <div className="footer_div">
            <h4>{t.footerLegal}</h4>
            <p className="gg">{t.footerTerms}</p>
            <p className="gg">{t.footerApiTerms}</p>
            <p className="gg">{t.footerPrivacy}</p>
            <p className="gg">{t.footerDmca}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;