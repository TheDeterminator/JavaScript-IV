// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.gender = props.gender;
    this.location = props.location;
  }

  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  perfectGrade(student, subject) {
    return `${student.name} receives a perfect grade on ${subject}`;
  }

  grade(student) {
    let points = Math.floor(Math.random() * (50 + 50) - 50);
    console.log(`${student.name} had a ${student.grade} and it changed by ${points} points resulting in a ${student.grade + points}`);
    student.grade = student.grade + points;
    return student.grade;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = Math.floor(Math.random() * 100);
  }

  listsSubjects(subjects) {
    subjects.forEach(element => {return element});
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }

  graduate() {
    if (this.grade >= 70) {
      return `${this.name} has graduated!`;
    } else {
      return `Student needs furhter grading`;
    }
  }


}

class ProjectManagers extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }

  debugsCode(student, subject) {
    return `${student.name} debugs ${subject}`;
  }
}

const patrick = new ProjectManagers({
  "name": "patrick",
  "age": 35,
  "gender": "Male",
  "location": "New Hampshire",
  "specialty": "Student Success",
  "favLanguage": "JavaScript",
  "catchPhrase": `You're never too old to program`,
  "gradClassName": "CS2 ?",
  "favInstructor": "Josh"
});

const themysgandra = new Student({
  "name": "Themysgandra",
  "age": 102,
  "gender": "Non-comforming",
  "location": "Truth or Consequences, New Mexico",
  "className": "CS2030",
  "favSubjects": "Node.js, Express, MongoDB"
})
console.log(patrick);
console.log(patrick.standUp("slack184"));
console.log(themysgandra);
console.log(patrick.grade(themysgandra));
console.log(patrick.grade(themysgandra));
console.log(patrick.grade(themysgandra));
console.log(patrick.grade(themysgandra));
console.log(themysgandra.graduate());
