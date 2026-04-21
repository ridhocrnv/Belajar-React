const Input = ({ label, type = "text", placeholder = "Enter your text", id, ...props }) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="mb-4 w-full">
            {label && (
                <label 
                    htmlFor={inputId} 
                    className="block text-slate-200 text-sm font-medium mb-3 ml-1"
                >
                    {label}
                </label>
            )}
            <input 
                id={inputId}
                type={type} 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-md py-2.5 px-4 text-white text-sm placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" 
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default Input;