import React from 'react'

const Button = (props) => {
    const variants = {
        red: 'bg-red-700',
        slate: 'bg-slate-500',
        blue: 'bg-blue-700'
    }

    const bgColor = variants[props.variant] || 'bg-yellow-700';

    return (
        <button className={`h-10 px-6 font-bold rounded-md ${bgColor} text-white`}>
            Beli Sekarang
        </button>
    );
}

function App() {
    return (
        <div className="flex justify-center bg-blue-400 min-h-screen items-center">
            <h1>Hello React!</h1>
            <Button variant="red"></Button>
            <Button variant="slate"></Button>
        </div>
    )
}

export default App;
