import React from 'react'

const Button = (props) => {
    const variants = {
        red: 'bg-red-700',
        green: 'bg-green-700',
        blue: 'bg-blue-700'
    }

    const bgColor = variants[props.variant] || 'bg-yellow-700';

    return (
        <button className={`h-10 px-6 font-bold rounded-md ${bgColor} text-white`}>
            {props.children}
        </button>
    );
}

function App() {
    return (
        <div className="flex justify-center bg-blue-400 min-h-screen items-center gap-x-6">
            <h1>Hello React!</h1>
            <Button variant="red">Laravel</Button>
            <Button variant="green">Vue</Button>
            <Button variant="blue">React</Button>
        </div>
    )
}

export default App;
