import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

function EditContact({ concatToEdit, saveHandler }) {
  const [editedConcat, setEditedConcat] = useState({
    concatName: "",
    concatNumber: "",
  });
  // console.log(concatToEdit);

  useEffect(() => {
    if (concatToEdit) {
      setEditedConcat({
        concatName: concatToEdit.concatName,
        concatNumber: concatToEdit.concatNumber,
      });
    }
  }, [concatToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedConcat({ ...editedConcat, [name]: value });
  };
  const handleSave = () => {
    saveHandler(concatToEdit.id, editedConcat);
  };

  return (
    <div>
      <Input
        type="text"
        className="outline-none"
        placeholder="Enter concatName"
        name="concatName"
        value={editedConcat.concatName}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        className="outline-none"
        placeholder="Enter concatNumber"
        name="concatNumber"
        value={editedConcat.concatNumber}
        onChange={handleInputChange}
      />
      <Link to="/concatList" onClick={handleSave}>
        <button>Save</button>
      </Link>
    </div>
  );
}

export default EditContact;
