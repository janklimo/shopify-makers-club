import { animated } from "react-spring";
import { CSSProperties, FunctionComponent, useState } from "react";

interface Props {
  style: CSSProperties;
  closeModal: () => void;
}

const MembershipForm: FunctionComponent<Props> = ({ style, closeModal }) => {
  const [name, setName] = useState<string>();

  return (
    <animated.div
      style={style}
      className="flex justify-center items-center bg-brand-light w-full h-full fixed top-0 left-0"
    >
      <div className="bg-white shadow-lg p-8 max-w-xl">
        <h1 className="text-3xl mb-4">Hello{name && `, ${name}`} 👋</h1>
        <p className="text-gray-600">
          Thank you for your interest in joining Shopify Makers Club. Please tell us more about
          yourself.
        </p>
        <form className="pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your name
            </label>
            <input
              className="border border-brand-lighter w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-brand-light hover:bg-brand-dark text-white font-bold py-3 px-5 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-brand-lighter hover:text-brand-light"
              href="#"
              onClick={closeModal}
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </animated.div>
  );
};

export default MembershipForm;
