import React, { useContext } from 'react';
import { CartContext } from '../../contexts';
import './style.css';
import { Brand, Product, ProductCategory, ProductType, SportType } from '../../interfaces';

export const Cart = () => {
    const { cart, addItem } = useContext(CartContext);

    const SampleItem: Product = {
        name: 'cos',
        price: 453,
        stars: 3,
        description: 'yolo',
        size: '42',
        sportType: SportType.volleyball,
        productCategory: ProductCategory.child,
        productType: ProductType.other,
        brand: Brand.adidas,
    };

    return (
        <div>
            <div className="cart">
                <div className="cart__items">
                    <div>
                        <a className="item" href={''}>
                            <img className="item__image" alt={SampleItem.name} />
                            <div className="item__price">
                                <p>{SampleItem.price} zł</p>
                            </div>
                            <div className="item__title">
                                <p>{SampleItem.name}</p>
                            </div>
                            {SampleItem.stars && <div className="item__stars" />}
                        </a>
                    </div>
                </div>
                <div className="cart__summary" />
            </div>

            <div>
                {SampleItem.name}
                <button onClick={() => addItem(SampleItem)}>plus</button>
            </div>
            <div>
                {cart.map((item, i) => (
                    <div>
                        <div key={i}>{item.name}</div>
                        <button onClick={() => addItem(item)}>plus</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
