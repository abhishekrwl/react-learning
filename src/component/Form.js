import React, { useState } from "react";

function Form() {
  const [value, setValue] = useState({ firstName: "", lastName: "" });
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    let finalResult = `Hello ${value.firstName} ${value.lastName}, how are you?`;
    setResult(finalResult);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={value.firstName}
          onChange={(e) => setValue({ ...value, firstName: e.target.value })}
        />
        <input
          type="text"
          value={value.lastName}
          onChange={(e) => setValue({ ...value, lastName: e.target.value })}
        />
        {result}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Form;
