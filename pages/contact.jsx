import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import st from "../styles/contact.module.css";
import glb from "../styles/customGlobals.module.css";
import Head from "next/head";
import Link from "next/link";

const privacyPolicy = () => {
  return (
    <div className={glb.box}>
      <Header />
      <Head>
        <title>KO Solutions</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.jpeg"
          type="image/x-icon"
        />
      </Head>
      <div className={st.contact}>
        <div className={st.contactBox}>
          <h1>Innovate with us!</h1>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Company</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Telephone</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Your Question</label>
            <textarea name="" id=""></textarea>
          </div>
          <span>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">I agree with Privacy Policy.</label>
          </span>
          <button>Send</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default privacyPolicy;
