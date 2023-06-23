import style from "./Form.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cardActions } from "../redux/store/cardSlice";
import { validationActions } from "../redux/store/validationSlice";
import { formSubmitActions } from "../redux/store/submitSlice";
const Form = () => {
  const cardNumber = useSelector((state) => state.card.number);
  const cardMonth = useSelector((state) => state.card.month);
  const cardCVC = useSelector((state) => state.card.cvc);
  const validation = useSelector((state) => state.input);
  const { nameState, numberState, monthState, cvcState } =
    validation.errorState;

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (cardNumber.length < 16) {
      dispatch(validationActions.setNumberState());
    } else if (Number(cardMonth) > 12) {
      dispatch(validationActions.setMonthState());
    } else if (cardCVC.length < 3) {
      dispatch(validationActions.setCVCState());
    } else if (!nameState && !numberState && !monthState && !cvcState) {
      dispatch(formSubmitActions.submit());
    } else {
      alert("Invalid Details Entered");
      dispatch(validationActions.setYearState());
      dispatch(validationActions.setNameState());
      dispatch(validationActions.setNumberState());
      dispatch(validationActions.setMonthState());
      dispatch(validationActions.setCVCState());
    }
  };

  const nameFieldHandler = (event) => {
    let input = event.target.value;
    dispatch(cardActions.name(input));
    if (!/^[A-Za-z ]+$/.test(input) || input.trim() === "") {
      dispatch(validationActions.setNameState());
    } else {
      dispatch(validationActions.setNameError());
      localStorage.setItem("cardName", input);
    }
  };
  const numberFieldHandler = (event) => {
    const input = event.target.value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    dispatch(cardActions.number(input));
    if (!/^[0-9 ]+$/.test(input) || input === "") {
      dispatch(validationActions.setNumberState());
    } else {
      dispatch(validationActions.setNumberError());
    }
  };

  const monthFieldHandler = (event) => {
    const input = event.target.value;
    dispatch(cardActions.month(input));
    if (
      !/^[0-9]+$/.test(input) ||
      input === "" ||
      Number(input) > 12 ||
      Number(input) < 1
    ) {
      dispatch(validationActions.setMonthState());
    } else {
      dispatch(validationActions.setMonthError());
    }
  };

  const yearFieldHandler = (event) => {
    const input = event.target.value;
    dispatch(cardActions.year(input));
    if (!/^[0-9]+$/.test(input) || input === "") {
      dispatch(validationActions.setMonthState());
    } else {
      dispatch(validationActions.setMonthError());
    }
  };

  const cvcFieldHandler = (event) => {
    const input = event.target.value;
    dispatch(cardActions.cvc(input));
    if (!/^[0-9]+$/.test(input) || input === "") {
      dispatch(validationActions.setCVCState());
    } else {
      dispatch(validationActions.setCVCError());
    }
  };

  return (
    <>
      <div className={`${style.form}`}>
        <form onSubmit={formSubmitHandler} className={style.formContent}>
          <div className={style.formControl}>
            <h3 className={style.title}>cardholder name</h3>
            <input
              type="text"
              maxLength="20"
              onChange={nameFieldHandler}
              placeholder="e.g. M Saad Haider"
            />
            {nameState && (
              <small className={style.error}>
                {validation.message.nameError}
              </small>
            )}
          </div>

          <div className={style.formControl}>
            <h3 className={style.title}>card number</h3>
            <input
              type="text"
              maxLength="16"
              onChange={numberFieldHandler}
              placeholder="1234 5678 9123 0000"
            />
            {numberState && (
              <small className={style.error}>
                {validation.message.numberError}
              </small>
            )}
          </div>

          <div className={style.formGroup}>
            <div className={style.formControl}>
              <h3 className={style.title}>exp. date (mm/yy)</h3>
              <div className={style.formDate}>
                <input
                  type="text"
                  maxLength="2"
                  onChange={monthFieldHandler}
                  id="month"
                  placeholder="MM"
                />
                <input
                  className={style.year}
                  type="text"
                  maxLength="2"
                  onChange={yearFieldHandler}
                  id="year"
                  placeholder="YY"
                />
              </div>
              {monthState && (
                <small className={style.error}>
                  {validation.message.monthError}
                </small>
              )}
            </div>

            <div className={style.formControl}>
              <h3 className={style.title}>cvc</h3>
              <input
                type="text"
                maxLength="3"
                onChange={cvcFieldHandler}
                placeholder="123"
              />
              {validation.errorState.cvcState && (
                <small className={style.error}>
                  {validation.message.cvcError}
                </small>
              )}
            </div>
          </div>

          <button className={`${style.btn} ${style.text}`}>Confirm</button>
        </form>
      </div>
    </>
  );
};

export default Form;
