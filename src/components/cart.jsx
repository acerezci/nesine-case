import React from 'react';
import { useAppContext } from '../context/app';
import '../styles/cart.scss';

const Cart = () => {
  const { cart } = useAppContext();
  const total = cart.reduce((acc, item) => acc * Number(item.rate), 1);

  return (
    <div className="cart-container">
      <div className="cart-content">
        {cart?.map((item) => (
          <div data-testid="cart-item" key={`${item.id}-${item.rate}-${item.matchCode}`} className="item">
            <span>{item.staticVariable}</span>
            <span>
              Kod:
              {item.matchCode}
            </span>
            <span>
              Maç:
              {item.matchInfo}
            </span>
            <span>
              Oran:
              {item.rate}
            </span>
            <span>
              MBS:
              {item.mbs}
            </span>
          </div>
        ))}
        <div className="total">
          Toplam Tutar:
          {total !== 1 && total}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
