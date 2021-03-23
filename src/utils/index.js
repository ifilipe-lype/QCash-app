import { daysOfWeek, monthsLabel } from "../constants";

export function getWeekDayHourFormat(dateInput){
    const date = new Date(dateInput);

    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes()
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${dayOfWeek} ${day}, as ${hour}:${min}`;
}

export function getDayMonthYearFormat(dateInput){
    const date = new Date(dateInput);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthsLabel[month]} ${year}`;

}

export function maxLengthOrDots(str, maxLength=65){
    return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str
}

export function calcTotalAmount(list){
    return list.reduce((total, { amount }) => +amount + total, 0);
}

export function filterListBy(list, fieldName, value){
    return [...list].filter((item) => item[fieldName] === value);
}
