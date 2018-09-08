import React from 'react';
import Helmet from 'react-helmet';
import appleTouchIcon from '../img/favicons/apple-touch-icon.png';
import favicon32 from '../img/favicons/favicon-32x32.png';
import favicon16 from '../img/favicons/favicon-16x16.png';
import siteManifest from '../img/favicons/site.webmanifest';
import safariPinnedTab from '../img/favicons/safari-pinned-tab.svg';
import faviconIco from '../img/favicons/favicon.ico';
import browserConfig from '../img/favicons/browserconfig.xml';

const Head = () => (
  <Helmet>
    {/* FAVICONS */}
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />>
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />>
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="manifest" href={siteManifest} />
    <link rel="mask-icon" href={safariPinnedTab} color="#6938bf" />
    <link rel="shortcut icon" href={faviconIco} />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta name="msapplication-config" content={browserConfig} />
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
