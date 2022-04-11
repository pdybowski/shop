import React, { useContext } from 'react';
import { CartContext } from '../../contexts';
import { ProductItemType } from '../shared';
import './style.css';

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
            <div className="cart">
                <div className="cart__items">
                    <div>
                        <a className="item" href={''}>
                            <img className="item__image" alt={SampleItem.title} />
                            <div className="item__price">
                                <p>{SampleItem.price} zł</p>
                            </div>
                            <div className="item__title">
                                <p>{SampleItem.title}</p>
                            </div>
                            {SampleItem.stars && <div className='item__stars'/>}
                        </a>
                    </div>
                </div>
                <div className="cart__summary"></div>
            </div>

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
