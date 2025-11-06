// src/routes/resources/[id]/+page.js

export const load = async ({ params }) => {
  const { id } = params;

  // симулираме "база данни" с ръчно описани ресурси
  const resources = [
    {
      id: "primer",
      title: "Първи стъпки: Практически наръчник",
      description:
        "Кратко ръководство как да започнете с упражненията у дома. Подходящо за родители и специалисти.",
      filename: "пъзел.pdf",
      tags: ["родители", "упражнения"],
    },
    {
      id: "poster",
      title: "Плакат: Азбуката",
      description:
        "Красив плакат с българската азбука, подходящ за разпечатване в класната стая или у дома.",
      filename: "poster.png",
      tags: ["визуален материал", "азбука"],
    },
  ];

  // намираме съответния ресурс по id
  const item = resources.find((r) => r.id === id);

  if (!item) {
    return { status: 404, error: new Error("Ресурсът не е намерен") };
  }

  // взимаме път към файла
  const files = import.meta.glob("/src/lib/resources/*", {
    eager: true,
    as: "url",
  });
  const entry = Object.entries(files).find(([path]) =>
    path.endsWith(item.filename)
  );
  const href = entry ? entry[1] : "";

  return {
    item: {
      ...item,
      href,
      ext: item.filename.split(".").pop(),
    },
  };
};
