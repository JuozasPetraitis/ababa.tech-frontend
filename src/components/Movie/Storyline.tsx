type Props = {
  storyline: string;
};

const Storyline = ({ storyline }: Props): JSX.Element => {
  return <p className="break-all px-4 xl:w-3/4">{storyline}</p>;
};

export default Storyline;
