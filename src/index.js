import { Router } from "express";
import itemsRoutes from "./routes/itemsRoutes.js";

const router = Router();

router.use('/items', itemsRoutes);

export default router;