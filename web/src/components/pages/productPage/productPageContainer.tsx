import { ProductPageComponent } from './productPageComponent';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PageResourceContext } from '../../../contexts';

export const ProductPageContainer = () => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    const { id } = useParams();

    const product = products.filter((product) => {
        return product._id === id;
    });

    return <ProductPageComponent {...product[0]} />;
};
