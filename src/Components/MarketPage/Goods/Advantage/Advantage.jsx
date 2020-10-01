import React from 'react';
import s from './Advantage.module.scss';

function Advantagee() {
  return (
    <div className={s.AdvantageMain}>
      <div className={s.AdvantageElem}>
        <div className={s.icon}><i className="fa fa-credit-card" aria-hidden="true" /></div>
        <div className={s.text}><span>Онлайн-оплата ВКонтакте по банковской карте или WK Pay</span></div>
      </div>
      <div className={s.AdvantageElem}>
        <div className={s.icon}><i className="fa fa-archive" aria-hidden="true" /></div>
        <div className={s.text}><span>Удобная доставка курьером, в пункты выдачи или почтой</span></div>
      </div>
      <div className={s.AdvantageElem}>
        <div className={s.icon}><i className="fa fa-shield" aria-hidden="true" /></div>
        <div className={s.text}><span>Надёжные продавцы отмечены синей галочкой верификации</span></div>
      </div>
    </div>
  );
}
export default Advantagee
