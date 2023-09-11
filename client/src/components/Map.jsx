// import React, { useEffect, useRef, useState } from 'react';
// import * as tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import Globe from '../assets/marker.png';
// window.MAP_API_KEY = 'yaOl9KHd36aTsUhJHgScB3tflk02ulrQ';

// const Map = () => {
//     const mapElement = useRef();
//     const [map, setMap] = useState({});
//     const [markers] = useState([
//         { id: 1, longitude: 77.594566, latitude: 12.971599 },

//     ]);
//     const [searchLongitude, setSearchLongitude] = useState(''); // State for user input longitude
//     const [searchLatitude, setSearchLatitude] = useState(''); // State for user input latitude

//     const [selectedMarker, setSelectedMarker] = useState(null); // State to store the selected marker

//     useEffect(() => {
//         const mapInstance = tt.map({
//             key: window.MAP_API_KEY,
//             container: mapElement.current,
//             stylesVisibility: {
//                 trafficIncidents: true,
//                 trafficFlow: true,
//             },
//             center: [markers[0].longitude, markers[0].latitude], // Center the map on the first marker
//             zoom: 14,
//         });

//         setMap(mapInstance);

//         markers.forEach((markerData) => {
//             const popupOffset = {
//                 bottom: [0, -25],
//             };
//             const popup = new tt.Popup({ offset: popupOffset }).setHTML('You are Here!');
//             const markerElement = document.createElement('div');
//             markerElement.className = 'marker';

//             const markerImage = new Image();
//             markerImage.src = Globe;
//             markerImage.width = 30;
//             markerImage.height = 30;

//             markerElement.appendChild(markerImage);

//             const marker = new tt.Marker({
//                 draggable: false, // Disable marker dragging
//                 element: markerElement,
//             })
//                 .setLngLat([markerData.longitude, markerData.latitude])
//                 .addTo(mapInstance);

//             marker.setPopup(popup).togglePopup();

//             // Add click event listener to select the marker
//             marker.getElement().addEventListener('click', () => {
//                 setSelectedMarker(markerData);
//             });
//         });

//         return () => mapInstance.remove();
//     }, [markers]);

//     const handleSearch = () => {
//         // Parse user input coordinates and update the map's center and zoom
//         const newLongitude = parseFloat(searchLongitude);
//         const newLatitude = parseFloat(searchLatitude);

//         if (!isNaN(newLongitude) && !isNaN(newLatitude)) {
//             map.flyTo({ center: [newLongitude, newLatitude], zoom: 14 });
//         }
//     };

//     const handleFlyToMarker = () => {
//         const firstMarker = markers[0];
//         map.flyTo({ center: [firstMarker.longitude, firstMarker.latitude], zoom: 14 });
//     };

//     return (
//         <div className='Map' style={{ position: 'relative', width: '100%', height: '100vh' }}>
//             <div ref={mapElement} style={{ width: '100%', height: '100%' }}></div>
//             <div className='search-bar' style={{ position: 'absolute', top: '20px', left: '20px', background: 'white', padding: '10px', borderRadius: '5px' }}>
//                 <h1>Where To?</h1>
//                 {/* Input boxes for longitude and latitude */}
//                 <input
//                     type='text'
//                     id='longitude'
//                     className='longitude'
//                     placeholder='Longitude'
//                     value={searchLongitude}
//                     onChange={(e) => setSearchLongitude(e.target.value)}
//                 />
//                 <input
//                     type='text'
//                     id='latitude'
//                     className='latitude'
//                     placeholder='Latitude'
//                     value={searchLatitude}
//                     onChange={(e) => setSearchLatitude(e.target.value)}
//                 />
//                 <button style={{ margin: '5px', padding: '5px 10px' }} onClick={handleSearch}>Search</button>
//                 <button style={{ margin: '5px', padding: '5px 10px' }} onClick={handleFlyToMarker}>Fly Back</button>
//             </div>
//         </div>
//     );
// };

// export default Map;

