import React, { useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const position = [23.6850, 90.3563];
    const mapRef = useRef(null);
    const serviceCenters = useLoaderData();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const location = searchTerm;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
        if(district){
            const coord = [district.latitude, district.longitude]
            console.log(coord);
            mapRef.current.flyTo(coord, 14)
        }
    };
    return (
        <div className='py-20 px-28 mx-auto mt-5 max-md:py-10 max-2xl:px-10 max-sm:text-center max-sm:px-4 max-w-375 bg-base-100 rounded-2xl'>
            <h1 className='text-3xl font-bold max-sm:text-xl'>We are available in 64 districts</h1>
            {/* Search field */}
            <div className="max-w-142.75 pt-6 ">
                <form onSubmit={handleSearch} className="flex max-w-2xl shadow-xl rounded-full relative">
                    <div className="input w-full border-none rounded-full pl-6 pr-0 outline-none">
                        <IoSearch className="text-2xl mr-4 max-sm:mr-1" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="grow bg-transparent text-lg pr-45 max-sm:pr-22 focus:outline-none border-none"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn absolute right-0 text-xl font-bold rounded-full  
                     bg-[#b0f367] text-gray-800 border-none
                     hover:bg-[#99db5a] transition duration-200
                     w-32 max-sm:w-20 sm:w-40"
                    >
                        Search
                    </button>
                </form>
            </div>
            <hr className='max-w-375 border-gray-300 my-8' />
            <h1 className='my-12 max-sm:my-4 text-2xl max-md:text-xl max-sm:text-[16px]'>We deliver almost all over Bangladesh</h1>
            <div className='max-w-320.5 h-200 border'>
                <MapContainer className='w-full h-full' center={position} zoom={8} scrollWheelZoom={false} ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                        <Popup>
                            <strong>{center.district
}</strong> <br /> Service Area: {center.covered_area
.join(', ')}.
                        </Popup>
                    </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;