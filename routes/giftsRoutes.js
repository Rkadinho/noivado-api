const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/gifts', (req, res) => {
  try {
    prisma.gift
      .findMany()
      .then(gifts => {
        return res.send({ gifts })
      })
      .catch(e => console.log(e))
  } catch (error) {
    return res.status(500).send('Erro ao buscar presentes')
  }
});

router.post('/addGift', (req, res) => {
  const { name, choseBy } = req.body;

  try {
    prisma.gift
      .create({
        data: {
          name,
          choseBy
        }
      })
      .then(gift => {
        return res.status(201).send('Presente Adicionado com sucesso!')
      })
  } catch (error) {
    console.warn(error)

    return res.status(500).send('Error ao adicionar presente')
  }
});

router.post('/toChose', async (req, res) => {
  const { guestName, giftId } = req.body;

  try {
    const gitf = await prisma.gift.update({
      where: {
        id: giftId
      },
      data: {
        choseBy: guestName
      }
    })
    if (gitf) {
      return res.status(200).send('presente escolhido com sucesso!')
    }
    return res.status(500).send('Não encontrado')
  } catch (error) {
    console.warn(error)
    return res.status(500).send('Erro ao escolher o presente.')
  }
});

router.post('/unselect', async (req, res) => {
  const { id } = req.body;

  try {
    const gift = await prisma.gift.update({
      data: {
        choseBy: ''
      },
      where: {
        id
      },
    })
    if (gift) {
      return res.status(200).send('Presente desvinculado com sucesso!')
    }
    return res.status(500).send('Não encontrado')
  } catch (error) {
    console.warn(error)
    return res.status(500).send('Erro ao desvincular o presente.')
  }
});

router.put('/editGift/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const gift = await prisma.gift.update({
      where: {
        id
      },
      data: {
        name
      }
    })
    if (gift) {
      return res.status(200).send('Presente editado com sucesso!')
    }
    return res.status(500).send('Não encontrado')
  } catch (error) {
    console.warn(error)
    return res.status(500).send('Erro ao editar o presente.')
  }
});

router.delete('/deleteGift/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.gift.delete({
      where: {
        id
      }
    })
    return res.send('Deletado')
  } catch (error) {
    console.warn(error)
    return res.status(500).send({
      code: 500,
      error
    })
  }
});

module.exports = router;