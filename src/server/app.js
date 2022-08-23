const express = require('express');

const app = express();

const pool = require('./queries')
const port = 3001;

app.listen(3001, () => {
    console.log(`server is listening on port ${port}`)
});

// express.js middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//get, post, put, delete methods

app.get('/', (req, res) => {

    pool.query('SELECT COUNT(*) FROM flashcards', (error, results) => {
        if(error) {
            throw error
        }

        res.json(results.rows.length)
        console.log("Row count: %d", results.rows.length);
    })
})

// Post flashcard to database

app.post('/browse', (req, res) => {
    const { front, back } = req.body;

    pool.query('INSERT INTO flashcards (front, back) VALUES ($1, $2)', [front, back], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send('Card added with ID: ${result.insertID}')
    })
})

// Get all flashcards in table

app.get('/flashcards', (req, res) => {
    pool.query('SELECT * FROM flashcards ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error
        }
        res.json(results.rows)
    })
})

app.get('/browse', (req, res) => {
    pool.query('SELECT * FROM flashcards ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error
        }
        res.json(results.rows)
    })
})

//Get flashcard by id

app.get('/card/:id', (req, res) => {
    const { id } = req.params;

    pool.query('SELECT * FROM flashcards WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        res.json(results.rows[0])
    })
})

//Update a card

app.put('/card/:id', (req, res) =>{
    const { id } = req.params;
    const { front, back } = req.body;
    pool.query('UPDATE flashcards SET front = $1, back = $2 WHERE id = $3',
    [front, back, id], 
    (error, results) => {
        if(error) {
          throw error
        }
        res.json(`User modified with ID: ${id}`)
    })
})

//Delete a card

app.delete('/card/:id', (req, res) => {
    const { id } = req.params;

    pool.query('DELETE FROM flashcards WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        res.json(`Card deleted with ID: ${id}`)
    })
})