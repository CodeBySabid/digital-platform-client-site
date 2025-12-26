import React from 'react';
import serviceimage from '../../../assets/Log & icon/service.png'

const Services = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section className="bg-[#073b3f] rounded-3xl py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12 text-white">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="max-w-2xl mx-auto text-sm opacity-80">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-white text-center p-6 shadow-md">
          <div className="avatar mx-auto mb-4">
            <div className="w-14 rounded-full bg-gray-100">
                <img src={serviceimage} alt="serviceimage" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-black">
            Express & Standard Delivery
          </h3>
          <p className="text-sm text-gray-500">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi.
          </p>
        </div>

        {/* Card 2 (Highlighted) */}
        <div className="card bg-lime-300 text-center p-6 shadow-md">
          <div className="avatar mx-auto mb-4">
            <div className="w-14 rounded-full bg-lime-200">
                <img src={serviceimage} alt="serviceimage" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-black">
            Nationwide Delivery
          </h3>
          <p className="text-sm text-gray-700">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-white text-center p-6 shadow-md">
          <div className="avatar mx-auto mb-4">
            <div className="w-14 rounded-full bg-gray-100">
                <img src={serviceimage} alt="serviceimage" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-black">
            Fulfillment Solution
          </h3>
          <p className="text-sm text-gray-500">
            Customized service with inventory management, order processing,
            packaging and after sales support.
          </p>
        </div>

        {/* Card 4 */}
        <div className="card bg-white text-center p-6 shadow-md">
          <div className="avatar mx-auto mb-4">
            <div className="w-14 rounded-full bg-gray-100">
                <img src={serviceimage} alt="serviceimage" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-black">
            Cash on Home Delivery
          </h3>
          <p className="text-sm text-gray-500">
            100% cash on delivery anywhere in Bangladesh with guaranteed product safety.
          </p>
        </div>

        {/* Card 5 */}
        <div className="card bg-white text-center p-6 shadow-md">
          <div className="avatar mx-auto mb-4">
            <div className="w-14 rounded-full bg-gray-100">
                <img src={serviceimage} alt="serviceimage" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-black">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="text-sm text-gray-500">
            Customized corporate services including warehouse and inventory support.
          </p>
        </div>

        {/* Card 6 */}
        <div className="card bg-white text-center p-6 shadow-md">
          <div className="avatar mx-auto mb-4">
            <div className="w-14 rounded-full bg-gray-100">
                <img src={serviceimage} alt="serviceimage" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-black">
            Parcel Return
          </h3>
          <p className="text-sm text-gray-500">
            Easy return and exchange system through our reverse logistics facility.
          </p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Services;
