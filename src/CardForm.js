import { useState } from "react";
const CardForm = () => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  // submit card function

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = { front, back }

    fetch('http://localhost:3000/browse', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card)
    }).then(() => {
      console.log('new card added');
    })
      console.log(card)
      setFront('');
      setBack('');
  }
  
    return (
      <div className="add">
        <h2>Add a new card</h2>
        <form onSubmit={handleSubmit}>
          <label>Front</label>
          <input 
            type="text"
            required
            maxLength={30}
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
          <label>Back</label>
          <input 
            type="text"
            required
            maxLength={30}
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
          <button>Add Card</button>
        </form>
      </div>
    );
}
 
export default CardForm;