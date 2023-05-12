import { Router } from "express";
import {createNote,getNotes, updateNoteStatus} from "../controllers/note.js";

const router = Router();

router.get('/',getNotes)

router.post('/', createNote)

router.put('/:id', updateNoteStatus);

export default router