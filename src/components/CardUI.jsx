import style from "./CardUI.module.css";
import { useSelector } from "react-redux";

const CardUI = () => {
  const number = useSelector((state) => state.card.number);
  const name = useSelector((state) => state.card.name);
  const year = useSelector((state) => state.card.year);
  const month = useSelector((state) => state.card.month);
  const cvc = useSelector((state) => state.card.cvc);

  return (
    <>
      <div className={style.container}>
        <div className={style.card} id={style.frontCard}>
          <div className={style.flag}>
            <div className={style.flagImage1}></div>
            <div className={style.flagImage2}></div>
          </div>

          <div className={style.cardNumber}>
            <span className={style.text}>{number}</span>
          </div>

          <div className={style.cardInfo}>
            <div className={style.cardInfoName}>
              <span className={`${style.text} ${style.small}`}>{name}</span>
            </div>

            <div className={style.cardInfoDate}>
              <span className={`${style.text} ${style.small}`}>
                {month}/{year}
              </span>
            </div>
          </div>
        </div>

        <div className={style.card} id={style.backCard}>
          <div className={style.securityNumber}>
            <span className={`${style.text} ${style.small}`}>{cvc}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUI;
