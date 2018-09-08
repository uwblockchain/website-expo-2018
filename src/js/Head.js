import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet>
    {/* FAVICONS */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="uwbce.com/favicons/apple-touch-icon.png"
    />
    >
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="uwbce.com/favicons/favicon-32x32.png"
    />
    >
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="uwbce.com/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="uwbce.com/favicons/site.webmanifest" />
    <link
      rel="mask-icon"
      href="uwbce.com/favicons/safari-pinned-tab.svg"
      color="#6938bf"
    />
    <link rel="shortcut icon" href="uwbce.com/favicons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta
      name="msapplication-config"
      content="uwbce.com/favicons/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
    {/* STYLE SHEETS */}
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800"
      rel="stylesheet"
    />
    <title>UW Blockchain Expo</title>
  </Helmet>
);

export default Head;
