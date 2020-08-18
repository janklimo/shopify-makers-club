import { animated } from "react-spring";
import { CSSProperties, FunctionComponent } from "react";

interface Props {
  style: CSSProperties;
  closeModal: () => void;
}

const MembershipForm: FunctionComponent<Props> = ({ style, closeModal }) => {
  return (
    <animated.div
      style={style}
      className="flex justify-center items-center bg-brand-light w-full h-full fixed top-0 left-0"
      onClick={closeModal}
    >
      <div className="bg-gray-100 w-20 h-20">Application Form</div>
    </animated.div>
  );
};

export default MembershipForm;
