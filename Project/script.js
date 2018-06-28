function calculate(){
var test_per =document.getElementById('test_per').value;
var homework_per = document.getElementById('homework_per').value;
var quiz_per = document.getElementById('quiz_per').value;
var classPar_per = document.getElementById('classPar_per').value;
var finalExam_per = document.getElementById('finalExam_per').value;

var test_score = document.getElementById('test_score').value;
var homework_score = document.getElementById('homework_score').value;
var quiz_score = document.getElementById('quiz_score').value;
var classPar_score = document.getElementById('classPar_score').value;
var extraCredit_score = document.getElementById('extraCredit_score').value;

var want_score = document.getElementById('want_score').value;

var perTotal = 0;
perTotal = +test_per + +homework_per + +quiz_per + +classPar_per + +finalExam_per;


var tot = 0;

var radA = document.getElementById('radA')
var radB = document.getElementById('radB')
var radC = document.getElementById('radC')
var radD = document.getElementById('radD')
var radF = document.getElementById('radF')


if ((radA.checked)){
  radA = 90;
  tot = (((test_per*test_score) + (homework_per*homework_score) + (quiz_per*quiz_score) + (classPar_per*classPar_score)) / 100);
  var calc_score = ((radA - tot - (extraCredit_score)) / finalExam_per);
}
else if ((radB.checked)){
  radB = 80;
  tot = (((test_per*test_score) + (homework_per*homework_score) + (quiz_per*quiz_score) + (classPar_per*classPar_score)) / 100);
  var calc_score = (radB - tot - (extraCredit_score)) / finalExam_per;
}
else if ((radC.checked)){
  radC = 70;
  tot = (((test_per*test_score) + (homework_per*homework_score) + (quiz_per*quiz_score) + (classPar_per*classPar_score)) / 100);
  var calc_score = (radC - tot - (extraCredit_score)) / finalExam_per;
}
else if ((radD.checked)){
  radD = 60;
  tot = (((test_per*test_score) + (homework_per*homework_score) + (quiz_per*quiz_score) + (classPar_per*classPar_score)) / 100);
  var calc_score = (radD - tot - (extraCredit_score)) / finalExam_per;
}
else if ((radF.checked)){
  radF = 59;
  tot = (((test_per*test_score) + (homework_per*homework_score) + (quiz_per*quiz_score) + (classPar_per*classPar_score)) / 100);
  var calc_score = (radF - tot - (extraCredit_score)) / finalExam_per;
}
else {
  tot = (((test_per*test_score) + (homework_per*homework_score) + (quiz_per*quiz_score) + (classPar_per*classPar_score)) / 100);
  var calc_score = (want_score - tot - (extraCredit_score)) / finalExam_per;
}

if (perTotal <= 100) {
  document.getElementById('output_score').value = (calc_score*100);
}
else {
  alert("Weights dont add up to 100");
  //document.getElementById('output_score').value = "Weights dont add upto 100"
}

document.getElementById('test_per').disabled = true;
document.getElementById('homework_per').disabled = true;
document.getElementById('quiz_per').disabled = true;
document.getElementById('classPar_per').disabled = true;
document.getElementById('finalExam_per').disabled = true;

document.getElementById('test_score').disabled = true;
document.getElementById('homework_score').disabled = true;
document.getElementById('quiz_score').disabled = true;
document.getElementById('classPar_score').disabled = true;
document.getElementById('extraCredit_score').disabled = true;

document.getElementById('want_score').disabled = true;
document.getElementById('output_score').disabled = true;

document.getElementById('radA').disabled = true;
document.getElementById('radB').disabled = true;
document.getElementById('radC').disabled = true;
document.getElementById('radD').disabled = true;
document.getElementById('radF').disabled = true;

document.getElementById('clearSelection').disabled = true;
}

function reset(){
  document.getElementById('test_per').value = '';
  document.getElementById('homework_per').value = '';
  document.getElementById('quiz_per').value = '';
  document.getElementById('classPar_per').value = '';
  document.getElementById('finalExam_per').value = '';

  document.getElementById('test_score').value = '';
  document.getElementById('homework_score').value = '';
  document.getElementById('quiz_score').value = '';
  document.getElementById('classPar_score').value = '';
  document.getElementById('extraCredit_score').value = '';

  document.getElementById('want_score').value = '';
  document.getElementById('output_score').value = '';

  document.getElementById('radA').checked = false;
  document.getElementById('radB').checked = false;
  document.getElementById('radC').checked = false;
  document.getElementById('radD').checked = false;
  document.getElementById('radF').checked = false;

  document.getElementById('test_per').disabled = false;
  document.getElementById('homework_per').disabled = false;
  document.getElementById('quiz_per').disabled = false;
  document.getElementById('classPar_per').disabled = false;
  document.getElementById('finalExam_per').disabled = false;

  document.getElementById('test_score').disabled = false;
  document.getElementById('homework_score').disabled = false;
  document.getElementById('quiz_score').disabled = false;
  document.getElementById('classPar_score').disabled = false;
  document.getElementById('extraCredit_score').disabled = false;

  document.getElementById('want_score').disabled = false;
  document.getElementById('output_score').disabled = true;

  document.getElementById('radA').disabled = false;
  document.getElementById('radB').disabled = false;
  document.getElementById('radC').disabled = false;
  document.getElementById('radD').disabled = false;
  document.getElementById('radF').disabled = false;

  document.getElementById('clearSelection').disabled = false;
}
function clearSelection(){
  document.getElementById('radA').checked = false;
  document.getElementById('radB').checked = false;
  document.getElementById('radC').checked = false;
  document.getElementById('radD').checked = false;
  document.getElementById('radF').checked = false;
}
