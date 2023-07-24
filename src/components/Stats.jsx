import React from 'react';

const Stats = () => {
  const statsData = [
    {
      label: 'Total supply',
      value: '120,908,592',
    },
    {
      label: 'Market cap',
      value: '$340 thousand',
    },
    {
      label: 'Burned to date',
      value: '', 
    },
    {
      label: 'Total supply',
      value: '14.25/block',
    },
  ];

  return (
    <div className='flex justify-between items-center'>
      {statsData.map((stat, index) => (
        <div className='w-[24.75%]' key={index}>
          <span className='block mb-4 font-bold text-[18px]'>{stat.label}</span>
          {stat.value ? (
            <span className='text-[18px] fontKaint block'>{stat.value}</span>
          ) : (
            <span className='text-[18px] fontKaint block max-w-[8rem] bg-[#474747] rounded-[4px]'>&nbsp;</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stats;
