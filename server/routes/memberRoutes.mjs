import express from 'express';
import db from '../db.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

// GET all members
router.get('/', async (req, res) => {
  try {
    const members = await db.collection('members').find().toArray();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new member
router.post('/', async (req, res) => {
  try {
    const newMember = req.body;
    const result = await db.collection('members').insertOne(newMember);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE member
router.delete('/:id', async (req, res) => {
  try {
    await db.collection('members').deleteOne({
      _id: new ObjectId(req.params.id)
    });
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;