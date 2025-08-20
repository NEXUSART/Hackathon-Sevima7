import { Router } from "express"
import { checkAbsenceLocation, uplaodAbsance } from "../controllers/attendanceController";

const router = Router()

router.post("/check-location", checkAbsenceLocation)
router.post("/upload-absence", uplaodAbsance)

export default router;