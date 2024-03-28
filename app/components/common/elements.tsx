import React, { useState } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import Quill from "@/app/components/ui/quill";
import Select from "react-select";

interface TextFieldProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>;
  control: Control<T>;
}

export function TextField<T extends FieldValues>(props: TextFieldProps<T>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => <input type="text" {...props} {...field} />}
    />
  );
}

TextField.displayName = "TextField";

interface PasswordFieldProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>;
  control: Control<T>;
}

export function PasswordField<T extends FieldValues>(
  props: PasswordFieldProps<T>,
) {
  const [obscured, setObscured] = useState<boolean>(true);
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <div className="relative">
          <input type={obscured ? "password" : "text"} {...props} {...field} />
          <div
            className="absolute min-w-16 right-0 top-2 border-l border-gray-300 px-2 text-gray-400 cursor-pointer"
            onClick={() => setObscured((prev) => !prev)}
          >
            {obscured ? "Show" : "Hide"}
          </div>
        </div>
      )}
    />
  );
}

PasswordField.displayName = "PasswordField";

interface Options {
  value: string;
  label: string;
}

interface SelectFieldProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: Options[];
  name: FieldPath<T>;
  control: Control<T>;
}

export function SelectField<T extends FieldValues>(props: SelectFieldProps<T>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Select
          className={props.className}
          {...field}
          value={props.options.find((c) => c.value === field.value)}
          onChange={(val) => field.onChange(val)}
          defaultValue={props.options.find((c) => c.value === field.value)}
          options={props.options}
        />
      )}
    />
  );
}

SelectField.displayName = "SelectField";

interface FileFieldProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>;
  control: Control<T>;
}

export function FileField<T extends FieldValues>(props: FileFieldProps<T>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <input
          type="file"
          {...props}
          onChange={(event) => field.onChange(event.target.files)}
        />
      )}
    />
  );
}

FileField.displayName = "FileField";

interface QuillFieldProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>;
  control: Control<T>;
}

export function QuillField<T extends FieldValues>(props: QuillFieldProps<T>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Quill
          value={field.value.toString()}
          handler={(event) => field.onChange(event)}
          {...props}
        />
      )}
    />
  );
}

QuillField.displayName = "QuillField";

interface TextAreaProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: FieldPath<T>;
  control: Control<T>;
}

export function TextArea<T extends FieldValues>(props: TextAreaProps<T>) {
  return (
    <Controller
      name={props.name}
      render={({ field }) => <textarea {...props} {...field} />}
      control={props.control}
    />
  );
}

TextArea.displayName = "TextArea";
