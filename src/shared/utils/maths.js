export const factorial = (n) => {
    if (n === 0)
        return 1;
    else
        return n * factorial(n - 1);
}

/**
 * Rounds `valueToRounded` to `roundedTo` decimales places
 * 
 * @param {number} valueToRounded 
 * @param {Number} roundedTo 
 * @returns 
 */
export const round = (valueToRounded, roundedTo) => 
    Math.round(valueToRounded * Math.pow(10, roundedTo)) / Math.pow(10, roundedTo);

/**
 * Calculates the Bernoulli distribution for a value `x`
 * 
 * @param {number} x value taken by the discrete variable
 * @param {number} p success probability
 * @returns 
 */
export const bernoulliCalc = (x, p) => {
    return Math.pow(p, x) * Math.pow(1-p, 1-x);
}

/**
 * Calculates the Poisson distribution for a value `x`
 * 
 * @param {number} mu mean
 * @param {number} x value taken by the discrete variable
 */
export const poissonCalc = (mu, x) => {
    return (Math.pow(Math.E, -mu)*Math.pow(mu, x))/factorial(x);
}