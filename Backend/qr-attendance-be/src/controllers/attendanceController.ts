import { Request, Response, NextFunction } from "express";
import { checkAbsenceTime, getDistanceFromCompany, getDistanceFromSite } from "../helpers/helper";
import { JwtRequest } from "../middlewares/authMiddleware";
import { Attendance, attendances, Coordinate } from "../models/attendance";
import { randomUUID } from "crypto";

export const checkAbsenceLocation = (req: Request, res:Response, next:NextFunction) => {
    try {
        const { latitude, longitude } = req.body
        
        const distance = getDistanceFromCompany(latitude,longitude)
        console.log(distance)
        if(distance > 30){
            res.status(400).json({ message: 'distance is not valid'})
            return
        }

        res.status(200).json({ message: "success"})
    } catch (error) {
        console.error(error)
        next(error)
    }
}


export const uplaodAbsance = (req: JwtRequest, res:Response, next:NextFunction) => {
    try {
        const { userLat, userLong, userTime, QRLat, QRLong, QRTime } = req.body
        
        const distance = getDistanceFromSite(userLat,userLong, QRLong, QRTime)
        const user = req.user;

        console.log(distance)
        if(distance > 30){
            res.status(400).json({ message: 'distance is not valid'})
            return
        }

        const qrLocation : Coordinate = { latitude: QRLat, longitude: QRLong }
        const userLocation : Coordinate = {latitude: userLat, longitude: userLong}

        let absanceData : Attendance;

        const gapTime = checkAbsenceTime(userTime, QRTime);

        if(gapTime <= 30){
            absanceData = {
                            id: randomUUID(),
                            QRDate: QRTime,
                            QRLocation: qrLocation,
                            absenceLocation: userLocation,
                            userId: user?.id || "",
                            time: userTime,
                            isAbsenceCoorValid: true,
                            isPictValid:false,
                            status: "On-Time",
                            userPictUrl: ""
                        }
            attendances.push(absanceData)
            res.status(200).json({ message: "success"})
            return
        } else {
            absanceData = {
                            id: randomUUID(),
                            QRDate: QRTime,
                            QRLocation: qrLocation,
                            absenceLocation: userLocation,
                            userId: user?.id || "",
                            time: userTime,
                            isAbsenceCoorValid: true,
                            isPictValid:false,
                            status: "Late",
                            userPictUrl: ""
                        }
            attendances.push(absanceData)
            res.status(200).json({ message: "success"})
            return
        }
    } catch (error) {
        console.error(error)
        next(error)
    }
}

export const getAtendancesData = (req: JwtRequest, res:Response, next:NextFunction) => {
    
}