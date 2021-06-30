import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import st from "../styles/privacyPolicy.module.css";
import glb from "../styles/customGlobals.module.css";
import Head from "next/head";
import Link from "next/link";
const privacyPolicy = () => {
  return (
    <div className={glb.box}>
      <Head>
        <title>KO Solutions</title>
        <link
          rel="shortcut icon"
          href="/assets/favicon.jpeg"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <div className={st.privacyPolicyBox}>
        <h1>Imprint</h1>
<p>
KoSolutions e.U. <br />Karmelitergasse 6 <br />1020 Vienna <br />Austria<br /><br /><br />
Geschäftsführer: Sebastian Kovacs, Bakk. MBA<br /><br /><br />
Email: Office@KoSolutions.org<br />Mobil: +43 676 375 62 54<br />Web: www.kosolutions.org<br /><br /><br />
Firma: KoSolutions e.U.<br />Unternehmensgegenstand: Unternehmensberatung,<br /> Werbung und Marktkommunikation<br />Firmenbuchnummer:<br />Firmenbuchgericht:<br />Firmensitz: Karmelitergasse 6/1, 1020 Wien<br /><br /><br />
Mitglied der WKÖ, Fachverband Werbung und <br />Marktkommunikation<br /><br /><br />
Gewerbeordnung: https://www.ris.bka.gv.at/<br /><br /><br />
© Copyright 2021 KoSolutions<br />

</p>
      </div>
      <Footer />
    </div>
  );
};

export default privacyPolicy;
