import { animated } from "react-spring";
import {
  CSSProperties,
  FunctionComponent,
  useState,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";

import Loader from "./Loader";

interface Props {
  style: CSSProperties;
  closeModal: () => void;
  successfulSubmission: () => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const Form: FunctionComponent<Props> = ({
  style,
  closeModal,
  successfulSubmission,
  name,
  setName,
}) => {
  const [link, setLink] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [expectations, setExpectations] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setHasErrors(false);
    setIsLoading(true);

    fetch("/api/new-membership-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        link,
        work,
        expectations,
      }),
    }).then((response) => {
      setIsLoading(false);

      if (response.ok) {
        successfulSubmission();
      } else {
        setHasErrors(true);
      }
    });
  };

  return (
    <animated.div style={style} className="bg-white shadow-lg p-8 max-w-xl rounded-lg fixed m-1">
      <h1 className="text-3xl mb-4">Hello{name && `, ${name}`} 👋</h1>
      <p className="text-gray-600">
        Thank you for your interest in joining Shopify Makers Club. Please tell us more about
        yourself.
      </p>
      <form className="py-6" onSubmit={submitForm}>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your name
          </label>
          <input
            className="border-2 border-gray-200 bg-gray-200 text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-brand-light rounded-lg"
            id="name"
            value={name}
            placeholder="What do your friends call you?"
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 border-gray-200 bg-gray-200 text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-brand-light rounded-lg"
            id="email"
            value={email}
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
            Link
          </label>
          <input
            className="border-2 border-gray-200 bg-gray-200 text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-brand-light rounded-lg"
            id="link"
            value={link}
            placeholder="Twitter handle, personal site, etc"
            onChange={(event) => setLink(event.target.value)}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="work">
            Work
          </label>
          <textarea
            className="border-2 border-gray-200 bg-gray-200 text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-brand-light rounded-lg"
            id="work"
            value={work}
            rows={3}
            placeholder="What apps have you already released or are currently working on?"
            onChange={(event) => setWork(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expectations">
            Expectations
          </label>
          <textarea
            className="border-2 border-gray-200 bg-gray-200 text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-brand-light rounded-lg"
            id="expectations"
            value={expectations}
            rows={3}
            placeholder="What do you expect from joining Shopify Makers Club? How can we help you and what are the ways you're ready to help others?"
            onChange={(event) => setExpectations(event.target.value)}
          />
        </div>
        {hasErrors && (
          <p className="mb-5 text-red-500">
            No luck submitting this form 😐 <br />
            Please make sure you've completed all fields with valid data.
          </p>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-brand-light hover:bg-brand-dark text-white font-bold py-3 px-5 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLoading ? <Loader /> : <span>Submit</span>}
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
    </animated.div>
  );
};

export default Form;
