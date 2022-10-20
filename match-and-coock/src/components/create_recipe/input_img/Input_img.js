import React from "react";
import { ImagePreview } from "./ImagePreview";
import PlusIcon from "../../../assets/icons/plus.svg";
import CloseIcon from "../../../assets/icons/close.svg";

import "../styles-create.css";

export const Input_img = ({ setFieldValue, values, errors }) => {
  return (
    <article className="input-img-container">
      <h3>Imágen</h3>
      <label className="input-img-container__label">
        {values.file ? (
          <>
            <ImagePreview file={values.file} />
            <button className="input-img-container__close">
              <img
                src={CloseIcon}
                alt="close"
                onClick={() => setFieldValue("file", null)}
              />
            </button>
          </>
        ) : (
          <>
            <img src={PlusIcon} alt="plus" />
            <input
              name="file"
              type="file"
              hidden
              onChange={(e) => {
                setFieldValue("file", e.target.files[0]);
              }}
            />
          </>
        )}
      </label>

      <div className="create-recipe__error">
        <p> {errors.file && errors.file}</p>
      </div>
    </article>
  );
};
