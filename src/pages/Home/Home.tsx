import { useState } from "react";
import Result from "../../components/Result/Result";
import "./Home.css";

function Home() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  function handleButtonClick(value: string) {
    if (value === "=") {
      try {
        const computedResult = eval(expression).toString();
        setResult(computedResult);
        setExpression(expression + " = " + computedResult);
        setIsResultDisplayed(true);
      } catch {
        setResult("Error");
        setExpression("");
        setIsResultDisplayed(false);
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
      setIsResultDisplayed(false);
    } else {
      if (isResultDisplayed) {
        if (isNaN(Number(value))) {
          setExpression(result + value);
        } else {
          setExpression(value);
        }
        setResult("");
      } else {
        setExpression((prev) => prev + value);
      }
      setIsResultDisplayed(false);
    }
  }

  return (
    <div className="home">
      <div className="main">
        <Result result={expression || "0"} /> 
        <div className="center">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-"].map(
            (btn) => (
              <button key={btn} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            )
          )}
          <button onClick={() => handleButtonClick("C")}>C</button>
        </div>
        <button onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
  );
}

export default Home;
