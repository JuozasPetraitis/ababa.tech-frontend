type Props = {
  imdbLink: string;
};

function ImdbLink({ imdbLink }: Props): JSX.Element {
  return (
    <a target="_blank" href={imdbLink} rel="noreferrer" className="bg-yellow-400 py-2 px-6 text-sm">
      IMDB
    </a>
  );
}

export default ImdbLink;
