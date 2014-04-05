window.onload= function()
{
  var but1 = document.getElementById('player1');
  but1.backgroundColor = "green";
  document.body.style.backgroundImage ='url("static/chaos.jpg")';
  var buts = document.querySelectorAll('button');
  buts[0].style.position='relative';
  buts[1].style.position='relative';
  buts[0].style.left='35%';
  buts[1].style.left='37%';
  buts[0].style.marginTop='10%';
  buts[1].style.marginTop='10%';
}