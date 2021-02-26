
const btn = document.getElementById('questionnaire_button');
var sct = document.getElementById('science_tes');

btn.onclick = function() {
  sct.classList.toggle("science_test_deided")
  sct.classList.toggle("science_test_acsees")
  setTimeout(() => { sct.classList.toggle("science_test_acsees");sct.classList.toggle("science_test_deided");}, 2000);
}