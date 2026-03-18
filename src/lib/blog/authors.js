export const authors = [
  {
    id: "sonia-ignatova",
    name: "Соня Игнатова",
    specialty: "Логопед, специален педагог",
    image: "/pfps/team/sonia.png", // Път към снимката в static
    bio: "Соня е сертифициран логопед с дългогодишен опит в работата с деца. Специализира се в ранната интервенция и индивидуалния подход към всяко дете.",
    anchor: "sonia-ignatova" // Anchor за za-nas страницата
  },
  {
    id: "maria-tuputi",
    name: "Мария Тупути",
    specialty: "Ллогопед, ерготерапевт",
    image: "/pfps/team/maria.png",
    bio: "Мария комбинира логопедичната терапия с педагогически методи, за да подпомогне цялостното развитие на детето.",
    anchor: "maria-tuputi"
  }
  // Добавяй нови автори тук
];

export const getAuthorById = (id) => authors.find((a) => a.id === id);