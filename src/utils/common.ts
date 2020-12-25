export const formatTimestamp = (_timestamp, format) => {
    if (_timestamp) {
        let _chuo = _timestamp.toString();
        let normal_date;
        let times = new Date(Number(_chuo));
        let time_Y = times.getFullYear();
        let time_M = (times.getMonth() + 1 < 10 ? '0' + (times.getMonth() + 1) : times.getMonth() + 1);
        let time_D = (times.getDate() < 10 ? '0' + times.getDate() : times.getDate());
        let time_h = (times.getHours() < 10 ? '0' + times.getHours() : times.getHours());
        let time_m = (times.getMinutes() < 10 ? '0' + times.getMinutes() : times.getMinutes());
        let time_s = (times.getSeconds() < 10 ? '0' + times.getSeconds() : times.getSeconds());
        // normal_date = time_Y + "-" + time_M + "-" + time_D;
        normal_date = `${time_Y}-${time_M}-${time_D}`
        if (format === 'minute') {
            normal_date = `${time_Y}-${time_M}-${time_D}    ${time_h}:${time_m}`
        }
        if (format === 'second') {
            normal_date = `${time_Y}-${time_M}-${time_D}    ${time_h}:${time_m}:${time_s}`
        }
        return normal_date;
    }
    return ''
}