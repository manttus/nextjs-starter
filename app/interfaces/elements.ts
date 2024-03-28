import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Options } from "@/app/interfaces/options";

export interface FieldProps<T extends FieldValues, S = any>
  extends React.InputHTMLAttributes<S> {
  name: FieldPath<T>;
  control: Control<T>;
  options?: Options[];
}
