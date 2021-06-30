import React, { useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactBar from "../components/contactBar";
import st from "../styles/blog.module.css";
import hm from "../styles/home.module.css";
import glb from "../styles/customGlobals.module.css";
import Head from "next/head";
import Link from "next/link";
import $ from "jquery/dist/jquery.min.js";
import hd from '../styles/components/header.module.css';
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";
import ScrollableAnchor from 'react-scrollable-anchor'

import {
  FaLinkedin,
  FaMedium,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLongArrowAltRight,
} from "react-icons/fa";

const privacyPolicy = () => {
  const handleBox1 = () => {
    $(".box1").removeClass("empty");
    $(".img1").removeClass("none");
    $(".box2, .box3").addClass("empty");
    $(".img2, .img3").addClass("none");
  };

  const handleBox2 = () => {
    $(".box2").removeClass("empty");
    $(".img2").removeClass("none");
    $(".box1, .box3").addClass("empty");
    $(".img1, .img3").addClass("none");
  };

  const handleBox3 = () => {
    $(".box3").removeClass("empty");
    $(".img3").removeClass("none");
    $(".box2, .box1").addClass("empty");
    $(".img2, .img1").addClass("none");
  };

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
    <div className={glb.box}>
      
    <div className={hd.header}>
      <div className={hd.headerLeft}>
        <MdMenu onClick={handleShow} className={hd.menuIcon} />

        <Link href="/">
          <img src="/assets/LOGO_WHITE.svg" alt="whiteLogo" />
        </Link>
      </div>
      <div className={hd.headerRight}>
        <img src="/assets/search.svg" alt="search" />
        <span>
          <p>EN</p>
          <p>DE</p>
        </span>
        <ul>
          <li>
            <a href="#section2">Services</a>
          </li>
          <li>
            <a href="#section3">Why Consulting</a>
          </li>
          <li>
            <a href="#section4">About</a>
          </li>

          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={hd.mobHeader} ref={mobHeader}>
        <div className={hd.headerLeftMob}>
          <MdClose onClick={handleClose} />
          <img src="/assets/LOGO_WHITE.svg" alt="whiteLogo" />
        </div>
        <div className={hd.mobHeaderBox}>
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
  
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <title>KO Solutions</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.jpeg"
          type="image/x-icon"
        />
      </Head>
      <div className={hm.hero}>
        <div className={hm.heroLeft}>
          <h1>Every Problem Has A Solution</h1>
          <h2>
            Data-driven and first principle digitization & innovation consulting
          </h2>
          <button>
            <span>Stay Innovative</span> <FaLongArrowAltRight />{" "}
          </button>
        </div>
        <div className={hm.heroRight}>
          <img src="/assets/hero.png" alt=""/>
          <span>
            <FaLinkedin />
            <FaMedium />
            <FaInstagramSquare />
            <FaTwitterSquare />
          </span>
        </div>
      </div>
      <ScrollableAnchor id={'section2'}>
      <div className={hm.fields}>
        <h1>Fields of Expertise</h1>
        <h2>
          KoSolutions addresses future fields with the greatest potential to
          promote innovation and progress within society. Our claim is to
          recognize trends at an early stage and implement technlogoy in order
          to give you the necessary edge in the market.
        </h2>
        <div className={hm.fieldsContainer}>
          <div className={hm.fieldsBox}>
            <img src="/assets/dbm.png" alt="" />
            <p>Data-based Marketing</p>
          </div>
          <div className={hm.fieldsBox}>
            <img src="/assets/sbm.png" alt="" />
            <p>Scaling Business Models </p>
          </div>
          <div className={hm.fieldsBox}>
            <img src="/assets/bt.png" alt="" />
            <p>Blockchain Technology</p>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section3'}>
      <div className={hm.centerContainer}>
        <div className={hm.centerBox}>
          <h1>Why Consulting?</h1>
          <div className={hm.centerBoxContent}>
            <div className={hm.cbcLeft}>
              <div className="cbcTextBox box1" onClick={handleBox1}>
                <h2>Optimize Your Sales Funnel & Communication</h2>
                <p>
                  Understanding your specific target group is key for an
                  efficient sales funnel. Using our business intelligence and
                  market data we help you to build the foundation of your
                  communication strategy.
                </p>
                <Link href="/blogs/salesFunnel">
                  <a>
                    See more <FaLongArrowAltRight />
                  </a>
                </Link>
              </div>

              <div className="cbcTextBox box2 empty" onClick={handleBox2}>
                <h2>Build an Effective Business Model</h2>
                <p>
                  Especially in early stage start-ups it is important to plan
                  according your growth steps and to check the business model
                  for possible gaps.
                </p>
                <Link href="/blogs/effectiveBusinessModal">
                  <a>
                    See more <FaLongArrowAltRight />
                  </a>
                </Link>
              </div>

              <div className="cbcTextBox box3 empty" onClick={handleBox3}>
                <h2>Invest in Future Technology</h2>
                <p>
                  Be an early adoptor of newest technology to realise new sales
                  potential and expand your value chain.
                </p>
                <Link href="/blogs/futureTechnology">
                  <a>
                    See more <FaLongArrowAltRight />
                  </a>
                </Link>
              </div>
            </div>
            <div className="cbcRight">
              <img className="img1" src="/assets/hero.png" alt="" />
              <img className="img2 none" src="/assets/cm.png" alt="" />
              <img className="img3 none" src="/assets/ft.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section4'}>
      <div className={hm.mainPortion}>
        <div className={hm.mpLeft}>
          <img src="/assets/big.png" alt="" />
        </div>
        <div className={hm.mpRight}>
          <span>
            <img src="/assets/sebastian.png" alt="" />
            <a target="_blank" href="https://www.linkedin.com/in/sebkovacs/">
              <FaLinkedin />
            </a>
            <h1>Sebastian Kovacs, BSc MBA</h1>
            <h2>Chief Executive Officer</h2>
          </span>
        </div>
        <div className={hm.mpOver}>
          <h2>About KoSolutions</h2>
          <div>
            <h1>Holistic Approach to Consulting</h1>
            <p>
              KoSolutions is a network of experts from various branches of
              modern technology and business consulting. This broad knowledge
              allows us to apply systems thinking and provide you with the most
              efficient way to achieve your goal.
            </p>
            <p>
              We meet our clients anywhere they are in their journey to become
              data-driven, providing everything from specific expertise to
              holistic transformations spanning strategy design, build,
              implementation, and ongoing support.
            </p>
          </div>
        </div>
      </div>
      </ScrollableAnchor>
      <div className={st.researchAndInsights}>
        <h1>Research and Insights</h1>
        <div className={st.raiGrid}>
          <div className={st.raiCard}>
            <h3>Technology</h3>

            <span className={st.imgBox}>
              <img src="/assets/technology.svg" alt="" />
            </span>

            <div>
              <h6>Technology</h6>
              <h5>The Value of Decentralization </h5>

              <h4 className={st.tags}>
                <span>Tags: </span> Technology, Ethereum, Blockchain,
                Decentralization
              </h4>
              <Link href="/blogs/decentralization">
                <a>
                  Read more <FaLongArrowAltRight />
                </a>
              </Link>
            </div>
          </div>

          <div className={st.raiCard}>
            <h3>Marketing</h3>

            <span className={st.imgBox}>
              <img src="/assets/marketing.png" alt="" />
            </span>

            <div>
              <h6>Marketing</h6>
              <h5>How is the Marketing world changing?</h5>

              <h4 className={st.tags}>
                <span>Tags: </span> Data-driven, below-the-line, community
              </h4>
              <Link href="/blogs/marketing">
                <a>
                  Read more <FaLongArrowAltRight />
                </a>
              </Link>
            </div>
          </div>

          <div className={st.raiCard}>
            <h3>Start-Ups</h3>

            <span className={st.imgBox}>
              <img src="/assets/startup.png" alt="" />
            </span>

            <div>
              <h6>Start-Ups</h6>
              <h5>Critical Factors for Success</h5>

              <h4 className={st.tags}>
                <span>Tags: </span>
                Startup, business, entrepreneur, success
              </h4>
              <Link href="/blogs/success">
                <a>
                  Read more <FaLongArrowAltRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContactBar />
      <Footer />
    </div>
  );
};

export default privacyPolicy;
