const json = `{
  "students": [
    {"name": "Анна Петрова", "subjects": [{"title": "Математика", "grades": [5, 4, 5]}, {"title": "Физика", "grades": [3, 2, 4]}]},
    {"name": "Иван Сидоров", "subjects": [{"title": "История", "grades": [4, 4, 5]}, {"title": "Химия", "grades": [5, 5, 5]}]},
    {"name": "Мария Кузнецова", "subjects": [{"title": "Биология", "grades": [2, 3, 2]}, {"title": "Литература", "grades": [4, 5, 4]}]},
    {"name": "Алексей Иванов", "subjects": [{"title": "Информатика", "grades": [5, 5, 4]}, {"title": "Английский", "grades": [3, 3, 3]}]},
    {"name": "Елена Горбачёва", "subjects": [{"title": "Математика", "grades": [2, 5, 4]}, {"title": "Физика", "grades": [5, 4, 5]}]},
    {"name": "Дмитрий Лебедев", "subjects": [{"title": "Химия", "grades": [3, 4, 3]}, {"title": "История", "grades": [5, 5, 5]}]},
    {"name": "Ольга Смирнова", "subjects": [{"title": "Литература", "grades": [2, 4, 3]}, {"title": "Биология", "grades": [4, 4, 5]}]},
    {"name": "Сергей Попов", "subjects": [{"title": "Физика", "grades": [3, 3, 4]}, {"title": "Математика", "grades": [4, 4, 4]}]},
    {"name": "Наталья Волкова", "subjects": [{"title": "Английский", "grades": [2, 2, 3]}, {"title": "Информатика", "grades": [5, 4, 5]}]},
    {"name": "Павел Морозов", "subjects": [{"title": "История", "grades": [4, 5, 4]}, {"title": "Химия", "grades": [3, 2, 4]}]},
    {"name": "Татьяна Зайцева", "subjects": [{"title": "Биология", "grades": [5, 5, 5]}, {"title": "Литература", "grades": [4, 4, 4]}]},
    {"name": "Артём Фёдоров", "subjects": [{"title": "Математика", "grades": [3, 2, 3]}, {"title": "Физика", "grades": [4, 5, 4]}]},
    {"name": "Юлия Орлова", "subjects": [{"title": "Английский", "grades": [4, 5, 5]}, {"title": "Информатика", "grades": [5, 5, 5]}]},
    {"name": "Максим Соколов", "subjects": [{"title": "Химия", "grades": [2, 3, 4]}, {"title": "История", "grades": [4, 4, 3]}]},
    {"name": "Ксения Новикова", "subjects": [{"title": "Литература", "grades": [5, 4, 5]}, {"title": "Биология", "grades": [3, 3, 4]}]},
    {"name": "Роман Васильев", "subjects": [{"title": "Физика", "grades": [2, 2, 2]}, {"title": "Математика", "grades": [3, 4, 3]}]}
  ]
}`;

function printTwos(jsonString) {
  const data = JSON.parse(jsonString);
  const students = data.students;

  for (const student of students) {
    const hasTwo = student.subjects.some(subject => subject.grades.includes(2));
    if (hasTwo) {
      console.log(student.name);
    }
  }
}

printTwos(json);