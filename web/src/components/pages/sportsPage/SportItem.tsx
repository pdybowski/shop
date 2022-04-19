import './style.css';
import { MdOutlineSportsSoccer, MdOutlineSportsBasketball } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface SportItemProps {
    sportType: String;
}

const sportItemImg = (param: any) => {
    switch (param) {
        case 'Volleyball':
            return 'bar';
        case 'Running':
            return 'bar';
        case 'Basketball':
            return <MdOutlineSportsBasketball />;
        case 'Football':
            return <MdOutlineSportsSoccer />;
        case 'Swimming':
            return 'bar';
        case 'Tennis':
            return 'bar';
        case 'Cycling':
            return 'bar';
        case 'Other':
            return 'bar';
        default:
            return 'foo';
    }
};

export const SportItem = ({ sportType }: SportItemProps) => {
    console.log(sportType);
    return (
        <div className="sportItem__container">
            <div className="sportItem">
                <div>{sportItemImg(sportType)}</div>
                <div className="sportItem__name" id={'my__txt'}>
                    {sportType}
                </div>
                <div className="sportItem__number">Elements in category:</div>
                <Link to={`/product?sportType=${sportType}`}>
                    <button className="sportItem__button">VIEW</button>
                </Link>
            </div>
        </div>
    );
};
