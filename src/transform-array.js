const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    const res = [];

    const commands = ['--discard-next', '--discard-prev', '--double-prev', '--discard-next', 'discarded'];
    const pushFunc = item => {
        if (!commands.includes(item)) {
            res.push(item)
        }
    }

    arr.forEach((item, key) => {
        if (item !== undefined) {
            if (item === '--discard-next') {
                arr[key+1] = 'discarded';
            } else if (item === '--discard-prev') {
                res.pop();
            } else if (item === '--double-next') {
                pushFunc(arr[key + 1]);
            } else if (item === '--double-prev') {
                pushFunc(arr[key - 1]);
            } else {
                if (arr[key - 1] !== '--discard-next') {
                    pushFunc(item);
                }
            }
        }
    })

    return res;
}

module.exports = {
    transform
};
