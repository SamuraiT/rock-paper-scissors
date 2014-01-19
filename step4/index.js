window.onkeydown = function(e){
	var d1 = document.getElementById('you');
	var d2 = document.getElementById('computer');
	var d3 = document.getElementById('judge');
	
	// あなたの手
	var your_hand = e.keyCode;
    console.log(your_hand)
    rock = 49
    scissor = 50
    paper = 51
	
    if (your_hand == rock) {
		d1.innerHTML = '<img src="rock.jpg" />';//ぐー
	} else if (your_hand == scissor) {
		d1.innerHTML = '<img src="scissors.jpg" />';//ちょき
	} else {
		d1.innerHTML = '<img src="paper.jpg" />';//ぱー
	}
	
	// コンピュータの手
	var random = Math.random() * 3;
	computers_hand = parseInt(49 + random) ;
    console.log(computers_hand)
	
	if (computers_hand == rock) {
		d2.innerHTML = '<img src="rock.jpg" />';//ぐー
	} else if ( computers_hand== scissor) {
		d2.innerHTML = '<img src="scissors.jpg" />';//ちょき
	} else {
		d2.innerHTML = '<img src="paper.jpg" />';//ぱー
	}
	
	// どっちが勝った?
	if (your_hand == computers_hand) {
		d3.innerHTML = 'あいこ!';
	} else if ((your_hand == rock && computers_hand == scissor) ||
            (your_hand == scissor && computers_hand == paper) || 
            (your_hand == paper && computers_hand == rock)) {
		d3.innerHTML = 'あなたのかち!';
	} else {
		d3.innerHTML = 'コンピュータのかち!';
	}
};
