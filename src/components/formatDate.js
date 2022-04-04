const formatDate = (dateFromDb) => {
    let time;

    const date = new Date().getTime();
    let m = 1000 * 60;
    let hr = 1000 * 60 * 60;
    let day = 1000 * 60 * 60 * 24;
    let month = day * 30.41;
    let yr = month * 12;

    if (dateFromDb) {
        const duration = date - dateFromDb;

        if (duration < m) {
            time = "Just now";
        } else if (duration < hr) {
            time = Math.round(duration / m) + "m";
        } else if (duration < day) {
            let durationHr = Math.round(duration / hr);
            let hrTxt = durationHr <= 1 ? "hr" : "hrs";
            time = durationHr + hrTxt;
        } else if (duration < month) {
            let durationD = Math.round(duration / day);
            time = durationD + "d";
        } else if (duration < yr) {
            let durationMo = Math.round(duration / month);
            let moTxt = durationMo <= 1 ? "month" : "months";
            time = durationMo + moTxt;
        }
    }

    return time;
};

export default formatDate;
