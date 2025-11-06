// src/routes/resources/+page.js

export const load = async () => {
  try {
    // “база данни” от ресурси
    const resources = [
      {
        id: "primer",
        title: "Първи стъпки: Практически наръчник",
        description:
          "Кратко ръководство как да започнете с упражненията у дома. Подходящо за родители и специалисти.",
        filename: "primer.pdf",
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

    // взимаме реални URL-и за файловете в src/lib/resources
    const files = import.meta.glob("/src/lib/resources/*", {
      eager: true,
      as: "url",
    });

    // добавяме пътя към всеки ресурс
    const items = resources.map((r) => {
      const entry = Object.entries(files).find(([path]) =>
        path.endsWith(r.filename)
      );
      const href = entry ? entry[1] : "";
      const ext = r.filename.split(".").pop();
      return { ...r, href, ext };
    });

    return { items };
  } catch (err) {
    console.error("Error loading resources:", err);
    return { items: [] };
  }
};
