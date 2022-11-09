// src/api/index.ts

import express, { Router } from "express";

const router: Router = express.Router();

router.use("/media", require("./media"));

module.exports = router;
