export type Status = ONTIME | LATE | Absent

export type ONTIME = "On-Time"

export type LATE = "Late"

export type Absent = "Absent"

export interface Attendance {
    id : string
    userId: string
    userPictUrl : string
    isPictValid : boolean
    time: Date
    isAbsenceCoorValid : boolean
    status: Status
    absenceLocation: Coordinate
    QRLocation: Coordinate
    QRDate: Date
}

export interface Coordinate {
    latitude : number
    longitude: number
}

export const attendances : Attendance[] = []