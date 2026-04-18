import express from "express";
import { submitLead } from "./leads.controller.js";


const router = express.Router();

router.post("/", submitLead);

export default router;