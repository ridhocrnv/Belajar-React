const Button = (props) => {
    const variants = {
        red: 'bg-red-700 text-white',
        green: 'bg-green-700 text-white',
        blue: 'bg-blue-700 text-white',
    }

    const style = variants[props.variant] || 'bg-yellow-300 text-black'

    return (
        <button
            className={`h-10 px-6 font-bold rounded-md ${style}`}
        >
            {props.children}
        </button>
    )
}

export default Button;