import React, { useEffect, useRef, useState } from 'react';
import * as tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import Globe from '../assets/marker.png';
window.MAP_API_KEY = 'yaOl9KHd36aTsUhJHgScB3tflk02ulrQ';

const Map = () => {
    const mapElement = useRef();
    const [map, setMap] = useState({});
    const [markers, setMarkers] = useState([
        { id: 1, longitude: 77.594566, latitude: 12.971599 }
    ]);
    const [newMarkerLongitude, setNewMarkerLongitude] = useState('');
    const [newMarkerLatitude, setNewMarkerLatitude] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        const mapInstance = tt.map({
            key: window.MAP_API_KEY,
            container: mapElement.current,
            stylesVisibility: {
                trafficIncidents: true,
                trafficFlow: true,
            },
            center: [markers[0].longitude, markers[0].latitude],
            zoom: 14,
        });

        setMap(mapInstance);

        markers.forEach((markerData) => {
            const popupOffset = {
                bottom: [0, -25],
            };
            const markerElement = document.createElement('div');
            markerElement.className = 'marker';

            const markerImage = new Image();
            markerImage.src = Globe;
            markerImage.width = 30;
            markerImage.height = 30;

            markerElement.appendChild(markerImage);

            const marker = new tt.Marker({
                draggable: false,
                element: markerElement,
            })
                .setLngLat([markerData.longitude, markerData.latitude])
                .addTo(mapInstance);

            const popupMessage = markerData.popupMessage || 'You are Here!';
            const popup = new tt.Popup({ offset: popupOffset }).setHTML(popupMessage);
            marker.setPopup(popup).togglePopup();

            marker.getElement().addEventListener('click', () => {
                setSelectedMarker(markerData);
            });
        });

        return () => mapInstance.remove();
    }, [markers]);

    const handleFlyToMarker = () => {
        const firstMarker = markers[0];
        map.flyTo({ center: [firstMarker.longitude, firstMarker.latitude], zoom: 14 });
    };

    const handleAddMarker = () => {
        const newLongitude = parseFloat(newMarkerLongitude);
        const newLatitude = parseFloat(newMarkerLatitude);

        if (!isNaN(newLongitude) && !isNaN(newLatitude)) {
            const newMarker = {
                id: Date.now(),
                longitude: newLongitude,
                latitude: newLatitude,
                popupMessage: 'You want to go here',
            };
            setMarkers([...markers, newMarker]);

            // Calculate and set the distance
            const initialMarker = markers[0];
            const newMarkerDistance = calculateDistance(
                initialMarker.latitude,
                initialMarker.longitude,
                newLatitude,
                newLongitude
            );
            setDistance(newMarkerDistance);

            map.flyTo({ center: [newLongitude, newLatitude], zoom: 14 });

            // Clear input fields
            setNewMarkerLongitude('');
            setNewMarkerLatitude('');
        }
    };

    
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance.toFixed(2); // Return distance rounded to 2 decimal places
    };

    return (
        <div className='Map' style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div ref={mapElement} style={{ width: '100%', height: '100%' }}></div>
            <div className='search-bar' style={{ position: 'absolute', top: '20px', left: '20px', background: 'white', padding: '10px', borderRadius: '5px' }}>
                <h1>Where To?</h1>
                <input
                    type='text'
                    id='newLongitude'
                    className='new-longitude'
                    placeholder='New Marker Longitude'
                    value={newMarkerLongitude}
                    onChange={(e) => setNewMarkerLongitude(e.target.value)}
                />
                <input
                    type='text'
                    id='newLatitude'
                    className='new-latitude'
                    placeholder='New Marker Latitude'
                    value={newMarkerLatitude}
                    onChange={(e) => setNewMarkerLatitude(e.target.value)}
                />
                <button style={{ margin: '5px', padding: '5px 10px' }} onClick={handleAddMarker}>Add New Marker</button>
                <button style={{ margin: '5px', padding: '5px 10px' }} onClick={handleFlyToMarker}>Fly Back</button>
                {distance !== null && <p>Distance: {distance} km</p>}
            </div>
        </div>
    );
};

export default Map;
