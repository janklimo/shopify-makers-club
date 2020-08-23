import { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <svg x="0px" y="0px" width="24px" height="28px" viewBox="0 0 24 28">
      <rect x="0" y="0" width="4" height="10" fill="#FFF">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 18; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="0" width="4" height="10" fill="#FFF">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 18; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="0" width="4" height="10" fill="#FFF">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 18; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default Loader;
