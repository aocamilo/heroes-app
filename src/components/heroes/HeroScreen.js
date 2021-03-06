import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to='/' />;
  }

  const {
    alter_ego,
    characters,
    first_appearance,
    id,
    publisher,
    superhero,
  } = hero;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    }

    history.goBack();
  };

  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b> Alter ego: </b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b> Publisher: </b> {publisher}
          </li>
          <li className='list-group-item'>
            <b> First Apperance: </b> {first_appearance}
          </li>
        </ul>

        <h5 className='mt-5'> Characters </h5>
        <p> {characters} </p>

        <button className='btn btn-outline-info' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
