export const arraysIntersection = (...arrays) => {
    console.log(...arrays)
    return arrays.reduce((accumulator, currentArray) => {
        return accumulator.filter(value => currentArray.includes(value));
    });
};