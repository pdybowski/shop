import Carousel from '../shared/carousel/Carousel';
import './style.css';

export const MainPageCarousel = () => {
    const img_mockup = [
        <div className="carousel__item--container">
            <img
                className="carousel__img"
                alt=""
                src={
                    'https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000200985664_06_mf_1.jpg'
                }
            />
            <div className="carousel__txt--container">
                <div className="carousel__txt">WOMAN SPORT SHOES -10% OFF</div>
            </div>
        </div>,
        <div className="carousel__item--container">
            <img
                className="carousel__img"
                alt=""
                src={
                    'https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000208119443_06_wj_2.jpg'
                }
            />
            <div className="carousel__txt--container">
                <div className="carousel__txt">WOMAN SPORT SHOES -10% OFF</div>
            </div>
        </div>,
        <div className="carousel__item--container">
            <img
                className="carousel__img"
                alt=""
                src={
                    'https://www.eobuwie.com.pl/media/catalog/product/cache/image/650x650/0/0/0000209026351_03_bs_kopia.jpg'
                }
            />
            <div className="carousel__txt--container">
                <div className="carousel__txt">WOMAN SPORT SHOES -10% OFF</div>
            </div>
        </div>,
    ];

    return <Carousel>{img_mockup}</Carousel>;
};
