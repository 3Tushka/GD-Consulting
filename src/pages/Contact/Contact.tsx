import { useState, useEffect } from 'react';

import Map from '../../components/Map/Map';
import { Navbar } from '../../components/Navbar/Navbar';
import { ContactInfo } from '../../containers/ContactInfo/ContactInfo';
import { Footer } from '../../containers/Footer/Footer';
import { SocalMedia } from '../../containers/SocialMedia/SocalMedia';
import { loadMapApi } from '../../utils/GoogleMapsUtils';

import './contact.scss';

export const Contact = () => {

    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const googleMapScript = loadMapApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        })

    }, []);

    return (
        <>
            <Navbar />
            <ContactInfo />

            {/* map component */}

            {scriptLoaded && (
                <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
            )}

            <SocalMedia />
            <Footer />
        </>
    )
}
