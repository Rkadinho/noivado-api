const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/guests', async (req, res) => {
  try {
    const guests = await prisma.guest.findMany()
    return res.status(200).send({ guests })
  } catch (error) {
    console.warn(error)
    return res.status(500).send({
      code: 500,
      msg: 'Falha ao buscar',
      error
    })
  }
});

router.post('/addGuest', async (req, res) => {
  const { name, code } = req.body;

  try {
    const guest = await prisma.guest.create({
      data: {
        name,
        code
      }
    })
    if (guest) {
      return res.status(201).send('Criada')
    }
    return res.status(500).send('Falha ao adicionar')
  } catch (error) {
    console.warn(error)
    return res.status(500).send({
      code: 500,
      error
    })
  }
});

router.post('/status', async (req, res) => {
  const { id, status } = req.body;

  try {
    const guest = await prisma.guest.update({
      data: {
        status
      },
      where: {
        id
      }
    })
    if (guest) {
      return res.status(201).send('Status atualizado')
    }
    return res.status(500).send('Falha ao atualizar')
  } catch (error) {
    console.warn(error)
    return res.status(500).send({
      code: 500,
      error
    })
  }
});

router.put('/editGuest/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const guest = await prisma.guest.update({
      data: {
        name
      },
      where: {
        id
      }
    })
    if (guest) {
      return res.status(201).send('Atualizado')
    }
    return res.status(500).send('Falha ao atualizar')
  } catch (error) {
    console.warn(error)
    return res.status(500).send({
      code: 500,
      error
    })
  }
});

router.delete('/deleteGuest/:id', async (req, res) => {
  const { id } = req.params;

  if (!existingGuest) {
    return res.status(404).send('O hóspede que você está tentando excluir não existe.');
  }

  try {
    await prisma.guest.delete({
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