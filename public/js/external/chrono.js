$(document).ready(function(){
	function adjustHeight(){
		$('#lapListCont').height( ($(window).height() - $('#stopWatch').height() - $('#heightlap').height() - 110) + "px") ;
	}
	adjustHeight();
	$(window).on('resize', function(){
		adjustHeight();
	});
	//$('#time').fitText(.6, { minFontSize: '80vmin'});
	var startTime; 
	var timeout;
	var pauseTime = 0;
	var mils;
	var paused = false;
	var count = 0;
	$('#time').on('click', function(){
		if(mils != undefined){
			if(mils > 0){
				$('#lapInst').hide();	
				var time = milToTime(mils);
				//alert(mils);
				time = formatTime(time);		
				count += 1;
				$('#timeTable thead').show();
				$('#lapList').prepend('<tr class="timeRow"><td class="lapCount muted">' + count + ".</td><td>" +time.h +':'+time.m +':'+time.s + '.' + time.mils+  '</td></tr>');
				$('#lapListCont').animate({ scrollTop: 0 }, "fast");
			}
		}
	});

	$('#btnPause').on('click', function(){
		if(paused == false){
			paused = true;
			clearTimeout(timeout);	
			pauseTime = mils;
			$(this).html('<i class="icon-play-circle"></i>');
			$('#time').addClass('paused');
		}else{
			paused = false;
			$(this).html('<i class="icon-pause"></i>');
			startTime = new Date();
			clock();
		}
	});
	$('#btnStop').on('click', function(){
			$('#title').slideDown();
			$('#lapInst').hide();
			$('#time').removeClass('paused');
			paused = false;
			clearTimeout(timeout);	
			pauseTime = 0;
			mils = 0;
			$('#time').html('00:00:00');			
			$('#btnClear').click();
			$('#divControls').fadeOut(function(){ 
				$('#divStart').fadeIn()
				$('#btnPause').html('<i class="icon-pause"></i>');							
			});			
	});	
	$('#btnStart').on('click', function(){
			$('#title').slideUp(function(){
				adjustHeight();
			});
			var btn = $(this);
			startTime = new Date();
			clock();
			$('#divStart').fadeOut(function(){
				$('#divControls').fadeIn();
				$('#lapInst').fadeIn();
				$('#lapTimes').fadeIn();
			});
	});
	function clock() {
		$('#time').removeClass('paused');
		var curTime = new Date();
		mils = (curTime - startTime) + pauseTime;
		var time = milToTime(mils);
		formatTime(time);
		var outStr = time.h +':'+time.m +':'+time.s;
		document.getElementById('time').innerHTML=outStr;
		timeout = setTimeout(clock,20);
	}
	
	function formatTime(time){
		for(var i in time){
			if(i == "mils"){
				if(time[i] < 1){
					time[i] = "000";
				}else
				if(time[i] < 10){
					time[i] = "00" + time[i];
				}else  
				if(time[i] < 100){
					time[i] = "0" + time[i];
				}
			}else if(time[i] < 10){
				time[i] = "0" + time[i];
			}
		}
		return time;		
	}
	
	function milToTime(mil){
		mi = mil % 1000;
		seconds = parseInt(mil / 1000) % 60;
		minutes = parseInt(mil / 1000 / 60) % 60;
		hours = parseInt( mil / 1000 / 3600);
		return {s: seconds, m: minutes, h:hours, mils:mi};
	}
	
	$('#btnClear').on('click', function(){
		$('#lapList, #btnClear').fadeOut(function(){
			$('#lapList').html('').fadeIn();
			$('#timeTable thead').hide();
			//$('#lapInst').fadeIn();
			count = 0;
		});
	});
});