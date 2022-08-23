import { useState } from "react";
import { Fragment } from "react";

const EditCard = ({ card }) => {
  const [front, setFront] = useState([card.front]);
  const [back, setBack] = useState([card.back]);
  
  // edit card function

  const updateCard = (e) => {
      e.preventDefault();
      const cardinfo = { front, back }

      fetch(`http://localhost:3000/card/${card.id}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(cardinfo)
      })
      .then(() => {
          window.location = '/browse';
      })
  }

    return (
        <Fragment>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${card.id}`}>Edit</button>

        <div id={`id${card.id}`} class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">

            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title text-center">Update Card</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={() => {
                    setFront(card.front)
                    setBack(card.back)
                }}>&times;</button>
            </div>
            <div class="modal-body">
            <label>Front</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={front}
                  onChange={(e) => setFront(e.target.value)}
                  ></input>
                <label className="mt-3">Back</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={back}
                  onChange={(e) => setBack(e.target.value)}
                  ></input>
            </div>
            <div class="modal-footer">
                <button 
                  type="button" 
                  class="btn btn-warning" 
                  data-dismiss="modal"
                  onClick = {updateCard}>Update</button>
                <button type="button" class="btn btn-default" data-dismiss="modal" onClick={() => {
                    setFront(card.front)
                    setBack(card.back)
                }}>Close</button>
            </div>
            </div>

        </div>
        </div>
        </Fragment>
    );
}
 
export default EditCard;