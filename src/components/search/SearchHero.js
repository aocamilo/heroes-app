import React from 'react';

export const SearchHero = ({ filter, value }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='search...'
        name='search'
        autoComplete='off'
        value={value}
        onChange={(e) => filter(e.target.value)}
        className='form-material mb-3'
      />
    </div>
  );
};
