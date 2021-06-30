import React, { useRef } from "react";
import st from "../styles/components/header.module.css";
import { MdClose, MdMenu } from "react-icons/md";
import Link from "next/link";

const header = () => {
  const mobHeader = useRef(null);

  const handleShow = () => {
    mobHeader.current.style.display = "flex";
    document.body.style.overflowY = "hidden";
  };
  const handleClose = () => {
    mobHeader.current.style.display = "none";
    document.body.style.overflowY = "auto";
  };
  return (
    
    <div className={st.header}>
      <div className={st.headerLeft}>
        <MdMenu onClick={handleShow} className={st.menuIcon} />

        <Link href="/">
          <img src="/assets/LOGO_WHITE.svg" alt="whiteLogo" />
        </Link>
      </div>
      <div className={st.headerRight}>
        <img src="/assets/search.svg" alt="search" />
        <span>
          <p>EN</p>
          <p>DE</p>
        </span>
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Why Consulting</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={st.mobHeader} ref={mobHeader}>
        <div className={st.headerLeftMob}>
          <MdClose onClick={handleClose} />
          <img src="/assets/LOGO_WHITE.svg" alt="whiteLogo" />
        </div>
        <div className={st.mobHeaderBox}>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Why Consulting</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <img src="/assets/LOGO_WHITE.svg" alt="whiteLogo" />
        </div>
      </div>
    </div>
  
  );
};

export default header;
