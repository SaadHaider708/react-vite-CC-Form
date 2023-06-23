import Form from "./components/Form";
import style from "./styles.module.css";
import CardUI from "./components/CardUI";
import ThankYouPage from "./components/ThankYouPage";
import { useSelector } from "react-redux";

function App() {
  const formSubmitted = useSelector((state) => state.submit.formSubmit);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 p-0">
          <div className={`${style.leftCardBar}`}>
            <CardUI />
          </div>
        </div>
        <div className="text-center col-lg-8 p-0">
          {formSubmitted && <ThankYouPage />}
          {!formSubmitted && <Form />}
        </div>
      </div>
    </div>
  );
}

export default App;
