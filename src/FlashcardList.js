import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";

const FlashcardList = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/flashcards', {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"},
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            setCards(data)
        })
    }, []);

    return (
        <div className="card-grid">
            {cards && cards.map(card => {
                return <Flashcard card={card} key={card.id}/>
            })}
        </div>
    );
}
 
export default FlashcardList;