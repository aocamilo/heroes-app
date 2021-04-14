import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  if (name === '') {
    return heroes;
  }

  name = name.toLowerCase();
  return heroes.filter(
    (hero) =>
      hero.superhero.toLowerCase().includes(name) ||
      hero.characters.toLowerCase().includes(name)
  );
};
