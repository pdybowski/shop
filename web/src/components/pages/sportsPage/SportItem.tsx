import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageResourceContext } from '../../../contexts';
import {
    MdOutlineSportsSoccer,
    MdOutlineSportsBasketball,
    MdSportsVolleyball,
    MdOutlineSportsTennis,
    MdOutlineSportsHandball,
    MdEmojiPeople,
} from 'react-icons/md';
import { BiRun, BiSwim, BiCycling } from 'react-icons/bi';
import './style.css';
import { Button } from '../../shared';
import { ButtonMode } from '../../shared/button/interfaces';
import { RoutePaths } from '../../../models';

interface SportItemProps {
    sportType: String;
}

const sportItemImg = (param: String) => {
    switch (param) {
        case 'Volleyball':
            return <MdSportsVolleyball className="sportItem__icon" />;
        case 'Running':
            return <BiRun className="sportItem__icon" />;
        case 'Basketball':
            return <MdOutlineSportsBasketball className="sportItem__icon" />;
        case 'Football':
            return <MdOutlineSportsSoccer className="sportItem__icon" />;
        case 'Swimming':
            return <BiSwim className="sportItem__icon" />;
        case 'Tennis':
            return <MdOutlineSportsTennis className="sportItem__icon" />;
        case 'Cycling':
            return <BiCycling className="sportItem__icon" />;
        case 'Other':
            return <MdOutlineSportsHandball className="sportItem__icon" />;
        default:
            return <MdEmojiPeople className="sportItem__icon" />;
    }
};

export const SportItem = ({ sportType }: SportItemProps) => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    const sportTypeArray = products.filter((element) => {
        return element.sportType === sportType;
    });

    const numberOfElements = sportTypeArray.length;

    return (
        <div className="sportItem__container">
            <div className="sportItem__element">
                <div>{sportItemImg(sportType)}</div>
                <div className="sportItem__name">{sportType}</div>
                <div className="sportItem__number">Products in category: {numberOfElements}</div>
                <Link to={`${RoutePaths.Products}?sportType=${sportType}`}>
                    <Button type="button" mode={ButtonMode.SECONDARY} label="VIEW" />
                </Link>
            </div>
        </div>
    );
};
