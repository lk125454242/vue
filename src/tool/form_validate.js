exports.username = (value) => {
    var length = value.length;
    if (length < 6 || length > 22 || /[^A-z0-9]/.test(value) || /^[^A-z]/.test(value)) {
        return false;
    }
    return true;
}
exports.password = (value) => {
    var length = value.length;
    if (length < 6 || length > 22 || /[^A-z0-9]/.test(value)) {
        return false;
    }
    return true;
}
exports.phone = (value) => {
    if (!/^1[35789]\d{9,9}$/.test(value)) {
        return false;
    }
    return true;
}