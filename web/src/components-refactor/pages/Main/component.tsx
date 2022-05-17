import { Welcome } from './Welcome';
import { MainCarousel } from './MainCarousel';
import { Bests } from './Bests';
import { Info } from './Info';

export const MainPage = () => {
    return (
        <main>
            <Welcome />
            <MainCarousel />
            <Bests />
            <Info />
        </main>
    );
};
