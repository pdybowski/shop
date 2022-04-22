import { Welcome } from '../../shared/welcome/Welcome';
import { MainPageCarousel } from '../../mainPageCarousel/mainPageCarousel';

export const MainPage = () => {
    return (
        <main>
            <Welcome />
            <MainPageCarousel />
        </main>
    );
};
