import { ReactElement } from 'react';
import { useQuery } from 'react-query';

/* eslint-disable camelcase */
type swPerson = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};
/* eslint-enable camelcase */

type swPersonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: swPerson[];
};

function PeopleList(): ReactElement {
  const { isLoading, error, data } = useQuery<swPersonList, Error>(
    'repoData',
    () => fetch('https://swapi.dev/api/people').then((res) => res.json())
  );

  if (isLoading) {
    return <>{'Loading...'}</>;
  }

  if (error) {
    return <>{`An error has occurred: ${error}`}</>;
  }

  return (
    <>
      <h2>People</h2>
      <ul>
        {data &&
          data.results.map((person) => (
            <li key={person.name}>
              <h3>{person.name}</h3>
              <dl>
                <div>
                  <dt>Height</dt>
                  <dl>{person.height}</dl>
                </div>
                <div>
                  <dt>Mass</dt>
                  <dl>{person.mass}</dl>
                </div>
              </dl>
            </li>
          ))}
      </ul>
    </>
  );
}

export default PeopleList;
