import React from 'react'


const title = "Sobre Action Sport";
const desc = "Una empresa familiar con mas de 20 años vendiendo indumentaria deportiva de primeras marcas.";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: ' Santa Fe, Argentina.',
    },
    {
        iconName: 'icofont-phone',
        text: ' +549 342000000',
    },
    {
        iconName: 'icofont-envelope',
        text: ' info@actionsport.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
]


const quickList = [
    {
        text: 'Politicas de la empresa',
        link: '#',
    },
    {
        text: 'Terminos y condiciones',
        link: '#',
    },
]

const Footer = () => {
  return <footer className="style-2">
    <div className="footer-top dark-view padding-tb">
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="footer-item our-address">
                    <div className="footer-inner">
                        <div className="footer-content">
                            <div className="title">
                                <h4>{title}</h4>
                            </div>
                            <div className="content">
                                <p>{desc}</p>
                                <ul className="lab-ul office-address">
                                    {
                                        addressList.map((val, i) =>(
                                            <li key={i}>
                                                <i className={val.iconName}>{val.text}</i>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <ul className="lab-ul social-icons">
                                    {
                                        socialList.map((val, i) =>(
                                            <li key={i}>
                                                <a href="#" className={val.className}><i className={val.iconName}>{val.text}</i></a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                

                
            </div>
        </div>
    </div>

  </footer>;
};

export default Footer