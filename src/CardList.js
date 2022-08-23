import { useEffect, useState } from "react";
import EditCard from "./EditCard";

const CardList = () => {
  const [cards, setCards] = useState([]);

    // delete card function

    const deleteCard = (id) => {
      fetch(`http://localhost:3000/card/${id}`, {
        method: "DELETE"
      });
      setCards(cards.filter(card => card.id !== id))
    }

    // fetches list of submitted cards

    useEffect(() => {
      fetch('http://localhost:3000/browse', {
        method: 'GET',
        headers: { 
          "Content-Type" : "application/json",
          "Accept" : "application/json" },
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
      <div className="list-group">
        <h2 className="text-center">Browse Cards</h2>
        <table class="table table-striped mt-5 text-center table-bordered">
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
          </tr>
        </thead>
        <tbody>
          {cards && cards.map(card => (
          <tr key={card.id}>
            <td>{card.front}</td>
            <td>{card.back}</td>
            <td>
              <EditCard 
              card={card} 
              cards={cards}
              />
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => deleteCard(card.id)}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
}
 
export default CardList;