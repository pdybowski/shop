import { SportType } from '../../../interfaces';
import { SportItem } from './SportItem';
import './style.css';

export const SportsPage = () => {
    const sports: string[] = Object.values(SportType);

    return (
        <div className="sportItems__container">
            {sports.map((sport) => {
                return <SportItem sportType={sport} />;
            })}
        </div>
    );
};
