let timer1m="0"
let timer1s="0"
let timer1ms="0"
let timer2m="0"
let timer2s="0"
let timer2ms="0"
let timer1="0"
let timer2="0"
let start=false
let firstclick=false
let timer

function starttimer(time){
	if(0<time){
		if(timer){
			clearInterval(timer) // 如果有，先清除舊的計時器
		}

		if(!firstclick){
			timer1m=parseInt(document.getElementById("timer1m").value)
			timer1s=parseInt(document.getElementById("timer1s").value)
			timer1ms=0
			timer2m=parseInt(document.getElementById("timer2m").value)
			timer2s=parseInt(document.getElementById("timer2s").value)
			timer2ms=0

			firstclick=true
		}

		timer=setInterval(function(){
			if(0<timer1m||0<timer1s||0<timer1ms){
				if(timer1ms==0){
					if(timer1s==0){
						timer1m=timer1m-1
						timer1s="59"
						timer1ms="99"
					}else{
						timer1s=timer1s-1
						timer1ms="99"
					}
				}else{
					timer1ms=timer1ms-1
				}
				document.getElementById("timer1").style.color="yellow"
				document.getElementById("timer1").innerHTML=`
					${String(timer1m).padStart(2,"0")}:${String(timer1s).padStart(2,"0")}.${String(timer1ms).padStart(2,"0")}
				`
			}else if(0<timer2m||0<timer2s||0<timer2ms){
				if(timer2ms==0){
					if(timer2s==0){
						timer2m=timer2m-1
						timer2s="59"
						timer2ms="99"
					}else{
						timer2s=timer2s-1
						timer2ms="99"
					}
				}else{
					timer2ms=timer2ms-1
				}
				document.getElementById("timer1").style.color="white"
				document.getElementById("timer1").innerHTML=`
					${String(timer2m).padStart(2,"0")}:${String(timer2s).padStart(2,"0")}.${String(timer2ms).padStart(2,"0")}
				`
			}else{
				if(time-1<=0){
					document.getElementById("timer1").innerHTML=`
						計時結束!
					`
					document.getElementById("timer1").style.color="green"
				}

				firstclick=false
				clearInterval(timer)
				starttimer(time-1)
			}
		},10)
	}
}

document.getElementById("start").onclick=function(){
	if(!start){
		starttimer(parseInt(document.getElementById("time").value))
		document.getElementById("start").value="停止"
		start=true
	}else{
		clearInterval(timer)
		document.getElementById("start").value="開始"
		start=false
	}
}

document.getElementById("reset").onclick=function(){
	if(confirm("確定要重置嗎?"))
		location.reload()
}

document.onkeydown=function(event){
	if(event.target.id!="time"&&event.target.id!="timer1m"&&event.target.id!="timer1s"&&event.target.id!="timer2m"&&event.target.id!="timer2s"){
		document.getElementById("start").click()
	}
}