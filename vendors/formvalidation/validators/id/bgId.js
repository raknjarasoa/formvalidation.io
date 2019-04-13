import isValidDate from '../../utils/isValidDate';
export default function bgId(value) {
    if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
        return false;
    }
    const v = value.replace(/\s/g, '');
    let year = parseInt(v.substr(0, 2), 10) + 1900;
    let month = parseInt(v.substr(2, 2), 10);
    const day = parseInt(v.substr(4, 2), 10);
    if (month > 40) {
        year += 100;
        month -= 40;
    }
    else if (month > 20) {
        year -= 100;
        month -= 20;
    }
    if (!isValidDate(year, month, day)) {
        return false;
    }
    let sum = 0;
    const weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    for (let i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = (sum % 11) % 10;
    return `${sum}` === v.substr(9, 1);
}