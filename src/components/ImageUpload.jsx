import React from "react";

function ImageUpload({ handelImage }) {
  return (
    <div>
      <input type="file" name="file" accept="image/*" onChange={handelImage} />
    </div>
  );
}

export default ImageUpload;
