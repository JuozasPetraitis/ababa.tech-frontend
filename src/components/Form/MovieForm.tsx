import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Label, Input } from "../index";

type Props = {
  clickHandler: () => void;
};

export type AddMovieFormValues = {
  title: string;
  date: string;
  storyline: string;
  thumbnail: string;
  imdbLink: string;
};

const MovieForm = ({ clickHandler }: Props) => {
  const methods = useForm<AddMovieFormValues>({ mode: "onChange" });
  const { addMovieHandler } = useAuth();

  const onSubmit = (data: AddMovieFormValues) => {
    addMovieHandler(data);
    clickHandler();
  };

  const onError = (errors: FieldErrors) => {
    methods.reset();
    console.log(errors);
  };
  return (
    <>
      <p className="cursor-default text-center text-4xl font-thin uppercase tracking-tight">Add your favourite movie</p>
      <FormProvider {...methods}>
        <form className="mx-auto flex w-4/5 flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <Label name="Movie title" />
          <Input label="title" validate="Movie" />
          <ErrorMessage errors={methods.formState.errors} name="title" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <Label name="Movie date" />
          <Input label="date" validate="Movie" />
          <ErrorMessage errors={methods.formState.errors} name="date" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <Label name="Movie storyline" />
          <Input label="storyline" validate="Movie" />
          <ErrorMessage errors={methods.formState.errors} name="storyline" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <Label name="Movie thumbnail" />
          <Input label="thumbnail" validate="Movie" />
          <ErrorMessage errors={methods.formState.errors} name="thumbnail" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <Label name="Movie imdb" />
          <Input label="imdbLink" validate="Movie" />
          <ErrorMessage errors={methods.formState.errors} name="imdbLink" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <input
            type="submit"
            value="Add movie"
            className={`${methods.formState.isValid ? "input-submit cursor-pointer bg-sky-400" : "input-submit cursor-not-allowed bg-sky-200"}`}
            disabled={!methods.formState.isValid}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default MovieForm;
