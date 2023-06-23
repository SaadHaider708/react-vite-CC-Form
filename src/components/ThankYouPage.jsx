import { useDispatch } from "react-redux";
import { formSubmitActions } from "../redux/store/submitSlice";
import style from "./ThankYouPage.module.css";

const ThankYouPage = () => {
  const dispatch = useDispatch();

  const continueHandler = () => {
    dispatch(formSubmitActions.continue());
    window.location.reload();
  };
  return (
    <>
      <div className={`${style.thankYou}`}>
        <div>
          <div className={`text-center style.formControl`}>
            <div className={`justify-content-center ${style.check}`}>
              {" "}
              &#x2713;
            </div>
            <h3>Thank you</h3>
            <h3 className={`text-center ${style.title}`}>
              We have added your card details
            </h3>
            <button onClick={continueHandler} className={`${style.btn}`}>
              Continue
            </button>
            <small className={`text-center`}>Add another card?</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
