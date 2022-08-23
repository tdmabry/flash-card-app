import { useState } from "react";

// flashcard component

const Flashcard = ({ card }) => {
    const [flip, setFlip] = useState(false)

  return (
    
    <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
      <div className="front">
        {card.front}
      </div>
      <div className="back">
        {card.back}
      </div>
    </div>
  )
}
 
export default Flashcard;