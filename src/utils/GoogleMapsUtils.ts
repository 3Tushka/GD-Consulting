/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const loadMapApi = () => {
    const mapsURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCGaR3_Lb24KYEeG1kXkNTL6SyH2SRGSC8&libraries=places&language=ua&y=quarterly`;

    const scripts = document.getElementsByTagName('script');

    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(mapsURL) === 0) {
            return scripts[i];
        }
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;

    window.document.body.appendChild(googleMapScript);

    return googleMapScript;

};