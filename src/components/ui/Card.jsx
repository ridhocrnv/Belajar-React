const Card = ({ children, className = "" }) => {
    return (
        <div className={`w-full max-w-md p-8 bg-slate-900/40 border border-slate-800 rounded-md shadow-2xl backdrop-blur-md ${className}`}>
            {children}
        </div>
    )
}

Card.Title = ({ children, className = "" }) => (
    <h1 className={`text-3xl text-white font-bold text-center tracking-tight ${className}`}>
        {children}
    </h1>
)

Card.Description = ({ children, className = "" }) => (
    <p className={`font-medium text-slate-400 text-center mb-8 mt-2 ${className}`}>
        {children}
    </p>
)

Card.Body = ({ children, className = "" }) => (
    <div className={`flex flex-col ${className}`}>
        {children}
    </div>
)

export default Card;