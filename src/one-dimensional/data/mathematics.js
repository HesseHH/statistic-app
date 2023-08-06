export const round = (valueToRounded, roundedTo) => 
    Math.round(valueToRounded * Math.pow(10, roundedTo)) / Math.pow(10, roundedTo);
