"use strict";
var e1 = {
    name: "Max",
    privileges: ["admin"],
    startData: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startData" in emp) {
        console.log("StartDate: " + emp.startData);
    }
}
printEmployeeInformation(e1);
