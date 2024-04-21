// static function in class
function main() {
  const exam1 = 89;
  const exam2 = 93;
  const exam3 = 75;

  console.log(Exam.average(exam1, exam2, exam3));
}

class Exam {
  // Function inside class
  static average(score1, score2, score3) {
    return Math.round((score1 + score2 + score3) / 3);
  }
}

main();
