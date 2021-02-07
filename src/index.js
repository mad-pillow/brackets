module.exports = function check(str, bracketsConfig) {
    let array = [];
    if (str.length % 2 != 0) {
        return false;
    }
    for (let i = 0; i < bracketsConfig.length; i++) {
        array.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    for (let i = 0; i < array.length; i++) {
        if (str.includes(array[i])) {
            str = str.replace(array[i], "");
            i = -1;
        }
    }
    if (str.length != 0) {
        return false;
    } else {
        return true;
    }
};
