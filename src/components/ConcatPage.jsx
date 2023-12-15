import React from "react";

function ConcatPage() {
  return (
    <div>
      <div>
        {item.image && (
          <img
            src={URL.createObjectURL(item.image)}
            alt={`${item.concatName}'s Image`}
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        )}
      </div>
    </div>
  );
}

export default ConcatPage;
