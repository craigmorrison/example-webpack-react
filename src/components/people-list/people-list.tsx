/* eslint-disable camelcase */
import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import {
  sectionHeading,
  peopleHeading,
  peopleItem,
  peopleList,
  definitionList,
  defintionListItem,
  defintionListKey,
  defintionListValue
} from './people-list.css';

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
      <h2 className={sectionHeading}>People</h2>
      <ul className={peopleList}>
        {data?.results.map((person) => (
          <li key={person.name} className={peopleItem}>
            <h3 className={peopleHeading}>{person.name}</h3>
            <dl className={definitionList}>
              <div className={defintionListItem}>
                <dt className={defintionListKey}>Height:</dt>
                <dl className={defintionListValue}>{person.height}</dl>
              </div>
              <div className={defintionListItem}>
                <dt className={defintionListKey}>Mass:</dt>
                <dl className={defintionListValue}>{person.mass}</dl>
              </div>
              <div className={defintionListItem}>
                <dt className={defintionListKey}>Hair color:</dt>
                <dl className={defintionListValue}>{person.hair_color}</dl>
              </div>
              <div className={defintionListItem}>
                <dt className={defintionListKey}>Eye color:</dt>
                <dl className={defintionListValue}>{person.eye_color}</dl>
              </div>
              <div className={defintionListItem}>
                <dt className={defintionListKey}>Skin color:</dt>
                <dl className={defintionListValue}>{person.skin_color}</dl>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PeopleList;
