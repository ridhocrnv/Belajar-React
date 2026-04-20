const Input = ({ label, type = "text", placeholder = "Enter your email", ...props}) => {
    return (
        <div className="mb=4">
            <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-1">
                {label}
            </label>
            <input type={type} className="w-full text-sm-border rounded py-2.5 px-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all mb-4" placeholder={placeholder}/>
        </div>
    );
};

export default Input;