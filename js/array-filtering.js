function getPassingGrades (scores, cutoff) {
  function isPassing (score) {
    return score >= cutoff;
  }
  return scores.filter (isPassing);
}

const passingScores = getPassingGrades ([95.5, 76.3, 52.4, 60.0, 88.5, 76.0], 60.0);
console.log ("Passing Scores: " + passingScores);