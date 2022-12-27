const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.tz.setDefault("Europe/Istanbul");

console.log("Without tz:" + dayjs());
console.log("With tz:" + dayjs.tz());

console.log("Without tz timeparse" + dayjs("14:26", "HH:mm"));
console.log("With tz timeparse" + dayjs("14:26", "HH:mm").tz());
