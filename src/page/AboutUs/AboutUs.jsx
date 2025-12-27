import React from 'react';
import { NavLink, Outlet } from "react-router";

const AboutUs = () => {
    return (
        <div className="bg-base-200 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-base-100 rounded-2xl shadow p-8">
        {/* Header */}
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-2'>About Us</h1>
        <p className="text-sm max-w-2xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="divider my-6"></div>

        {/* Tabs */}
        <div className="tabs tabs-bordered mb-6">
          <NavLink
            to={''}
            className={({ isActive }) =>
              `tab ${isActive ? "tab-active text-primary" : "tab"}`
          }
          >
            Story
          </NavLink>
          <NavLink to="mission"className={({ isActive }) =>
              `tab ${isActive ? "tab-active text-primary" : "tab"}`
          }>Mission</NavLink>
          <NavLink to="success"className={({ isActive }) =>
              `tab ${isActive ? "tab-active text-primary" : "tab"}`
          }>Success</NavLink>
          <NavLink to="team"className={({ isActive }) =>
              `tab ${isActive ? "tab-active text-primary" : "tab"}`
          }>Team & Others</NavLink>
        </div>

        {/* Content */}
        <div className="text-sm leading-7">
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default AboutUs;

// ---------- Story Component ----------
export const Story = () => (
  <>
    <p className="mb-4">
      We started with a simple promise — to make parcel delivery fast, reliable,
      and stress-free. Over the years, our commitment to real-time tracking,
      efficient logistics, and customer-first service has made us a trusted
      partner for thousands.
    </p>
    <p className="mb-4">
      Whether it’s a personal gift or a time-sensitive business delivery,
      we ensure it reaches its destination — on time, every time.
    </p>
    <p>
      Today, we continue to innovate and improve, keeping our customers
      at the center of everything we do.
    </p>
  </>
);

// ---------- Mission Component ----------
export const Mission = () => (
  <p>
    Our mission is to simplify logistics through technology, transparency,
    and dependable service, ensuring peace of mind for every delivery.
  </p>
);

// ---------- Success Component ----------
export const Success = () => (
  <p>
    With thousands of successful deliveries and growing trust nationwide,
    our success is measured by customer satisfaction and long-term partnerships.
  </p>
);

// ---------- Team Component ----------
export const Team = () => (
  <p>
    Our team consists of experienced logistics professionals, engineers,
    and support staff working together to deliver excellence every day.
  </p>
);
