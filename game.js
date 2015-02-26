var xPos=0, lPos=0, score=0, miss=0, play=1, basketWidth=50, highScore=0;
scrWidth = document.all ? document.body.clientWidth : window.innerWidth;
var grass1=document.getElementById('grass1');
var grass2=document.getElementById('grass2');
var grass3=document.getElementById('grass3');
	function startGame(){
		document.getElementById('containerStart').style.display="none";
		document.getElementById('containerGame').style.display="block";
		ballFall();
	}
	function moveCoord(e){
		var x=e.clientX;
		xPos=x;
		if (x>10 && x<700) {
			document.getElementById('basket').style.left=x+'px';
		}
		grass1.style.right = (1.1*x - 1.1*scrWidth)+ "px";
		grass2.style.right = ((1.5*x + 2.5*scrWidth)/5 - scrWidth)+ "px";
		grass3.style.left = ((0.5*x + 3*scrWidth)/5 - scrWidth) + "px";
	}
	function ballFall(){
			if(play==1){
			var lft = (Math.round(Math.random()*700 + 20));
			lPos=lft;
			document.getElementById('ball').style.left=lft+'px';
			moveBall();
		}
	}

	var i=0;
	function moveBall(){
		 if(i<500){
			document.getElementById('ball').style.top=i+'px';
			if((i>394&&i<406) && (lPos>(xPos-30) && lPos<(xPos+basketWidth+20)))
			{
				score++;
				document.getElementById('score').innerHTML="Score: " + score;
				document.getElementById('total').innerHTML="Total: " + (score+miss);
				if(score>highScore){
					highScore=score;
					document.getElementById('highestScore').innerHTML="Highest Score: " + highScore;
				}
				if(score%5==0){
					basketWidth+=20;
					document.getElementById('basketMid').style.width=basketWidth + 'px';
				}
				// if(score==20){
				// 	/*------------------Enter level 2---------------*/
				// 	document.getElementById('gameLevel').innerHTML="LEVEL 2";
					
				// }
				lPos=0;
				xPos=0;
				i=0;
				ballFall();
			}
			if(miss==5){
				play=0;
				gameOver();

			}
			if(play==1){
				i=i+5;
				setTimeout('moveBall()' ,100);
			}
		}
		else{
			miss++;
			document.getElementById('miss').innerHTML="Miss left: " +(5 - miss);
			document.getElementById('total').innerHTML="Total: " + (score+miss);
			i=0;
			ballFall();
		}
	}

	function gameOver(){
		//document.getElementById('gameOver').innerHTML="Game Over"
		document.getElementById('ball').style.display="none";
		document.getElementById('basket').style.display="none";
		document.getElementById('scoreArea').style.width = 60 +'%';
		document.getElementById('scoreArea').style.marginRight = 20 + '%';
		document.getElementById('scoreArea').style.top = 100 + 'px';
		document.getElementById('scoreArea2').style.width = 60 +'%';
		document.getElementById('scoreArea2').style.marginRight = 20 + '%';
		document.getElementById('scoreArea2').style.top = 100 + 'px';
	 }

	 function restartGame(){
	 	xPos=0;
	 	lPos=0;
	 	score=0;
	 	miss=0;
	 	play=1;
	 	basketWidth=50;
	 	//document.getElementById('gameOver').innerHTML="";
	 	document.getElementById('ball').style.display="block";
		document.getElementById('basket').style.display="block";
		document.getElementById('scoreArea').style.width = 29 +'%';
		document.getElementById('scoreArea').style.marginRight = 1 + '%';
		document.getElementById('scoreArea').style.top = 70 + 'px';
		document.getElementById('scoreArea2').style.width = 29 +'%';
		document.getElementById('scoreArea2').style.marginRight = 1 + '%';
		document.getElementById('scoreArea2').style.top = 70 + 'px';
		document.getElementById('total').innerHTML="Total: 0";
		document.getElementById('score').innerHTML="Score: 0";
		document.getElementById('miss').innerHTML="Miss left: 5";
		document.getElementById('basketMid').style.width=basketWidth + 'px';
	 	startGame();
	 }





