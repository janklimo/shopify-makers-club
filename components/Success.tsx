import { animated } from "react-spring";
import { CSSProperties, FunctionComponent } from "react";

interface Props {
  style: CSSProperties;
  name: string;
  closeModal: () => void;
}

const Success: FunctionComponent<Props> = ({ style, name, closeModal }) => {
  return (
    <animated.div style={style} className="bg-white shadow-lg p-8 max-w-xl rounded-lg fixed mx-1">
      <h1 className="text-3xl mb-4">Thank you, {name}! 🙌</h1>
      <img
        src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/source.gif"
        className="w-full my-8"
        alt="Thanks!"
      />
      <p>We've received your application and will be in touch!</p>
      <a
        className="inline-block align-baseline font-bold text-sm text-brand-lighter hover:text-brand-light mt-4"
        href="#"
        onClick={closeModal}
      >
        Close
      </a>
    </animated.div>
  );
};

export default Success;
