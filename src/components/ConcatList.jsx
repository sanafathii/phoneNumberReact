import React from "react";
import { Link } from "react-router-dom";

function ConcatList({ concatList, removeConcatHandler, editHandler }) {
  return (
    <div>
      <p>
        {concatList.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.id + 1} - {item.concatName} - {item.concatNumber}
              </p>
              <button onClick={() => removeConcatHandler(item.id)}>
                remove
              </button>
              <Link to={`/editContact/:${item.id}`}>
                <button>edit</button>
              </Link>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default ConcatList;
