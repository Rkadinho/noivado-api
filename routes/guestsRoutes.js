const express = require('express');
const router = express.Router();
const db = require('../db/dbGuests');

router.get('/guests', (req, res) => {
  db.all(
    'SELECT * FROM guests', 
    (error, guests) => {
        if(error) {
          return res.status(500).send('Erro ao buscar a lista de convidados');
        }
        res.json(guests);
    })
});

router.post('/addGuest', (req, res) => {
  const { name, code } = req.body;

  db.run('INSERT INTO guests (name, code) VALUES (?, ?)', 
    [name, code], 
    (error) => {
      if(error) {
        return res.status(500).send('Error ao adicionar convidado.');
      }
      res.send('Convidado adicionado com sucesso!');
  });
});

router.put('/editGuest/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  db.run('UPDATE guests SET name = ? WHERE id = ?', 
  [name, id],
  (error) => {
    if(error) {
      return res.status(500).send('Erro ao editar o convidado.');
    }
    res.send('convidado editado com sucesso!');
  });
});

router.delete('/deleteGuest/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM guests WHERE id = ?',
  [id],
  (error) => {
    if(error) {
      return res.status(500).send('Erro ao excluir o convidado.');
    }
    res.send('Convidado exlucido com sucesso!');
  });
});

module.exports = router;