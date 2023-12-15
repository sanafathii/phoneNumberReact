import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

function ConcatList({ concatList, removeConcatHandler, editHandler }) {
  const [allConcat, setAllConcat] = useState(concatList);
  const [searchConcat, setSearchConcat] = useState("");

  const changeHandeler = (e) => {
    setSearchConcat(e.target.value);
  };

  useEffect(() => {
    if (searchConcat) {
      const searchedList = allConcat.filter((item) =>
        item.concatName.toLowerCase().includes(searchConcat.toLowerCase())
      );
      setAllConcat(searchedList);
    } else {
      setAllConcat(concatList);
    }
  }, [searchConcat, concatList]);

  const sortHandler = () => {
    const sortedList = [...allConcat];

    sortedList.sort((a, b) => a.concatName.localeCompare(b.concatName));

    setAllConcat(sortedList);
  };

  return (
    <div>
      <Input
        className=""
        type="text"
        name="searchConcat"
        value={searchConcat}
        placeholder="search concat"
        onChange={changeHandeler}
      />

      <button onClick={sortHandler}>sotted Concat</button>
      <p>
        {allConcat.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.id + 1} - {item.concatName} - {item.concatNumber}
              </p>
              <button onClick={() => removeConcatHandler(item.id)}>
                remove
              </button>
              <Link to={`/editContact/:${item.id}`}>
                <button onClick={() => editHandler(item)}>edit</button>
              </Link>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default ConcatList;
