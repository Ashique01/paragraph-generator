import React, { useState } from "react";
import data from "./data";

function Paragraph() {
  const [count, setCount] = useState("");
  const [text, setText] = useState([]);
  const [placeholder, setPlaceHolder] = useState("No. of Paragraphs you want");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (isNaN(amount)) {
      setIsInvalid(true);
      setText(["Invalid input"]);
    } else {
      setIsInvalid(false);
      if (amount <= 0) {
        amount = 1;
      }
      if (amount === text.length) {
        amount = text.length;
      }
      setText(data.slice(0, amount));
    }
    setCount("");
  };

  const handleInputChange = (e) => {
    setCount(e.target.value);
    setPlaceHolder("No. of Paragraphs you want");
    setIsInvalid(false);
  };

  return (
    <section className="container text-center mt-5">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <h1 className="fw-bold text-secondary fs-1">Paragraph Generator</h1>
        </div>
        <div className="col-lg-12">
          <form className="mt-5" onSubmit={handleOnSubmit}>
            <div className="input-group">
              <label
                htmlFor="number"
                className="fw-bold fs-4 text-secondary mx-3"
              >
                Input
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={count}
                onChange={handleInputChange}
                className="form-control"
                placeholder={placeholder}
              />
              <button className="btn btn-outline-info" type="submit">
                Generate
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-12 mt-5">
          {isInvalid ? (
            <p className="text-start font-monospace alert alert-danger">
              Invalid input
            </p>
          ) : (
            text.map((item, index) => (
              <p className="text-start font-monospace" key={index}>
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Paragraph;
