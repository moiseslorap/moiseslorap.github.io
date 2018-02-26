$(function(){
  // you should give id to form that is to be submitted.
  // you had syntax error here. missing ) after function 
  $("#my-form").submit(function(e) { // change # to .
      var value = $("#name").val(); // you should have #input_name

      $('#diploma-name').text(value); // text function takes value as parameter
      e.preventDefault();
  });
});

function displayDiploma(){
  $("#landing").hide();
  $("#diploma").show();
  $("#minilogo").show();
}

function showText(){
  printDiv();
  $("#diploma").hide();
  $("#text1").show();
  setTimeout(function(){
    $("#text1").hide();
    $("#text2").show();
  },6000);
  setTimeout(function(){
    $("#text2").hide();
    $("#minilogo").hide();
    $("#landing").show();
  },10000);
}

$(function(){
  // you should give id to form that is to be submitted.
  // you had syntax error here. missing ) after function 
  $("#my-form").submit(function(e) { // change # to .
      var value = $("#name").val(); // you should have #input_name

      $('#diploma-name').text(value); // text function takes value as parameter
      e.preventDefault();
  });
});

function printDiv() 
{

  var divToPrint=document.getElementById('ToPrint');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);
}
