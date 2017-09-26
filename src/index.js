import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import registerServiceWorker from './registerServiceWorker';


const homeUrl = 'localhost:3000',

navbarItems = [
  {name: "Home", url: homeUrl},
  {name: "About Us", url: homeUrl+"/about-us" },
  {name: "Products & Services", url: homeUrl+"/productsservices" },
  {name: "Contact Us", url: homeUrl+"/contact"}
],

phone = "0 732 903 511",
email = "info@sterlingproducts.com.au",
social = [
  {name:"facebook", url: ""},
  {name:"twitter", url: ""},
  {name:"youtube", url: ""},
  {name:"instagram", url: ""},
  {name:"pinterest", url: ""},
  {name:"linkedin", url: ""},
  {name:"skype", url: ""},
  {name:"paypal", url: ""},
],
galleryImages = [],
gallerDescriptions = [],

products = [
    {
      "label": "Anti-Jump Cables",
      "description": "Our Anti-Jump Cable system can be customised to suit service stations, drive through bottle shops, inventory counters or any site which require additional counter protection.",
      "src": ""
    },
    {
      "label": "Anti-Jump Screens",
      "description": "For over 30 years Sterling Products has been specialised in security screens featuring unique designs. Providing an effective deterrent against armed assaults whilst offering business peace of mind. Our Anti-Jump Screens are high impact and surface hardness, excellent optical quality and light transmission as well as resistant against harsh chemicals. Our designs can be tailored to suit your site and taste.",
      "src": ""
    },
    {
      "label": "Night Pay Windows",
      "description": "Our Night Pay Windows are normally available from stock in a range of standard sizes, or can be designed and manufactured to suit your specific requirements. Select from a range of voice transfer install options; natural speech to electronic speech. We use bullet resistant screens providing effective deterrent against armed assaults and also cater low level versions to assist accessibility.",
      "src": ""
    },
    {
      "label": "Bollards",
      "description": "These bollards are strong and dependable. Use as a visual deterrent to prevent vehicles from pulling up too close.\r\nMade to order to suit any specifications required.",
      "src": ""
    },
    {
      "label": "Security Enclosures",
      "description": "Our range of standardised and customised designs caters for almost every application for protecting classified documents.",
      "src": ""
    },
    {
      "label": "Custom Design & Manufacture",
      "description": "When you are in the market to take your idea further, Sterling Products can design and specify the correct material and method to turn any idea into reality. From drawing to CAD design and the tooling required for manufacture, it can all be done at Sterling Products. We pride ourselves in the fact that we don\u2019t avoid a challenge \u2013 in fact we welcome them.\r\nSterling Products offer a build-by-build project service, meaning special items can be built as required. With many years of first hand experience the skilled Sterling team can accommodate many projects.",
      "src": ""
    }
];

ReactDOM.render(
  <Page
    navbarItems={navbarItems}
    phone={phone}
    email={email}
    social={social}
    galleryImages={galleryImages}
    gallerDescriptions={gallerDescriptions}
    products={products}
  />,
document.getElementById('root'));
registerServiceWorker();
