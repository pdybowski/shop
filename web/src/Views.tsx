import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const Views = () => {
    return (
        <Routes>
            {routes.map((route: {}) => (
                <Route {...route} /> // eslint-disable-line react/jsx-key
            ))}
        </Routes>
    );
};

export default Views;
