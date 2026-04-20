import React from "react";

class Button extends React.Component {
    render() {
        return(
            <button
                    className="h-10 px-6 font-bold rounded-md bg-black text-white"
                    type="submit"
                >
                    Beli Sekarang
                </button>
        );
    }
}

function ButtonBlack() {
    return (
        <button
                    className="h-10 px-6 font-bold rounded-md bg-black text-white"
                    type="submit"
                >
                    Beli Sekarang
                </button>
    );
}

const ButtonRed = () => {
    return (
        <button className="h-10 px-6 font-bold rounded-md bg-red-700 text-white">
            Beli Sekarang
        </button>
    );
}

function App() {
    return (
        <div className="flex justify-center bg-blue-400 min-h-screen items-center">
            <h1>Hello React!</h1>
            <Button></Button>
            <ButtonBlack></ButtonBlack>
            <ButtonRed></ButtonRed>
        </div>
    )
}

export default App
