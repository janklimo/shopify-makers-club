import { animated, useTransition } from "react-spring";
import { CSSProperties, FunctionComponent, useState } from "react";

import Form from "./Form";
import Success from "./Success";

interface Props {
  style: CSSProperties;
  closeModal: () => void;
}

const MembershipForm: FunctionComponent<Props> = ({ style, closeModal }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const transitions = useTransition(isSubmitted, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <animated.div
      style={style}
      className="fixed top-0 left-0 overflow-y-scroll md:flex justify-center items-center bg-brand-light w-full h-full"
    >
      {transitions.map(({ item, key, props: style }) =>
        item ? (
          <Success key={key} style={style} name={name} closeModal={closeModal} />
        ) : (
          <Form
            style={style}
            key={key}
            closeModal={closeModal}
            name={name}
            setName={setName}
            successfulSubmission={() => setIsSubmitted(true)}
          />
        )
      )}
    </animated.div>
  );
};

export default MembershipForm;
