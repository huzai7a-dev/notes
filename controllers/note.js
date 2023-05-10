import validateNote from '../validations/note.js';
import Note from '../models/note.js';

const createNote = async (req, res) => {
  try {
    const { error } = validateNote(req.body);
    if (error) {
      return res.status(400).send(error?.details[0].message);
    }

    const note = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || 'note',
    };
    const newNote = new Note(note);

    const result = await newNote.save();
    return res.status(201).send({ data: result, message: 'Note added successfully' });
  } catch (error) {
    console.error('Error creating note:', error);
    return res.status(500).send('Internal Server Error');
  }
};

const getNotes = async (req, res) => {
  try {
    const status = req.body?.status?.toLowerCase() || 'note';

    let notes = [];
    switch (status) {
      case 'archive':
        notes = await Note.find({ status: 'archive' });
        break;
      case 'trash':
        notes = await Note.find({ status: 'trash' });
        break;
      default:
        notes = await Note.find({ status: 'note' });
        break;
    }
    return res.status(200).send(notes);
  } catch (error) {
    console.error('Error getting notes:', error);
    return res.status(500).send('Internal Server Error');
  }
};

export { createNote, getNotes };
