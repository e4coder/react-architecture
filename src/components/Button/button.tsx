import React, { FC, Fragment } from 'react'
import { Button as HeadlessButton } from '@headlessui/react'
import clsx from 'clsx'
import { ClipLoader } from 'react-spinners'



// interface IButton extends PropsWithChildren {
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: '2xl' | 'xl' | 'lg' | 'sm' | 'xs'
  primary?: boolean
  secondary?: boolean
  clear?: boolean
  // type?: 'primary' | 'secondary' | 'success' | 'warn' | 'error' | 'clear'
  loader?: boolean
  loaderText?: React.ReactNode | string
  loaderSize?: number
  hoverTransition?: boolean
}

const Button: FC<IButton> = (
  {
    children,
    onClick,
    loader,
    loaderText = "loading",
    loaderSize = 10,
    disabled,
    primary = true,
    // type = 'primary',
    secondary,
    clear,
    size = 'sm',
    hoverTransition = false,
  }: IButton) => {

  const classNames = clsx(
    { 'text-white bg-blue-700 hover:bg-blue-800': primary },
    { 'text-white bg-gray-700': secondary },
    { 'text-white bg-gray-300': disabled },
    { 'text-black bg-transparent hover:bg-gray-100': clear}
  )

  return (
    <HeadlessButton disabled={disabled} as={Fragment}>
      {() => (
        <button
          className={clsx(
            classNames,
            `font-medium rounded-lg text-${size} px-5 py-2.5`,
            { 'hover:bg-blue-800 focus:outline-none': !loader && !disabled },
            'dark:bg-blue-600 dark:hover:bg-blue-700',
            'transition-all',
            { 'hover:scale-110': !loader && !disabled && hoverTransition },
            { 'active:scale-95': !loader && !disabled}
          )}
          onClick={onClick}
          disabled={disabled}
        >
          {loader ? (
            <>
              <span className='pr-2'>
                {loaderText}
              </span>
              <ClipLoader
                color='#ffffff'
                size={loaderSize}
              />
            </>
          ) : (
            <>{children}</>
          )}
        </button>
      )}
    </HeadlessButton>
  )
}

export default Button