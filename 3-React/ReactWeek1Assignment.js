class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
    registerStudent(studentToRegister) {
        const duplicates = this.students.filter((eachstudent) => {
            return studentToRegister.email === eachstudent.email
        });
        if (duplicates.length === 0) {
            this.students.push(studentToRegister)
        }
    }  
}
