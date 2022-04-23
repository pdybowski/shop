import { useContext } from 'react';
import { PageResourceContext } from '../../../contexts';
import { SportItem } from './SportItem';
import './style.css';

export const SportsPage = () => {
    const {
        pageResource: { sports },
    } = useContext(PageResourceContext);

    return (
        <div className="sportItems__container">
            {sports.map((sport) => {
                return <SportItem sportType={sport.name} />;
            })}
        </div>
    );
};
