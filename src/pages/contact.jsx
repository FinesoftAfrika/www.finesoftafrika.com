import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Obfuscate from "react-obfuscate";
import { FaEnvelopeO, FaTwitter, FaGithub } from "react-icons/lib/fa/";
import Helmet from "react-helmet";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Contact us" />

      <HeadlineWithFocus>
        You can get in touch with us <span>anytime through</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="info@finesoftafrika.com" />
        </li>
        <li className="c-contact-list__item">
          <FaTwitter />
          <a
            href="https://twitter.com/finesoftafrika"
            target="_blank"
            rel="noopener noreferrer"
          >
            @finesoftafrika
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/finesoftafrika"
            target="_blank"
            rel="noopener noreferrer"
          >
            Finesoft Afrika
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>
    </div>
  );
};
