import express from "express"
import { createcust, deletecust, updatecust } from "../controller/custcontroller.js";


const router = express.Router();

router.post("/create",createcust)

router.delete("/delete/:id", deletecust);

router.put("/updatecust/:id", updatecust);




export default router

