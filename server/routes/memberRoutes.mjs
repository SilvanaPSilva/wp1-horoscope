import express from 'express';

const router = express.Router();

// tuas rotas aqui
router.get('/', (req, res) => {
  res.json({ message: 'Members route works' });
});

export default router;