type Props = {
  text: string;
  clickHandler: () => void;
};

const CTA = ({ text, clickHandler }: Props): JSX.Element => {
  return (
    <button onClick={clickHandler} className="bg-blue-400 py-2 px-8 text-white">
      {text}
    </button>
  );
};

export default CTA;
