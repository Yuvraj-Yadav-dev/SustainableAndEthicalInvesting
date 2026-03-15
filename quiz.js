function submitQuiz() {
  let score = 0;


  let answers = document.querySelectorAll('input[type="radio"]:checked');


  answers.forEach((answer) => {
    score += Number(answer.value);
  });


  let resultText = "";


  if (score === 5)
    resultText = "🌟 Excellent! You understand ESG investing very well.";
  else if (score >= 3)
    resultText =
      "👍 Good! You have a basic understanding of sustainable investing.";
  else resultText = "📚 Keep learning! Explore the learning modules again.";
   document.getElementById("result").innerHTML =
    "Your Score: " + score + "/5 <br>" + resultText;
}


function restartQuiz() {
  location.reload();
}


