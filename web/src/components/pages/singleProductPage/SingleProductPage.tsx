import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PageResourceContext } from '../../../contexts';
import { SingleProductComponent } from './components/singleProductComponent/SingleProductComponent';

export const SingleProductPage = () => {
    const {
        pageResource: { products },
    } = useContext(PageResourceContext);

    const { id } = useParams();

    const product = products.find((product) => {
        return product._id === id;
    });

    return product ? <SingleProductComponent {...product} /> : <div>Product not found</div>;
};
