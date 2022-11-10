type Props = {
  title: string;
};

const Title = ({ title }: Props): JSX.Element => {
  return <p className="whitespace-nowrap text-2xl font-medium">{title}</p>;
};

export default Title;
