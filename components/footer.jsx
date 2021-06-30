import React from "react";
import st from "../styles/components/footer.module.css";
import Link from 'next/link'
import {
  FaLinkedin,
  FaMedium,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const footer = () => {
  return (
    <div className={st.footer}>
      <div className={st.footerLeft}>
        <img src="/assets/LOGO_WHITE.svg" alt="" />
        <p>KoSolutions e.U. </p>
        <p> Karmelitergasse 6, 1020 Vienna </p>
        <p> Austria </p>
        <p> Office@KoSolutions.org</p>
      </div>
      <div className={st.footerCenter}>

        <Link href="/privacyPolicy">
        <a>Privacy Policy</a>
        </Link>

        <Link href="imprint">
        
        <a>Imprint</a>
        </Link>
        <a>About Us</a>
        <a>Communication Strategies</a>
        <a>Investment Strategies</a>
        <a>Research</a>
        <a>Others</a>
      </div>
      <div className={st.footerRight}>
        <div>
          <span>
            <FaLinkedin />{" "}
            <a href="https://www.linkedin.com/company/kosolutionsorg/">
              LinkedIn
            </a>
          </span>
          <span>
            <FaInstagramSquare />{" "}
            <a href="https://www.instagram.com/kosolutionsorg/">Instagram</a>
          </span>
          <span>
            <FaTwitterSquare />{" "}
            <a href="https://twitter.com/solutions_ko">Twitter</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default footer;
