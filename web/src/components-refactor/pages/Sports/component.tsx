import store from '../../../services/store';

import { SportItem } from './SportItem';

import './style.css';

export const SportsPage = () => {
    const sports = store.getState().pageResource.sports;

    return (
        <div className="sportItems__container">
            {sports.map((sport) => {
                return <SportItem key={sport.name} sportType={sport.name} />;
            })}
        </div>
    );
};
