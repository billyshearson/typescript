const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Game"],
  role: [1, "KILLING"],
};

console.log(person.age);

type People = {
  name: string;
  age: number;
};

const Takaki: People = { name: "Takaki", age: 5 };
