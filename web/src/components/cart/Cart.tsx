import React, { useContext } from 'react';
import { CartContext } from '../../contexts';
import { ProductItemType } from '../shared';

export const Cart = () => {
    const { cart, addItem } = useContext(CartContext);

    const SampleItem: ProductItemType = {
        title: 'cos',
        // url?: string,
        price: 453,
        stars: 3,
    };

    return (
        <div>
            {/*<a className="item" href={''}>*/}
            {/*    <img className="item__image" src={url} alt={title} />*/}
            {/*    <div className="item__price">*/}
            {/*        <p>{price} zł</p>*/}
            {/*    </div>*/}
            {/*    <div className="item__title">*/}
            {/*        <p>{title}</p>*/}
            {/*    </div>*/}
            {/*    {stars && <div className="item__stars">{showStars(stars)}</div>}*/}
            {/*</a>*/}

            <div>
                {SampleItem.title}
                <button onClick={() => addItem(SampleItem)}>plus</button>
            </div>
            <div>
                {cart.map((item, i) => (
                    <div>
                        <div key={i}>{item.title}</div>
                        <button onClick={() => addItem(item)}>plus</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
