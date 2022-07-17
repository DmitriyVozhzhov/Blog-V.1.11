let bgColor = ['#1fbd56','#f368e0','#4593e3','#35205f','#222f3e'];
let i = 0;
document.getElementById('But1').addEventListener('click', function (){
	i = i < bgColor.length ? ++i : 0;
	document.querySelector('body').style.background = bgColor[i];
	// document.getElementById('settings').style.display = 'none'
});

// function settings() {
//
// 		document.getElementById('settings').style.display = 'block'
//
// };

