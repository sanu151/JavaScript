// Constractor Function

function students(_name, _stream, _semister) {
  this.name = _name;
  this.stream = _stream;
  this.semister = _semister;

  this.studentData = () => {
    console.log(
      `I am ${this.name}, I am doing ${this.stream} from ABC University, This is my ${this.semister} semister`
    );
  };
}

let student1 = new students("Supriyo Das", "BCA", "VI");
let student2 = new students("Rupa Das", "BBA", "III");

student1.studentData();
student2.studentData();
