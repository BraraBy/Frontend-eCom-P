import React from 'react';
import {Header , Footer , Banner , Product , Category } from './components/ui';


const App = () => {
  return (
    <div>
      <div className="flex justify-center h-auto overflow-y-auto">
        <div className="bg-gray-100 min-h-screen w-screen overflow-x-hidden">
          <Header />
            <div className='h-[500px] rounded-lg'>
              <Banner />
            </div>
          <div className="px-6 py-6 space-y-6 w-full">
            <Category />
          </div>
          <div className='px-10 py-10 space-y-6 h-[600px]'>
            <Product />
          </div>
          <div>
          <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
