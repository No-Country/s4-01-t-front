import React, { useState } from "react";

export const ImagePreview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }

  return (
    <div>
      {preview && <img src={preview} alt="recipe" className="preview" />}
    </div>
  );
};
