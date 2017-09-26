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
address = "11-13 Barrinia Street, Slacks Creek. QLD 4127",
phone = "0 732 903 511",
phonealt = "0 732 903 611",
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
galleryImages = ["a", "b", "c", "d"],
galleryDescriptions = ["a is for awesome", "b is for better", "c is for crap", "d is for dead"],
testimonialImages = ["e", "f", "g", "h"],
testimonialDescriptions = ["e is for effort", "f is for freak", "g is for grand", "h is for hell"],
clientImages = ["i", "j", "k", "l"],
clientDescriptions = ["", "", "", ""],
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
],
about = [
  {section: "Intro", text: "Sterling Products are proud of all that we produce and support. Our care and attention to detail in all we do has positioned us at the forefront of our industry today. Based in Brisbane, Australia, Sterling Products is well positioned to offer ease of distribution throughout Australia and the Asia Pacific regions.\nApplying our wealth of practical experience and industry knowledge, Sterling has evolved over many years to be the successful operation that it is today. We hold a unique position\n\nin the marketplace and pride ourselves on our successful professional partnerships with many Australian and international business and organisations.\n\nFor over 30 years Sterling Products has specialised in security screens that feature unique designs. Providing an effective deterrent against armed assault and offering peace of mind our anti-jump screens are strong, safe, durable and easy to install. Anti-jump screens are a cost effective solution to prevent offenders from jumping\n\na counter.\n\nSterling Products assures our clients integrity and aims to ensure they are always comfortable with their selections from the range at Sterling Products.\n\nIn response to demonstrated needs within the market, Sterling Products continuously seeks to develop and offer our clients, new products and ideas to assist them in supporting their operations. Sterling Products offers an all-rounded service from project management, to site audit, to conceptual design and drafting, to manufacture and fabrication, to installation and maintenance as well as storage facilities.\n\nUtilising our own team of in-house designers, project-managers/coordinators, fabricators, craftspeople and site installation teams with security wiring licenses, Sterling Products are resourced to successfully deliver on all of our clients architectural and cooperate projects, developments and fit-outs of virtually any size or complexity."},
  {section: "Mission", text: "Insert Description"},
  {section: "Vision", text: "Insert Description"},
  {section: "Values", text: "Insert Description"}
];

ReactDOM.render(
  <Page
    navbarItems={navbarItems}
    address={address}
    phone={phone}
    phonealt={phonealt}
    email={email}
    social={social}
    galleryImages={galleryImages}
    galleryDescriptions={galleryDescriptions}
    testimonialImages={testimonialImages}
    testimonialDescriptions={testimonialDescriptions}
    clientImages={clientImages}
    clientDescriptions={clientDescriptions}
    products={products}
    about={about}
  />,
document.getElementById('root'));
registerServiceWorker();
