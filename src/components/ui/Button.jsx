const Button = (props) => {
    const { variant, className, children, ...rest } = props;

    const variants = {
        red: 'bg-red-700 text-white',
        blue: 'bg-blue-700 text-white',
        green: 'bg-green-700 text-white'
    }

    const style = variants[variant] || 'bg-yellow-300 text-black'

    return (
        <button
        {...rest}
            className={`h-10 px-6 font-bold rounded-md ${style} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;