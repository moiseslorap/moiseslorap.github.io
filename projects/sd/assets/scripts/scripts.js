$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

function displayDiploma(){
  document.getElementById("landing").style.display="none";
  document.getElementById("diploma").style.display="block";
}

function saveInput(){

}

function showText(){
  document.getElementById("diploma").style.display="none";
  document.getElementById("text1").style.display="block";
  setTimeout(function(){
    document.getElementById("text1").style.display="none";
    document.getElementById("text2").style.display="block";
  },6000);
}
