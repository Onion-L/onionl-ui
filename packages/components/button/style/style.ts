const baseStyles = 'rounded-lg border-1 border-black cursor-pointer transition-colors text-white bg-black'

const variantStyles = {
  primary: 'bg-black text-white hover:bg-black focus:ring-black-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
  outline: 'bg-transparent border-2 border-black-600 text-black-600 hover:bg-black-50 focus:ring-black-500',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const btnContentStytles = 'flex items-center justify-center gap-2 text-size-sm'

const disabledStyles = 'opacity-50 cursor-not-allowed'
const loadingStyles = 'relative text-transparent transition-none hover:text-transparent'

export { baseStyles, btnContentStytles, disabledStyles, loadingStyles, sizeStyles, variantStyles }
