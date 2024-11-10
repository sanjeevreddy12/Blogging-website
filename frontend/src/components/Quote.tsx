import  { useState, useEffect } from 'react';

const quotes = [
    {
        text: "The customer support I received was exceptional. The support team went above and beyond to address my concerns.",
        author: "Jules Winnfield",
        position: "CEO, Acme Inc"
    },
    {
        text: "Quality is remembered long after the price is forgotten.",
        author: "Aldo Gucci",
        position: "Fashion Designer"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        position: "Former Prime Minister of the UK"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        position: "Co-founder, Apple Inc"
    },
   
];



export const Quote = () => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    useEffect(() => {
        
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }, []);
    return (
        <div className="bg-slate-200 h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="max-w-lg">
                    <div className=" text-xl lg:text-2xl font-bold">
                    "{currentQuote.text}"
                    </div>
                    <div className="max-w-md  text-l lg:text-xl font-semibold  text-center lg:text-left mt-4">
                    {currentQuote.author}
                    </div>
                    <div className="max-w-md text-sm font-light text-center lg:text-left  text-slate-400">
                    {currentQuote.position}
                    </div>
                </div>
            </div>
        </div>
    );
}
