$(function(){
  // you should give id to form that is to be submitted.
  // you had syntax error here. missing ) after function 
  $("#my-form").submit(function(e) { // change # to .
      var value = $("#name").val(); // you should have #input_name

      $('#diploma-name').text(value); // text function takes value as parameter
      e.preventDefault();
  });
});


function displayTextInput(){
  $("#landing").hide();
  $("#textinput").show();
  $("#minilogo").show();
}

function displayDiploma(){
    $("#textinput").hide();
    $("#minilogo").hide();
    $("#diploma").show();
    window.print();
    setTimeout(function(){
      showText();
    },5000);
}

function printDiploma() {
  //Hide all other elements other than printarea.
  $("#diploma").show();
};

function showText(){
  $("#textinput").hide();
  $("#diploma").hide();
  $('#minilogo').show();
  $("#text1").show();
  setTimeout(function(){
    $("#text1").hide();
    $("#text2").show();
  },6000);
  setTimeout(function(){
    $("#text2").hide();
    $("#minilogo").hide();
    $("#landing").show();
    $('input').val('');
  },10000);
}



var CVS = document.createElement('canvas'),
ctx = CVS.getContext('2d');

CVS.width  = 1023;
CVS.height = 790;
document.getElementById("diploma").appendChild(CVS); // Add canvas to DOM

// GRAPHICS TO CANVAS /////
function sendToCanvas( ob ){
var img = new Image();
img.onload = function(){
ctx.drawImage(img, 0, 0);
ctx.font = ob.fontWeight+' '+ob.fontSize+' '+ob.fontFamily;
ctx.textAlign = 'center';
ctx.fillStyle = ob.color;
ctx.fillText(ob.text, CVS.width/2, CVS.height/1.75);
};
img.src = ob.image;
}
///////////////////////////

// DO IT! /////////////////

var cvsObj = {
image      : "assets/media/diploma.png",
text       : "Please Enter Your Name",
fontFamily : "Montserrat",
fontWeight : "500",
fontSize   : "20pt",
color      : "black"
};
sendToCanvas( cvsObj );   



$('input').on("input", function(){
cvsObj.text = this.value ;
sendToCanvas( cvsObj );
});
