import React, { Suspense, ReactElement, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './elements/loading';

// Define lazy-loaded components
const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/about-us'));
const Blog = lazy(() => import('./pages/blog'));
const ContactUs = lazy(() => import('./pages/contact-us'));
const Services = lazy(() => import('./pages/services'));

const HRoutes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Suspense>
  );
};

export default HRoutes;
