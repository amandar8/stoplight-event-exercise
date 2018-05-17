let stopButt = document.querySelector('#stopButton');

let count = 0;
stopButt.addEventListener('click', function() {
  count++;
  //count variable increases each click
  console.log(count);
  if (count % 2 === 0) {
    //when count = even
    document.querySelector('#stopLight').style.backgroundColor = "black";
  } else {
    document.querySelector('#stopLight').style.backgroundColor = "red";
  }
});

let slowButt = document.querySelector('#slowButton');

slowButt.addEventListener('click', function() {
  count++;
  //count variable increases each click
  console.log(count);
  if (count % 2 === 0) {
    //when count = even
    document.querySelector('#slowLight').style.backgroundColor = "black";
  } else {
    document.querySelector('#slowLight').style.backgroundColor = "yellow";
  }
});

let goButt = document.querySelector('#goButton');

goButt.addEventListener('click', function() {
  count++;
  //count variable increases each click
  console.log(count);
  if (count % 2 === 0) {
    //when count = even
    document.querySelector('#goLight').style.backgroundColor = "black";
  } else {
    document.querySelector('#goLight').style.backgroundColor = "green";
  }
});
