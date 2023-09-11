import { InfoCard } from './InfoCard';
import { OrdersHistory } from './OrdersHistory';
import { useState } from 'react';

export function ProfileSectionsList() {
  const [activeSection, setActiveSection] = useState('info');

  return (
    <div className='w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto lg:col-start-2 lg:row-start-2'>
      <div className='flex text-start text-neutral-300 mb-10'>
        <button
          onClick={() => setActiveSection('info')}
          className={`flex-1 pb-2 border-b-2 ${
            activeSection === 'info'
              ? 'border-accent-300'
              : 'border-neutral-500'
          } transition-opacity hover:opacity-50 cursor-pointer`}>
          Info
        </button>
        <button
          onClick={() => setActiveSection('orders')}
          className={`flex-1 pb-2 border-b-2 ${
            activeSection === 'orders'
              ? 'border-accent-300'
              : 'border-neutral-500'
          } transition-opacity hover:opacity-50 cursor-pointer`}>
          Orders
        </button>
      </div>

      {activeSection === 'info' ? <InfoCard /> : <OrdersHistory />}
    </div>
  );
}
