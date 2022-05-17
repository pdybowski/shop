import { CURRENCY_TYPE } from '../../../constants';
import { Product } from '../../../models';
import { selectSubtotalAmount, selectItemsNumber } from '../../../services/selectors/cartSelectors';
import store from '../../../services/store';
import { Button, BtnMode } from '../../shared';
import { CartItem } from './CartItem';

export const CartPage = () => {
    const cartStore = store.getState().cart;
    const subtotalAmount = selectSubtotalAmount(cartStore);
    const itemsNumber = selectItemsNumber(cartStore);

    return (
        <main>
            <div className="cart">
                <div className="cart__list">
                    {itemsNumber <= 0 && <div>Cart is empty!</div>}
                    <ul>
                        {cartStore.cart.map((cartItem: { product: Product; quantity: number }) => (
                            <CartItem key={cartItem.product['_id']} cartItem={cartItem} />
                        ))}
                    </ul>
                </div>
                {cartStore.cart.length > 0 && (
                    <div className="cart__checkout">
                        <div className="cart__checkout-total">
                            <div>
                                <div className="cart__checkout-total-subtotal">Sub-Total</div>
                                <div className="cart__checkout-total-items">
                                    {itemsNumber} items
                                </div>
                            </div>
                            <div className="cart__checkout-total-amount">
                                {CURRENCY_TYPE}
                                {subtotalAmount}
                            </div>
                        </div>
                        <div>
                            <Button type="button" mode={BtnMode.PRIMARYBIG}>
                                Go to payment
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};
