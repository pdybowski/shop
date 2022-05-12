import { useParams } from 'react-router-dom';
import { SingleProductComponent } from './components/singleProductComponent/SingleProductComponent';
import store from '../../../services/store';

export const SingleProductPage = () => {
    const products = store.getState().pageResource.products;

    const { id } = useParams();

    const product = products.find((product) => {
        return product._id === id;
    });

    return product ? <SingleProductComponent {...product} /> : <div>Product not found</div>;
};
