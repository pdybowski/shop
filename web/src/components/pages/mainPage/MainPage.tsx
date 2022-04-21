import BestComponent from '../../shared/bestComponent/BestComponent';
import { Welcome } from '../../shared/welcome/Welcome';
import { MainPageCarousel } from '../../mainPageCarousel/MainPageCarousel';

export const MainPage = () => {
    return (
        <main>
            <Welcome />
            <BestComponent />
            <MainPageCarousel />
        </main>
    );
};
