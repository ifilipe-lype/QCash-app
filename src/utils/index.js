import { daysOfWeek } from "../constants";

export function getWeekDayHourFormat(date){
    const date = new Date(date);

    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes()
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${dayOfWeek} ${day}, as ${hour}:${min}`;
}
