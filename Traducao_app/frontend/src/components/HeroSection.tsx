import React from 'react'
import styles from './hero.module.css'

const HeroSection: React.FC = () => {
    return (

        < div className={`${styles.heroContainer} heroContainer`} style={{ height: 600 }} >
            <div className="row">
                <div className="col-12">
                    <div className={`${styles.hero} row Hero w-100`}>
                        <h1 className="display-1 fw-bold pb-4">Traduções Profissionais</h1>
                        <p className=" lead"><strong>Oferecemos serviços de tradução com precisão e agilidade, <br />
                            garantindo que cada palavra seja fiel ao seu significado original.</strong></p>
                    </div >
                </div>
            </div>
        </div >
    )
}

export default HeroSection;


