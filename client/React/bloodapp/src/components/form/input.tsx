import { Input } from "antd"
import { Controller, useController } from "react-hook-form";

export enum InputType {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    URL = "url",
    DATE = "date",
    NUMBER = "number"
}
export interface ITextInputProps {
    name: string;
    type?: InputType;
    placeholder: string;
    control?: any;
    errorMsg?:string | null

}

export const TextInput = ({name,type = InputType.TEXT,placeholder = "Enter text",control, errorMsg=""}: ITextInputProps) => {
  const { field } = useController({name,control});

  return (
    <>
      <Input {...field} type={type} placeholder={placeholder} id={name}  />
      {errorMsg && <span className="text-red-500 text-sm">{errorMsg}</span>}
    </>
  );
};

export const PasswordInput = ({ name, control, placeholder = "Enter password", errorMsg = "" }: ITextInputProps) => {


    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <>
                    <Input.Password {...field} placeholder={placeholder} id={name} />
                    {errorMsg && <span className="text-red-500 text-sm">{errorMsg}</span>}
                  </>
                )}
            />
            
        </>
    )
}

export interface IInputLabelProps {
    htmlFor?: string;
    label: string;
}
export const InputLabel = ({ htmlFor = "", label }: IInputLabelProps) => {
    return (
        <>
            <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 pt-2 pb-0">{label}</label>
        </>
    )
}