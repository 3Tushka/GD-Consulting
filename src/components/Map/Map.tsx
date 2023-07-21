import './map.scss';

import React, { useState, useEffect, useRef } from 'react';

interface IMap {
    mapType?: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {

    const reference = useRef<HTMLDivElement>(null);

    const [map, setMap] = useState<GoogleMap>();

    const startMap = (): void => {
        if (!map) {
            defaultMapStart();
        }
    };
    useEffect(startMap, [map]);

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (reference.current) {
            setMap(
                new google.maps.Map(reference.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: mapTypeControl,
                    zoomControl: true,
                    mapTypeId: mapType,
                })
            );
        }
    };

    const defaultMapStart = (): void => {
        const defaultAddress = new google.maps.LatLng(65.166, 13.425);
        initMap(9, defaultAddress);
    };

    return (
        <>
            <div className="map">
                <div ref={reference} className="map__container">
                </div>
            </div>
        </>
    )
};

export default Map;