"use client";

import { useForm } from "react-hook-form";
import {
  FileField,
  PasswordField,
  QuillField,
  SelectField,
  TextArea,
  TextField,
} from "./components/common/elements";

interface FormValues {
  username: string;
  password: string;
  country: string;
  file: FileList;
  images: [];
  radio: string;
  quill: string;
  comment: String;
}

export default function Home() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Raymon Basnet",
      password: "Brrrrrrrrrr",
      country: "China",
      radio: "Male",
      quill: "Brrrrrrrrrrrrr",
      comment: "Comment Section",
    },
  });

  function submitHandler(data: FormValues) {
    console.log(data);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-6 h-full justify-center"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <TextField
          className="border rounded px-4 py-2"
          name="username"
          control={form.control}
          placeholder="Text Field"
        />
        <PasswordField
          className="border w-full rounded px-4 py-2"
          name="password"
          control={form.control}
          placeholder="Password"
        />
        <SelectField
          className="w-full"
          name="country"
          control={form.control}
          options={[
            { label: "Bangladesh", value: "Bangladesh" },
            { label: "India", value: "India" },
            { label: "China", value: "China" },
            { label: "Finland", value: "Finland" },
          ]}
          placeholder="Password"
        />
        <FileField
          className="border rounded w-full px-4 py-2"
          name="file"
          control={form.control}
        />
        <QuillField name="quill" control={form.control} />
        <TextArea
          className="border rounded px-4 py-2"
          name="comment"
          control={form.control}
        />
        <button
          className="border w-full rounded px-4 py-2 bg-blue-500 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
