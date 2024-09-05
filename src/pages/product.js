const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese",
    ],
  },
];

// double each element of array
const numbers = [4, 5, 10, 12, 14, 16, 18];

numbers.map((number, index) => number * 2);

// numbers.map((element, index) => {});

// map ashiglaad console.log oor bvh element uud ni console deeree gargii
// capitalize when letter is lowercase
const words = ["john", "JACOB", "jinGleHeimer", "schmidt"];

words.map((word, index) => {
  if (word.toLowerCase() === word) {
    return word.toUpperCase();
  } else {
    return word.toLowerCase();
  }
});

const object = {
  name: "helllo",
  age: 22,
};
object.age;

const employees = [
  {
    name: "Alice Johnson",
    position: "Software Engineer",
    salary: 95000,
    department: "Engineering",
    performanceRating: 4.7,
  },
  {
    name: "Bob Smith",
    position: "Product Manager",
    salary: 110000,
    department: "Product Management",
    performanceRating: 4.9,
  },
  {
    name: "Charlie Brown",
    position: "Data Analyst",
    salary: 80000,
    department: "Data Science",
    performanceRating: 4.5,
  },
  {
    name: "David Miller",
    position: "HR Specialist",
    salary: 75000,
    department: "Human Resources",
    performanceRating: 4.2,
  },
  {
    name: "Emily Davis",
    position: "Marketing Coordinator",
    salary: 85000,
    department: "Marketing",
    performanceRating: 4.8,
  },
];

const employee = {
  name: "name",
  salary: 2400,
  department: "It",
  position: "Engineer",
  performanceRating: 5,
};

const result = employees.map((employee, index) => {
  return {
    name: employee.name,
    position: employee.position,
  };
});

[
  {
    name: "Name",
    position: "Engineer",
  },
  {
    name: "Name",
    position: "Engineer",
  },
  {
    name: "Name",
    position: "Engineer",
  },
  {
    name: "Name",
    position: "Engineer",
  },
  {
    name: "Name",
    position: "Engineer",
  },
];
console.log(result);

const Page = () => {
  const result = employees.map((employee, index) => {
    return {
      name: employee.name,
      position: employee.position,
    };
  });

  return (
    <div className="bg-red-100">
      {employees.map((employee, index) => (
        <div
          style={{ display: "flex", flexDirection: "row", gap: "20px" }}
          className="flex center justify-center row"
        >
          <div>{employee.name}</div>
          <div>{employee.position}</div>
          <div>{employee.department}</div>
          <div>{employee.salary}</div>
          <div>{employee.performanceRating}</div>
        </div>
      ))}
      {/* {employees.map((employee, index) => (
        <div>hello</div>
      ))} */}
    </div>
  );
};

export default Page;
