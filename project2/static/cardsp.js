window.onload = function()
{
    
  var bod = document.getElementById('bodi');
  bod.style.color='blue';
  bod.style.backgroundColor='white' ;
  //bod.style.display='grid';
  bod.style.overflow='hidden';
  bod.style.width='450px';
  
  var cards;
  var finaldeck = [];
    
    var testfun = function(event)
    {
        alert(event.target);
        alert('it entered the function');
    };
    
    function myFunction(e)
    { 
        //alert(e.target);
        var check = e.target;
    alert(check);
    alert('it called the fucntion in the javascript file');
check.classList.add('mychange');
}
        /**
        * Randomize array element order in-place.
        * Using Fisher-Yates shuffle algorithm.
        */
        function shuffleArray(array) 
        {
            for (var i = array.length - 1; i > 0; i--) 
            {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }  
  
  // function that builds a deck of cards
    var identifiers=[];
    var build = function()
    {
        var suit=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var colour= ['C','H','D','S'];
    
        //determines the total size of the deck 
        
        var total = suit.length*colour.length;
        var inc=0;
    
        for(var cnt=0;cnt<suit.length;cnt++)
        {
        
            for(var cnts=0; cnts<colour.length; cnts++)
            {
                identifiers[inc] = suit[cnt] + colour[cnts];
                inc++;
            }
        }
        //alert(identifiers.length);
        //alert(identifiers);
        //alert(shuffleArray(identifiers));
    };
    build();
    
    //determines the cards to be shown in the matching card game
    var choose = function()
    {
        var firstshuf = shuffleArray(identifiers);
        var temparr= [];
        
        for(var k= 0;k<8;k++)
        {
            temparr[k] = firstshuf[k];
        }
        finaldeck = shuffleArray(temparr.concat(temparr));
        
        alert(finaldeck);
    };
    choose();
    
    var testfunct = function(e)
    {
        //alert('tks is the man');
        //alert(e);
        var targ;
	if (!e) e = window.event;
	if (e.target) targ = e.target;
	//alert(targ);
        //alert(seal);
        
        
    };
    
    // creates a card from scratch and displays the type required
    var makeCard = function(cardval)
    {
        //create outer section of card
        var club = "url('static/clubs.png')";
        var heart = "url('static/heart.jpg')";
        var diamond = "url('static/diamond.png')";
        var spade = "url('static/spade.jpg')";
        var shade;
        var pic;
        var number;
        
       // var cardval = '10C';
        
        if(cardval.length===2)
        {
            number = cardval.charAt(0);
            
            if(cardval.charAt(1)==='C')
            {
                pic = club;
                shade ='black';
            }
            else if(cardval.charAt(1)==='H')
            {
                pic = heart;
                shade ='red';
            }
            else if(cardval.charAt(1)==='S')
            {
                pic = spade;
                shade ='black';
            }
            else if(cardval.charAt(1)==='D')
            {
                pic = diamond;
                shade ='red';
            }
        }
        else if(cardval.length===3)
        {
            if(cardval.charAt(2)==='C')
            {
                pic = club;
                shade ='black';
                number = 10;
            }
            else if(cardval.charAt(2)==='H')
            {
                pic = heart;
                shade ='red';
                number = 10;
            }
            else if(cardval.charAt(2)==='D')
            {
                pic = diamond;
                shade ='red';
                number = 10;
            }
            else if(cardval.charAt(2)==='S')
            {
                pic = spade;
                shade ='black';
                number = 10;
            }
        }
        
        var ele = document.createElement('div');
        ele.style.height = '130px';
        ele.style.width = '100px';
        ele.style.backgroundColor='black';
        ele.style.float='left';
       // ele.style.zIndex = '-1';
        
        // create cover for card(back)
        var cover = document.createElement('div');
        cover.style.height = '130px';
        cover.style.width = '100px';
        cover.style.backgroundImage='url("static/chaos.jpg")';
        //cover.style.backgroundColor='red';
        cover.style.float='left';
        cover.style.zIndex = '1';
        
        // create outer div for flipper
        var outerele = document.createElement('div');
        outerele.style.height = '130px';
        outerele.style.width = '100px';
        //outerele.style.backgroundColor='black';
        outerele.style.float='left';    
    
        //create middle section of card
        var inele = document.createElement('div');
        inele.style.height = '110px';
        inele.style.width = '80px';
        inele.style.backgroundColor='white';
        inele.style.top = '10px';
        inele.style.border='10px';
        inele.style.position= 'relative';
  
        //create small top display of card suit
        var topdiv= document.createElement('div');
        topdiv.style.height = '20px';
        topdiv.style.width = '20px';
        topdiv.style.position ='absolute';
        topdiv.style.backgroundImage=pic;
        topdiv.style.margin="4.5%";
        topdiv.style.backgroundSize = '20px 20px';
        
        //create centre div to display suit
        var centrdiv= document.createElement('div');
        centrdiv.style.height = '40px';
        centrdiv.style.width = '40px';
        centrdiv.style.position ='absolute';
        centrdiv.style.backgroundImage=pic;
        centrdiv.style.backgroundColor = 'white';
        
        //display the value on the card on bottom
        var lowdivpara= document.createElement('p');
        lowdivpara.innerHTML = number;
        lowdivpara.style.fontSize = '40px';
        lowdivpara.style.position = 'absolute';
        lowdivpara.style.top='28%';
        lowdivpara.style.color=shade;
        inele.appendChild(lowdivpara);
        
        //display number in top
        var topdivpara= document.createElement('p');
        topdivpara.innerHTML = number;
        topdivpara.style.fontSize = '40px';
        topdivpara.style.position = 'absolute';
        topdivpara.style.right='0%';
        topdivpara.style.bottom='27%';
        topdivpara.style.color=shade;
        inele.appendChild(topdivpara);
        
        centrdiv.style.margin="25%";
        centrdiv.style.marginTop="35%";
        centrdiv.style.backgroundSize = '40px 40px';
        
        var botdiv= document.createElement('div');
        botdiv.style.height = '20px';
        botdiv.style.width = '20px';
        botdiv.style.position ='absolute';
        botdiv.style.backgroundImage=pic;
        botdiv.style.marginTop="105%";
        botdiv.style.marginLeft="70%";
        botdiv.style.backgroundSize = '20px 20px';
        
    
    
        //add small top display to card    
        inele.appendChild(topdiv); 
        inele.appendChild(botdiv);
        inele.appendChild(centrdiv);
        inele.style.marginLeft='10px';
        //inele.className='flip-front';
  
        ele.appendChild(inele);
        ele.style.marginBottom='2px';
        ele.style.marginRight='2px';
        ele.addEventListener('click', testfunct(window.event), false);
        ele.style.float='left';
        //ele.onclick='testfun(event)';
        
        ele.className='flip-back';
        cover.className='flip-front';
        
        outerele.className='flipper';
        
        //outerele.appendChild(ele);
        outerele.appendChild(cover);
        outerele.style.marginRight='2px';
        outerele.style.marginBottom='2px';
        //ele.name=cardval;
        
        ele.setAttribute('name',cardval);
        //m = document.createAttribute('name');
        //m.value =cardval;
        //alert(m.value);
       // alert(ele.getAttribute('name'));
        //alert('this is what will happen');
        //ele.classList.add('flipper');
        bod.appendChild(outerele);
    };
    //makeCard();
    
    
    /*var mytry = document.createElement('p');
    mytry.innerHTML = 'hey';
    //mytry.onclick ='testfun(event)';
    bod.appendChild(mytry);
    //mytry.innerHTML('<div onclick="testfun(event)"> wah happen</div>');
    //var seal= 12;
    cards = document.getElementsByClassName('flipper');
    alert(cards.length);
    alert(cards);
    alert(cards[0]);
    cards[0].style.backgroundColor='red';
    cards[0].className='flip';
    for(var h = 0; h<cards.length;h++)
    {
        //cards[h].addEventListener('click', testfunct(event.target), false);
        alert('this must be annoying');
        //alert(cards[h].getAttribute('name'));
    }
    */
    
    
    //place all cards for game on screen
    var displayGame= function()
    {
        for(var j = 0; j<finaldeck.length; j++)
        {
           makeCard(finaldeck[j]);
        }
    };
    
    displayGame();

};




/*<script>
  window.onload
  {
    var ele = document.createElement('div');
    ele.style.height = '30px';
    ele.style.width = '40px';
    ele.style.color = 'blue';
    var body = document.getElementsByTagName('body');
    body.appendChild(ele);
  };
</script>
*/
/*window.onload = function()
{
  var bod = document.getElementById('bodi');
  bod.style.color='blue';
}*/
/*<script>
  window.onload
  {
    var ele = document.createElement('div');
    ele.style.height = '30px';
    ele.style.width = '40px';
    ele.style.color = 'blue';
    var body = document.getElementsByTagName('body');
    body.appendChild(ele);
  };
</script>
*/window.onload = function()
{
    
  var bod = document.getElementById('bodi');
  bod.style.color='blue';
  bod.style.backgroundColor='white' ;
  //bod.style.display='grid';
  bod.style.overflow='hidden';
  bod.style.width='450px';
  
  var cards;
  var finaldeck = [];
    
    var testfun = function(event)
    {
        alert(event.target);
        alert('it entered the function');
    };
    
    function myFunction(e)
    { 
        //alert(e.target);
        var check = e.target;
    alert(check);
    alert('it called the fucntion in the javascript file');
check.classList.add('mychange');
}
        /**
        * Randomize array element order in-place.
        * Using Fisher-Yates shuffle algorithm.
        */
        function shuffleArray(array) 
        {
            for (var i = array.length - 1; i > 0; i--) 
            {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }  
  
  // function that builds a deck of cards
    var identifiers=[];
    var build = function()
    {
        var suit=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var colour= ['C','H','D','S'];
    
        //determines the total size of the deck 
        
        var total = suit.length*colour.length;
        var inc=0;
    
        for(var cnt=0;cnt<suit.length;cnt++)
        {
        
            for(var cnts=0; cnts<colour.length; cnts++)
            {
                identifiers[inc] = suit[cnt] + colour[cnts];
                inc++;
            }
        }
        //alert(identifiers.length);
        //alert(identifiers);
        //alert(shuffleArray(identifiers));
    };
    build();
    
    //determines the cards to be shown in the matching card game
    var choose = function()
    {
        var firstshuf = shuffleArray(identifiers);
        var temparr= [];
        
        for(var k= 0;k<8;k++)
        {
            temparr[k] = firstshuf[k];
        }
        finaldeck = shuffleArray(temparr.concat(temparr));
        
        alert(finaldeck);
    };
    choose();
    
    var testfunct = function(e)
    {
        //alert('tks is the man');
        //alert(e);
        var targ;
	if (!e) e = window.event;
	if (e.target) targ = e.target;
	//alert(targ);
        //alert(seal);
        
        
    };
    
    // creates a card from scratch and displays the type required
    var makeCard = function(cardval)
    {
        //create outer section of card
        var club = "url('static/clubs.png')";
        var heart = "url('static/heart.jpg')";
        var diamond = "url('static/diamond.png')";
        var spade = "url('static/spade.jpg')";
        var shade;
        var pic;
        var number;
        
       // var cardval = '10C';
        
        if(cardval.length===2)
        {
            number = cardval.charAt(0);
            
            if(cardval.charAt(1)==='C')
            {
                pic = club;
                shade ='black';
            }
            else if(cardval.charAt(1)==='H')
            {
                pic = heart;
                shade ='red';
            }
            else if(cardval.charAt(1)==='S')
            {
                pic = spade;
                shade ='black';
            }
            else if(cardval.charAt(1)==='D')
            {
                pic = diamond;
                shade ='red';
            }
        }
        else if(cardval.length===3)
        {
            if(cardval.charAt(2)==='C')
            {
                pic = club;
                shade ='black';
                number = 10;
            }
            else if(cardval.charAt(2)==='H')
            {
                pic = heart;
                shade ='red';
                number = 10;
            }
            else if(cardval.charAt(2)==='D')
            {
                pic = diamond;
                shade ='red';
                number = 10;
            }
            else if(cardval.charAt(2)==='S')
            {
                pic = spade;
                shade ='black';
                number = 10;
            }
        }
        
        var ele = document.createElement('div');
        ele.style.height = '130px';
        ele.style.width = '100px';
        ele.style.backgroundColor='black';
        ele.style.float='left';
       // ele.style.zIndex = '-1';
        
        // create cover for card(back)
        var cover = document.createElement('div');
        cover.style.height = '130px';
        cover.style.width = '100px';
        cover.style.backgroundImage='url("static/chaos.jpg")';
        //cover.style.backgroundColor='red';
        cover.style.float='left';
        cover.style.zIndex = '1';
        
        // create outer div for flipper
        var outerele = document.createElement('div');
        outerele.style.height = '130px';
        outerele.style.width = '100px';
        //outerele.style.backgroundColor='black';
        outerele.style.float='left';    
    
        //create middle section of card
        var inele = document.createElement('div');
        inele.style.height = '110px';
        inele.style.width = '80px';
        inele.style.backgroundColor='white';
        inele.style.top = '10px';
        inele.style.border='10px';
        inele.style.position= 'relative';
  
        //create small top display of card suit
        var topdiv= document.createElement('div');
        topdiv.style.height = '20px';
        topdiv.style.width = '20px';
        topdiv.style.position ='absolute';
        topdiv.style.backgroundImage=pic;
        topdiv.style.margin="4.5%";
        topdiv.style.backgroundSize = '20px 20px';
        
        //create centre div to display suit
        var centrdiv= document.createElement('div');
        centrdiv.style.height = '40px';
        centrdiv.style.width = '40px';
        centrdiv.style.position ='absolute';
        centrdiv.style.backgroundImage=pic;
        centrdiv.style.backgroundColor = 'white';
        
        //display the value on the card on bottom
        var lowdivpara= document.createElement('p');
        lowdivpara.innerHTML = number;
        lowdivpara.style.fontSize = '40px';
        lowdivpara.style.position = 'absolute';
        lowdivpara.style.top='28%';
        lowdivpara.style.color=shade;
        inele.appendChild(lowdivpara);
        
        //display number in top
        var topdivpara= document.createElement('p');
        topdivpara.innerHTML = number;
        topdivpara.style.fontSize = '40px';
        topdivpara.style.position = 'absolute';
        topdivpara.style.right='0%';
        topdivpara.style.bottom='27%';
        topdivpara.style.color=shade;
        inele.appendChild(topdivpara);
        
        centrdiv.style.margin="25%";
        centrdiv.style.marginTop="35%";
        centrdiv.style.backgroundSize = '40px 40px';
        
        var botdiv= document.createElement('div');
        botdiv.style.height = '20px';
        botdiv.style.width = '20px';
        botdiv.style.position ='absolute';
        botdiv.style.backgroundImage=pic;
        botdiv.style.marginTop="105%";
        botdiv.style.marginLeft="70%";
        botdiv.style.backgroundSize = '20px 20px';
        
    
    
        //add small top display to card    
        inele.appendChild(topdiv); 
        inele.appendChild(botdiv);
        inele.appendChild(centrdiv);
        inele.style.marginLeft='10px';
        //inele.className='flip-front';
  
        ele.appendChild(inele);
        ele.style.marginBottom='2px';
        ele.style.marginRight='2px';
        ele.addEventListener('click', testfunct(window.event), false);
        ele.style.float='left';
        //ele.onclick='testfun(event)';
        
        ele.className='flip-back';
        cover.className='flip-front';
        
        outerele.className='flipper';
        
        outerele.appendChild(ele);
        outerele.appendChild(cover);
        outerele.style.marginRight='2px';
        outerele.style.marginBottom='2px';
        //ele.name=cardval;
        
        ele.setAttribute('name',cardval);
        //m = document.createAttribute('name');
        //m.value =cardval;
        //alert(m.value);
       // alert(ele.getAttribute('name'));
        //alert('this is what will happen');
        //ele.classList.add('flipper');
        bod.appendChild(outerele);
    };
    //makeCard();
    
    
    /*var mytry = document.createElement('p');
    mytry.innerHTML = 'hey';
    //mytry.onclick ='testfun(event)';
    bod.appendChild(mytry);
    //mytry.innerHTML('<div onclick="testfun(event)"> wah happen</div>');
    //var seal= 12;
    cards = document.getElementsByClassName('flipper');
    alert(cards.length);
    alert(cards);
    alert(cards[0]);
    cards[0].style.backgroundColor='red';
    cards[0].className='flip';
    for(var h = 0; h<cards.length;h++)
    {
        //cards[h].addEventListener('click', testfunct(event.target), false);
        alert('this must be annoying');
        //alert(cards[h].getAttribute('name'));
    }
    */
    
    
    //place all cards for game on screen
    var displayGame= function()
    {
        for(var j = 0; j<finaldeck.length; j++)
        {
           makeCard(finaldeck[j]);
        }
    };
    
    displayGame();
    
    $('.flip-back').on('click', function (e) {
        alert('it entered the jquery statement');
        alert(this);
        alert(this.classList);
        alert(this.nodeList);
    $(this).toggleClass("colored");
    });

};




/*<script>
  window.onload
  {
    var ele = document.createElement('div');
    ele.style.height = '30px';
    ele.style.width = '40px';
    ele.style.color = 'blue';
    var body = document.getElementsByTagName('body');
    body.appendChild(ele);
  };
</script>
*/
/*window.onload = function()
{
  var bod = document.getElementById('bodi');
  bod.style.color='blue';
}*/
/*<script>
  window.onload
  {
    var ele = document.createElement('div');
    ele.style.height = '30px';
    ele.style.width = '40px';
    ele.style.color = 'blue';
    var body = document.getElementsByTagName('body');
    body.appendChild(ele);
  };
</script>
*/