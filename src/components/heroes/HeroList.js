import React, { useMemo, useState } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { SearchHero } from '../search/SearchHero';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  const [heroFilter, setHeroFilter] = useState('');

  // const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <SearchHero filter={setHeroFilter} value={heroFilter} />
      <div className='row row-cols-1 row-cols-md-3 g-4 animate__animated animate__pulse'>
        {heroes
          .filter(
            ({ superhero }) =>
              superhero.toLowerCase().includes(heroFilter) ||
              heroFilter === null
          )
          .map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
      </div>
    </>
  );
};
