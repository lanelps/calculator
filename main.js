var arr = [];

function insert(num){
    $( "#display" ).text( num );
    arr.push(num);
    console.log(arr);
}

function clean() {
    $( "#display" ).text( "0" );
    //clear array
    arr = [];
    console.log(arr);
  } 

  function equals() {
    var output = eval(arr.join(''));
    $( "#display" ).text( output );
    arr = [];
    console.log(arr);
    console.log(output);
  }

  console.log(arr);

//   $( "#decimal" ).click(function() {
//     $( "#display" ).text( "." );
//     arr.push(".");
//     console.log(arr);
//   });


//   $( "#zero" ).click(function() {
//     $( "#display" ).text( "0" );
    
//     if (arr[0] === "0"){
//         arr = [];
//     } else { 
//         arr.push("0"); 
//     }
//     console.log(arr);
//   });

//   $( "#one" ).click(function() {
//     $( "#display" ).text( "1" );
//     arr.push("1");
//     console.log(arr);
//   });
//   $( "#two" ).click(function() {
//     $( "#display" ).text( "2" );
//     arr.push("2");
//     console.log(arr);
//   });
//   $( "#three" ).click(function() {
//     $( "#display" ).text( "3" );
//     arr.push("3");
//     console.log(arr);
//   });
//   $( "#four" ).click(function() {
//     $( "#display" ).text( "4" );
//     arr.push("4");
//     console.log(arr);
//   });
//   $( "#five" ).click(function() {
//     $( "#display" ).text( "5" );
//     arr.push("5");
//     console.log(arr);
//   });
//   $( "#six" ).click(function() {
//     $( "#display" ).text( "6" );
//     arr.push("6");
//     console.log(arr);
//   });
//   $( "#seven" ).click(function() {
//     $( "#display" ).text( "7" );
//     arr.push("7");
//     console.log(arr);
//   });
//   $( "#eight" ).click(function() {
//     $( "#display" ).text( "8" );
//     arr.push("8");
//     console.log(arr);
//   });
//   $( "#nine" ).click(function() {
//     $( "#display" ).text( "9" );
//     arr.push("9");
//     console.log(arr);
//   });

//   $( "#add" ).click(function() {
//     $( "#display" ).text( "+" );
//     arr.push("+");
//     console.log(arr);
//   });
//   $( "#subtract" ).click(function() {
//     $( "#display" ).text( "-" );
//     arr.push("-");
//     console.log(arr);
//   });
//   $( "#multiply" ).click(function() {
//     $( "#display" ).text( "*" );
//     arr.push("*");
//     console.log(arr);
//   });
//   $( "#divide" ).click(function() {
//     $( "#display" ).text( "/" );
//     arr.push("/");
//     console.log(arr);
//   });



  //array would start empty
  //you would click a button
  //and that button would push whatever value into that array as a string
  //add a space to the right of the number
  //once equals is pressed
  //it takes that array put it into an eval function
  //we take the result of that eval function and put it into a variable
  //then we take that variable and output it into display