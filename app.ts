type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startData: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["admin"],
  startData: new Date(),
};

type Combinable = string | number;
type Numeric = string | number;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startData" in emp) {
    console.log("StartDate: " + emp.startData);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("running");
  }
  loadCargo(amount: number) {
    console.log("Having luggages " + amount);
  }
}

interface Bird {
  kind: "bird";
  flyingSpeed: number;
}

interface Horse {
  kind: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.kind) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
}
