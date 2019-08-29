// CODE here for your Lambda Classes

//classes
class Person  {
    constructor(info) {
      this.name = info.name;
      this.location = info.location;
      this.age = info.age;
      this.gender = info.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  class Instructor extends Person {
    constructor(instructorInfo) {
      super(instructorInfo);
      this.specialty = instructorInfo.specialty;
      this.favLanguage = instructorInfo.favLanguage;
      this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject)  {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}`;
    }
  }
  
  class Student extends Person  {
    constructor(studentInfo)  {
      super(studentInfo);
      this.previousBackground = studentInfo.previousBackground;
      this.className = studentInfo.className;
      this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects() {
      return this.favSubjects.forEach(element => {
        console.log(element);
      });
    }
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject)  {
      return `${this.name} has begun sprint challenge on ${subject}`;
    }
  }

  class ProjectManager extends Instructor {
    constructor(projectManagerInfo) {
      super(projectManagerInfo);
      this.gradClassName = projectManagerInfo.gradClassName;
      this.favInstructor = projectManagerInfo.favInstructor;
    }
    standUp(slackChannel) {
      return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
    debugsCode(student, subject)  {
      return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
  }
  

  //objects
  const bernard = new Instructor({
    name: 'Bernard',
    location: 'Accra',
    age: 39,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Desktop Applications',
    catchPhrase: `It's critical`
  });
  

  const manuel = new Instructor({
    name: 'Manuel',
    location: 'Lapas',
    age: 43,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back end',
    catchPhrase: `Back in my day...`
  });
  
  const jacob = new Student({
    name: 'Jacob',
    location: 'Abeka',
    age: 25,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Mobile Apps',
    catchPhrase: `Study Math and English first and all other things will be added unto you`,
    previousBackground: 'IT Support',
    className: 'WEB7',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const sam = new Student({
    name: 'Sam',
    location: 'Circle',
    age: 22,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Web Apps',
    catchPhrase: `Awesome Sauce`,
    previousBackground: 'Tech retailer',
    className: 'WEBEU4',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });


  const emmanuel = new ProjectManager({
    name: 'Emmanuel',
    location: 'Kasoa',
    age: 29,
    gender: 'male',
    favLanguage: 'Swift',
    specialty: 'Front-End',
    catchPhrase: `It's too easy`,
    gradClassName: 'iOS6',
    favInstructor: 'Lukas'
  });

  const kevin = new ProjectManager({
    name: 'Kevin',
    location: 'Madina',
    age: 30,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-End',
    catchPhrase: `Better player`,
    gradClassName: 'CS3',
    favInstructor: 'Lukas'
  });