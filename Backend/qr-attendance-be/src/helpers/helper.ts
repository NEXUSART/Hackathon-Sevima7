import { LAT_COMPANY, LON_COMPANY } from "../config/config";

export function getDistanceFromCompany(
  lat1: number,
  lon1: number
): number {
  const R = 6371;
  const dLat = deg2rad(Number(LAT_COMPANY) - lat1);
  const dLon = deg2rad(Number(LON_COMPANY) - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(Number(LAT_COMPANY))) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; 
  return distance * 1000
}

export function getDistanceFromSite(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lon2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; 
  return distance * 1000
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}


export function checkAbsenceTime(userTime: string, QRTime: string) {
  const userDate = new Date(userTime);
  const qrDate = new Date(QRTime);

  const diffMs = Math.abs(userDate.getTime() - qrDate.getTime());
  const diffMinutes = diffMs / (1000 * 60);

  return diffMinutes
}