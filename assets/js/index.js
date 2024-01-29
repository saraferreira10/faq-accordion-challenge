function showAnswer(idxQuestion) {
  const allAnswers = document.getElementsByClassName('div_answer');
  let allIcons = document.getElementsByClassName('div_img');

  for (let i = 0; i < allAnswers.length; i++) {
    if (idxQuestion === i) {
      let answer = allAnswers[i];
      answer.style.display = answer.style.display === 'flex' ? 'none' : 'flex';
      let icon = allIcons[i].querySelector('img');
      icon.setAttribute('src', (icon.getAttribute('src') === './assets/images/icon-plus.svg' ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg'));
      i = allAnswers.length;
    }
  }
}
