const express = require('express');
const router = express.Router();
const db = require('../db/dbGifts');

router.get('/gifts', (req, res) => {
  db.all(
    'SELECT * FROM gifts', 
    (error, gifts) => {
      if(error) {
        return res.status(500).send('Erro ao buscar presentes');
      }
      res.json(gifts);
    }
  )
});

router.post('/addGift', (req, res) => {
  const { name } = req.body;

  db.run('INSERT INTO gifts (name) VALUES (?)',
    [name],
    (error) => {
      if(error) {
        return res.status(500).send('Error ao adicionar presente');
      }
      res.send('Presente Adicionado com sucesso!');
    }
  )
});

router.post('/toChose', (req, res) => {
  const { guestName, giftId } = req.body;

  db.run('UPDATE gifts SET choseBy = ? WHERE id = ?', 
  [guestName, giftId],
  (error) => {
    if(error) {
      return res.status(500).send('Erro ao escolher o presente.');
    }
    res.send('presente escolhido com sucesso!')
  })
});

router.put('/editGift/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  db.run('UPDATE gifts SET name = ? WHERE id = ?', 
  [name, id],
  (error) => {
    if(error) {
      return res.status(500).send('Erro ao editar o presente.');
    }
    res.send('Presnete editado com sucesso!');
  });
});

router.delete('/deleteGift/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM gifts WHERE id = ?',
  [id],
  (error) => {
    if(error) {
      return res.status(500).send('Erro ao excluir o presente.');
    }
    res.send('Presente exlucido com sucesso!');
  });
});

module.exports = router;