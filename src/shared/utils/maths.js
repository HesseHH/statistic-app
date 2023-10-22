export const factorial = (n) => {
    if (n === 0)
        return 1;
    else
        return n * factorial(n - 1);
}

export const round = (valueToRounded, roundedTo) => 
    Math.round(valueToRounded * Math.pow(10, roundedTo)) / Math.pow(10, roundedTo);

export const bernoulliCalc = (x, p) => {
    return Math.pow(p, x) * Math.pow(1-p, 1-x);
}