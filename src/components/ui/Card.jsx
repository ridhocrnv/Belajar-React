const Card = ({children}) => {
    return (
        <div className="w-full max-w-sm p-6 bg-white rounded-sm shadow-sm border border-slate-200">
            {children}
        </div>
    )
}

Card.Title = ({ children }) => <h1 className="text-3xl text-blue-600 font-bold text-center">{children}</h1>
Card.Description = ({ children }) => <p className="font-medium text-slate-600 text-center mb-6">{children}</p>
Card.Body = ({ children }) => <div className="flex flex-col">{children}</div>

export default Card;