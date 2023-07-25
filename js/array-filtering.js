function getPassingGrades (scores, cutoff) {
  function isPassing (score) {
    return score >= cutoff;
  }
  return scores.filter (isPassing);
}

const scores = [95.5, 76.3, 52.4, 60.0, 88.5, 76.0];

let passingScores = getPassingGrades (scores, 60.0);
console.log ("Passing Scores: " + passingScores);
console.log (typeof (passingScores));

passingScores = scores.filter (score => score >= 60);
console.log ("Passing Scores: ", passingScores);
console.log (typeof (passingScores));

passingScores = scores.filter ((score) => score >= 60.0);
console.log ("Passing Scores: ", passingScores);
console.log (typeof (passingScores));