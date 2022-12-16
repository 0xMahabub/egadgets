import { FC, useEffect, useState } from 'react';
import { useCartStore } from '../store';

export const CartPage: FC = () => {
  const [cart, qUp, qDn, rm] = useCartStore((s) => [
    s.items,
    s.increQ,
    s.decreQ,
    s.remove,
  ]);

  // cart price info
  const [total, setToal] = useState({ total_p: 0, subTotal: 0, vat: 0.15 }); // 15% vat
  useEffect(() => {
    let totalPrice = 0;
    let subTotal = 0;
    cart.map((it) => {
      totalPrice = totalPrice + it.price * it.qty;
    });
    subTotal = totalPrice;
    totalPrice = totalPrice + totalPrice * total.vat;
    setToal({
      ...total,
      total_p: Math.round(totalPrice),
      subTotal: Math.round(subTotal),
    });
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <h2>You have {cart.length} items in your cart!</h2>
          <br />
          <div className='cart_items'>
            {cart.map((c, i) => (
              <div key={i} className='cart_item'>
                <div className='cart_item_photo'>
                  <img src={c.photo} alt={c.name} />
                </div>
                <div className='cart_item_info'>
                  <p className='price'>
                    price: <span>${c.price}</span>
                  </p>
                  <br />
                  <span className='cart_item_prop'>
                    {Object.entries(c.prop).map((it, i) => (
                      <span key={i}>
                        <small key={i}>
                          {it[0]} : {it[1]}
                        </small>
                        <br />
                      </span>
                    ))}
                  </span>
                </div>
                <div className='cart_item_action'>
                  <span>
                    Qty: <b className='text-lg'>{c.qty}</b>
                  </span>
                  <button className='qp' onClick={() => qUp(c.id)}>
                    <i className='bx bx-plus'></i>
                  </button>
                  <button
                    className='qd'
                    disabled={c.qty === 1}
                    onClick={() => qDn(c.id)}
                  >
                    <i className='bx bx-minus'></i>
                  </button>
                  <button className='cd' onClick={() => rm(c.id)}>
                    <i className='bx bx-trash'></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='cart_total'>
            <p>
              Sub Total {` :=> `} <span>${total.subTotal}</span>
            </p>
            <p>
              Total Price (15% VAT inclued){` :=> `}{' '}
              <span>${total.total_p}</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <h2>You have no items in your cart!</h2>
        </>
      )}
    </>
  );
};
