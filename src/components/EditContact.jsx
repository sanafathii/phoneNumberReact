import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import ImageUpload from "./ImageUpload";

function EditContact({ concatToEdit, saveHandler }) {
  const [editedConcat, setEditedConcat] = useState({
    concatName: "",
    concatNumber: "",
    image: null,
  });

  useEffect(() => {
    if (concatToEdit) {
      setEditedConcat({
        concatName: concatToEdit.concatName,
        concatNumber: concatToEdit.concatNumber,
        image: concatToEdit.image,
      });
    }
  }, [concatToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedConcat({ ...editedConcat, [name]: value });
  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setEditedConcat((prevState) => ({
      ...prevState,
      image: imageFile,
    }));
  };
  const handleSave = () => {
    saveHandler(concatToEdit.id, editedConcat);
  };

  return (
    <div className="">
      <ImageUpload onChange={handleImageChange} />
      <div className="flex py-3 items-center border-3  ">
        {editedConcat.image && (
          <img
            src={URL.createObjectURL(editedConcat.image)}
            alt="Current Image"
            className="w-24 h-24 rounded-lg mr-8"
          />
        )}
        <Input
          type="text"
          className="outline-none border-2 border-gray-300 p-3 rounded-md mr-2"
          placeholder="Enter concatName"
          name="concatName"
          value={editedConcat.concatName}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          className="outline-none border-2 border-gray-300 p-3 rounded-md mr-2"
          placeholder="Enter concatNumber"
          name="concatNumber"
          value={editedConcat.concatNumber}
          onChange={handleInputChange}
        />

        <Link to="/concatList" onClick={handleSave}>
          <button>Save</button>
        </Link>
      </div>
    </div>
  );
}

export default EditContact;
