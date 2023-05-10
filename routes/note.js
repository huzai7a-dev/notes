import { Router } from "express";
import {createNote,getNotes} from "../controllers/note.js";

const router = Router();

router.get('/',getNotes)

router.post('/', createNote)

export default router