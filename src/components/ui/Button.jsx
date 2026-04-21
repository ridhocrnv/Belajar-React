const Button = ({
    variant = "blue",
    type = "button",
    className = "",
    children,
    ...rest
}) => {
    const baseStyle = "h-10 px-6 font-semibold rounded-md transition-all duration-200 inline-flex items-center justify-center active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        blue: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20",
        red: "bg-red-600 hover:bg-red-700 text-white",
        green: "bg-green-600 hover:bg-green-700 text-white",
        outline: "border border-slate-700 hover:bg-slate-800 text-slate-300 hover:border-slate-500",
        ghost: "text-slate-400 hover:text-white hover:bg-slate-800",
    };

    const selectedVariant = variants[variant] || "bg-yellow-400 text-black";

    return (
        <button
            type={type}
            className={`${baseStyle} ${selectedVariant} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;