import { useParams } from 'react-router-dom';

import store from '../../../services/store';
import { SingleProductItem } from './SingleProductItem';

export const SingleProductPage = () => {
    const products = store.getState().pageResource.products;

    const { id } = useParams();

    const product = products.find((product) => {
        return product._id === id;
    });

    return product ? <SingleProductItem {...product} /> : <div>Product not found</div>;
};
