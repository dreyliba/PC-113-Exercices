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
  const personWithDate = person.map((person) => {
    person.date = new Date();
    return person;
  });
  console.log(personWithDate);