import { FC, Fragment } from "react";
import { Input as HeadlessInput } from "@headlessui/react"
import clsx from "clsx";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  somethign?: string
}
const Input: FC<IInput> = ({ className, ...props }) => {
  return <HeadlessInput as={Fragment} >
    {({ focus, hover }) => <input
      className={clsx(
        'block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-150 ease-in-out',
        'border', focus && 'bg-blue-900', hover && 'shadow',
        className
      )}
      {...props}
    />}
  </HeadlessInput>
}

export default Input