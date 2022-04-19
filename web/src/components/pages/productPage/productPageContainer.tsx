import { ProductPageComponent } from './ProductPageComponent';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PageResourceContext } from '../../../contexts';

export const ProductPageContainer = () => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    const { id } = useParams();

    const product = products.find((product) => {
        return product._id === id;
    });

    return product ? <ProductPageComponent {...product} /> : <div>Product not found</div>;
};
