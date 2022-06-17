import React, { useEffect, useState } from "react";
import style from "./app.module.css";

const Form = () => {
  const [lorem, setLorem] = useState("");
  const [loremDirty, setLoremDirty] = useState(false);
  const [loremError, setLoremError] = useState("Input cannot be empty 📍");
  const [loremSuccess, setLoremSuccess] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [send, setSend] = useState(false);

  useEffect(() => {
    if (!lorem && loremError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [lorem, loremError]);

  const handleClick = () => {
    setLoremSuccess("Message sent successfully! ⭐️");
    setLorem("");
    console.log(lorem);
  };

  const blurHandler = (e) => {
    if (e.target.name === "lorem") {
      if (!lorem) {
        setLoremDirty(true);
      }
    }
  };

  const loremHandler = (e) => {
    setLorem(e.target.value);
    setLoremDirty(e.target.value && false);
    setLoremSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(lorem);
    setLorem("");
    setSend(true);
  };

  return (
    <div className="app">
      <form onClick={(e) => e.preventDefault()}>
        <div className={style.container}>
          <input
            onSubmit={(e) => handleSubmit(e)}
            onChange={(e) => loremHandler(e)}
            value={lorem}
            onBlur={(e) => blurHandler(e)}
            name="lorem"
            type="text"
            placeholder=""
            className={loremDirty && loremError ? style.error : style.input}

            // className={`${style.input} ${
            //     loremDirty && loremError ? style.error : ""
            //   } ${send ? style.done : ""}`}
          />
          <button
            disabled={!formValid}
            type="submit"
            className={style.btn}
            onClick={handleClick}
          >
            Send
          </button>
        </div>
        {loremError && loremDirty && <div>{loremError}</div>}
        {setSend && !loremDirty && <div>{loremSuccess}</div>}
      </form>
    </div>
  );
};
export default Form;
