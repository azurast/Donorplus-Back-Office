export function ParseDate (isoString) {
    return new Date(isoString).toDateString().substr(4)
}

export function CalculateAge (dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
