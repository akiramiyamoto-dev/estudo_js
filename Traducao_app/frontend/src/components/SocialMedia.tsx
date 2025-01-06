import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

const SocialMedia: React.FC = () => {
    return (
        <>
            <div className="container socialMediaSection">
                <div className="row">
                    <div className="col-12 p-5">
                        <div className="socialMedia">
                            <h2 className=" socialTitle text-center p-3">Siga-nos !</h2>
                            <ul className="social-media-list">
                                <li className="facebook">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                                    </a>
                                </li>
                                <li className="pinterest">
                                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faPinterest} size="lg" />
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                                    </a>
                                </li>

                            </ul>
                        </div>



                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialMedia;
