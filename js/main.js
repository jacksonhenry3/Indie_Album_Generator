
$(document).ready(function(){


	if(window.location.hash) {
		console.log(window.location.hash)
	} else {
		console.log('runnnnninnnng')
	



// people = ['John Locke','Epicurus','Zeno of Citium','Avicenna']
people = ['Ernest Hemingway','Mark Twain','Stephen King','J. K. Rowling','William Faulkner','Isaac Asimov','Brian Aldiss','Douglas Adams','John Green','Thomas Paine','Fichte','Hegel','Hume','Kant','Kierkegaard','Locke','Machiavelli','Montaigne','Nietzsche','Pascal']
// Thomas Paine
length = Math.floor(Math.random()*3+3)
person = people[Math.floor(Math.random()*people.length)];
WikiquoteApi.getRandomQuote(person, 
          function(newQuote)
          {
          	quote = newQuote.quote.split(' ')
          	quote = quote.slice(Math.max(quote.length - length, 1))
			quote = quote.join(' ')
			quote = strip(quote)
			quote = quote.replace('.','')
			quote = quote.replace('"','')
			$(".title").html(quote)

      	  }, 
          function(msg){
            alert(msg);
          })


  $.getJSON("http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json&callback=?", function (data) {
    page = data.query.pages
    page = page[Object.keys(page)[0]];
    $(".artist").html('By '+page.title)
  });

  advisory = Math.floor(Math.random()*3)
  if (advisory==0)
  	{$('.advisory').hide()};
FFs = ['Righteous','Abril Fatface','Black Ops One','Lobster','Erica One']
FF = FFs[Math.floor(Math.random()*FFs.length)];

 $('.album').css("font-family",FF);


 }
//  var delay=1000; //1 seconds
// canvas = 0
// setTimeout(function(){
//   html2canvas($(".container"), {
// 	onrendered: function(canvas) {
// 	document.body.appendChild(canvas);
//    var img    = canvas.toDataURL("image/png");
//  console.log(img)
// 	},
// 	allowTaint:false
// 	});
// }, delay); 

	

});






function getIndicesOf(searchStr, str, caseSensitive) {
    var startIndex = 0, searchStrLen = searchStr.length;
    var index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function strip(html)
{
   var tmp = document.createElement("div");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}