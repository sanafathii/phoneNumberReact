import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import ImageUpload from "./ImageUpload";

function Form({ addConcatHandler }) {
  const concatId = useRef(0);
  const [imagePreview, setImagePreview] = useState(null);
  const [concat, setConcat] = useState({
    concatName: "",
    concatNumber: "",
    id: concatId.current,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConcat((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setConcat((prevState) => ({
      ...prevState,
      image: imageFile,
    }));
    const previewURL = URL.createObjectURL(imageFile);
    setImagePreview(previewURL);
  };

  const addConcat = () => {
    if (
      concat.concatName !== "" &&
      concat.concatNumber !== "" &&
      concat.image !== null
    ) {
      const newConcat = {
        concatName: concat.concatName,
        concatNumber: concat.concatNumber,
        id: concatId.current,
        image: concat.image,
      };
      addConcatHandler(newConcat);
      concatId.current += 1;

      setConcat({
        concatName: "",
        concatNumber: "",
        id: concatId.current,
        image: null,
      });
      setImagePreview(null);
    }
  };

  return (
    <div className="flex flex-col gap-y-5 justify-between items-start">
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Image Preview"
          className="w-28 h-28 rounded-full"
        />
      )}
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
      <ImageUpload handelImage={handleImageChange} />

      <button onClick={addConcat} className="bg-gray-300 py-3 rounded-lg px-3">
        Add
      </button>
      <Link to="/ConcatList">
        <button className="bg-gray-300 py-3 rounded-lg px-3">
          see all concats
        </button>
      </Link>
    </div>
  );
}

export default Form;
