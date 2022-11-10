type Props = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: Props): JSX.Element => {
  return <img src={src} alt={alt} className="h-full w-full rounded-lg object-cover" />;
};

export default Image;
