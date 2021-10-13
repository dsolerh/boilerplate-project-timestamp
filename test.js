const d = new Date("05 October 2011");

d.setHours(-d.getUTCHours())
console.log("Hours: ",d.getHours());
console.log("Hours: ",d.getUTCHours());

console.log("Date: " + d);
console.log("Date (UTC): " + d.toUTCString());
console.log("Date (ISO): " + d.toISOString());
console.log("Date (Date): " + d.toDateString());
console.log("Date (JSON): " + d.toJSON());
console.log("Date (GMT): " + d.toGMTString());
console.log("Date (Locale): " + d.toLocaleDateString());
console.log("Date (string): " + d.toString());
console.log("Date (locale-string): " + d.toLocaleString());
console.log("Date (locale-string): " + d.valueOf());
console.log("**********************");
console.log("Date (unix): ", d.valueOf());
