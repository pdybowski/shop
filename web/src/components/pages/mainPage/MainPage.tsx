import { Welcome } from './components/welcome/Welcome';
import { MainPageCarousel } from './components/mainPageCarousel/MainPageCarousel';
import { BestComponent } from './components/bestComponent/BestComponent';
import { Info } from './components/info/Info';

export const MainPage = () => {
    return (
        <main>
            <Welcome />
            <MainPageCarousel />
            <BestComponent />
            <Info />
        </main>
    );
};
