import Navbar from './Navbar';
import Home from './Home';
import DeckRow from './DeckRow';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardForm from './CardForm';
import CardList from './CardList';
import FlashcardList from './FlashcardList';
import { useState } from 'react';


function App() {
const [cards, setCards] = useState([])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <DeckRow />
            </Route>
            <Route exact path="/flashcards">
              <FlashcardList flashcards={cards}/>
            </Route>
            <Route exact path="/add">
              <CardForm />
            </Route>
            <Route exact path="/browse">
              <CardList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
