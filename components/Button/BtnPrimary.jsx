import React, { useRef, useState } from "react";
import { classNames } from "../../utils/datePickerUtils";

const BtnPrimary = ({ rounded = false, dark, children, ...rest }) => {
  const buttonRef = useRef(null);

  const animate = (e) => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundPosition = `
      ${100 - (e.nativeEvent.offsetX / buttonRef.current.offsetWidth) * 100}% ${
        100 - (e.nativeEvent.offsetY / buttonRef.current.offsetHeight) * 100
      }%`;
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={(e) => {
        animate(e);
      }}
      className={classNames(
        `${rounded ? "btn-primary-rounded" : "btn-primary"} ${
          dark ? "dark-bg" : "light-bg"
        } text-sm md:text-md lg:text-xl px-4 py-2 md:py-3`
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
