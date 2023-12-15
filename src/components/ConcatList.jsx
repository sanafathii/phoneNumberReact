import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

function ConcatList({ removeConcatHandler, editHandler, concatList }) {
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
    <div className="">
      <Link to="/" className="bg-gray-200 py-3 px-3 rounded-xl mb-5">
        <button>Add new concat</button>
      </Link>

      <div className="mb-20">
        <Input
          className=" outline-none text-black w-64"
          type="text"
          name="searchConcat"
          value={searchConcat}
          placeholder="search concat"
          onChange={changeHandeler}
        />

        <button
          onClick={sortHandler}
          className="bg-blue-300 hover:bg-blue-500  py-3 px-3 rounded-xl"
        >
          sotted Concat
        </button>
      </div>

      <div className="flex flex-col bg-gray-200 rounded-xl border-b-2 border-gray-300">
        {allConcat.map((item) => {
          return (
            <div
              key={item.id}
              className="flex  p-3  justify-between items-center "
            >
              <div className="flex items-center">
                {item.image && (
                  <img
                    src={URL.createObjectURL(item.image)}
                    alt={`${item.concatName}'s Image`}
                    className="w-20 h-20 rounded-full"
                  />
                )}
                <p className="pl-3">
                  {item.concatName} - {item.concatNumber}
                </p>
              </div>

              <div className="flex items-center gap-x-5" key={item.id}>
                <button onClick={() => removeConcatHandler(item.id)}>
                  remove
                </button>
                <Link to={`/editContact/:${item.id}`}>
                  <button onClick={() => editHandler(item)}>edit</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ConcatList;
