function Student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function()
    {
        var nl = '<br>';
        document.write('Name : '+this.name+nl);
        document.write('Age : '+this.age+nl);
        document.write('CGPA : '+this.cgpa+nl);
        document.write('Languages : '+this.lang+nl);
        document.write(nl);
    }
}

var student1 = new Student('Supriyo Das', 35, 3.99, ['Bengali', 'Hindi', 'English']);
var student2 = new Student('Rupa Das', 26, 3.23, ['Bengali', 'Hindi']);
var student3 = new Student('Rishika Das', 5, 4.15, ['Bengali', 'English']);

student1.display();
student2.display();
student3.display();