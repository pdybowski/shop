import { Welcome } from './components/welcome/Welcome';
import { MainPageCarousel } from './components/mainPageCarousel/MainPageCarousel';

export const MainPage = () => {
    return (
        <main>
            <Welcome />
            <MainPageCarousel />
        </main>
    );
};
