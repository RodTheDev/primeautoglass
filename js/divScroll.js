let ScrollRate = 100;

function scrollDiv_init() {
  try{
	DivElmnt = document.getElementById('yelp-reviews');
	ReachedMaxScroll = false;

	DivElmnt.scrollTop = 0;
	PreviousScrollTop  = 0;

	ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}catch(e){
    if(e){
    // If fails, Do something else
    }
}
}

function scrollDiv() {
try{
	if (!ReachedMaxScroll) {
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop++;

		ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
	}
	else {
		ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;

		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop--;
	}
}catch(e){
    if(e){
    // If fails, Do something else
    }
}
}
function pauseDiv() {
  try{
	clearInterval(ScrollInterval);
}catch(e){
    if(e){
    // If fails, Do something else
    }
}
}

function resumeDiv() {
  try{
	PreviousScrollTop = DivElmnt.scrollTop;
	ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
}catch(e){
    if(e){
    console.log("Error");
  }
}
}
