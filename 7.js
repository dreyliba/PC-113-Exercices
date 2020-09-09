const person = [
    {
      id: 1,
      name: "andrey",
      isSelected: true,
    },
    {
      id: 2,
      name: "jackie",
      isSelected: false,
    },
    {
      id: 1,
      name: "franz",
      isSelected: false,
    },
    {
      id: 1,
      name: "Jr",
      isSelected: true,
    },
  ];
  person.map((person) => {
    console.log(person.name);
  });
  