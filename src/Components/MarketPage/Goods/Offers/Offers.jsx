import React from 'react';
import s from './Offers.module.scss';

function Offers() {
  return (
    <div className={s.OffersMain}>
      <div className={s.OfferOne}>
        <img src="https://sun9-42.userapi.com/xnVVxYCJQL4sTMaoB-JfkZEKXDEymTnTZni2Cg/9bqmMPnvKaE.png" alt="d" />
      </div>
      <div className={s.OfferTwo}>
        <img src="https://sun9-67.userapi.com/eSPuy0v2hS1mQ-es2qxgnsgthNy648DrBpSTvA/OzlWjE6osL0.png" alt="b" />
        <img src="https://sun9-62.userapi.com/-PUEfnZMc0ZWN1hV9OvRDLTJA6U37MDcZF93Tg/MlTfeVZjEpc.png" alt="c" />
      </div>
    </div>
  );
}
export default Offers
