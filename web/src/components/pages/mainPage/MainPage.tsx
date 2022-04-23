import { Welcome } from './components/welcome/Welcome';
import { MainPageCarousel } from './components/mainPageCarousel/MainPageCarousel';
import BestComponent from '../../shared/bestComponent/BestComponent';

export const MainPage = () => {
    return (
        <main>
            <Welcome />
            <MainPageCarousel />
            <BestComponent />
        </main>
    );
};
