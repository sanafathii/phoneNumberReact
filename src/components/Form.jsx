import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

function Form({ addConcatHandler }) {
  const concatId = useRef(0);
  const [concat, setConcat] = useState({
    concatName: "",
    concatNumber: "",
    id: concatId.current,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConcat((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //
  const addConcat = () => {
    if (concat.concatName !== "" && concat.concatNumber !== "") {
      const newConcat = {
        concatName: concat.concatName,
        concatNumber: concat.concatNumber,
        id: concatId.current,
      };
      addConcatHandler(newConcat);
      concatId.current += 1;

      setConcat({
        concatName: "",
        concatNumber: "",
        id: concatId.current,
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-5 justify-between items-start">
      <Input
        type="text"
        className="outline-none"
        placeholder="Enter concatName"
        name="concatName"
        value={concat.concatName}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        className="outline-none"
        placeholder="Enter concatNumber"
        name="concatNumber"
        value={concat.concatNumber}
        onChange={handleInputChange}
      />

      <button onClick={addConcat}>Add</button>
      <Link to="/ConcatList">
        <button>see all concats</button>
      </Link>
    </div>
  );
}

export default Form;
