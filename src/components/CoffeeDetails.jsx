import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    // console.log(coffee);
    
    return (
         <section className="py-12 px-4 md:px-10">
      <Link
        to="/"
        className="text-lg text-gray-700 hover:text-black flex items-center gap-2 mb-6"
      >
        <span className="text-xl">←</span> Back to home
      </Link>

      <div className="bg-[#f7f6f3] p-6 md:p-10 rounded-lg shadow-md flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Image */}
        <div className="w-[220px] h-auto">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Details */}
        <div className="space-y-3 text-gray-700">
          <h2 className="text-2xl font-semibold text-center md:text-left text-brown-700 font-cursive">
            Niceties
          </h2>
          <p><strong>Name:</strong> {coffee.name}</p>
          <p><strong>Price:</strong> {coffee.price} $</p>
          <p><strong>Supplier:</strong> {coffee.supplier}</p>
          <p><strong>Taste:</strong> {coffee.taste}</p>
          <p><strong>Quantity:</strong> {coffee.quantity}</p>
          <p><strong>Details:</strong> {coffee.details}</p>
        </div>
      </div>
    </section>
    );
};

export default CoffeeDetails;