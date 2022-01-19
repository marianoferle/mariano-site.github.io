var pxy1=0;
var pxy2=0;
var pxy3=0;
var pxy4=0;

var ph=0;
var pw=0;

var pxy=0;

var container=0; 

var pag1=1;
var pag=1;

var sec=2;
var sec1=2; 

var tr2; 

//--------------


$(document).ready(function() {
  //$( ".inf img" ).attr({src: "/.jpg"});
  //$( ".im,.im3,.im4" ).attr({src: "/.jpg"});
var art=$('article');
    ph=art.height();

$(".fondo_medio:eq(0)").css({top:ph-50});
$(".fondo_medio:eq(1)").css({top:ph*2-100});
$(".fondo_medio:eq(2)").css({top:ph*3-150});


//----------------------------------------------------
//$( "body" ).bind( "click", function( event ) {     });   // nuevo evento click en div


$(document).mousemove(function(event){ 

 $('#datos').text("X: " + event.pageX + ", Y: " + event.pageY);      //mouse        x,y
 $('#datos2').text(screen.availWidth +"  X  "+screen.availHeight);   //max monitor  x,y  - disponible por la ventana
 $('#datos3').text(window.innerWidth +"  X  "+window.innerHeight);   //ventana solo web   x,y
 //$('#datos4').text(window.pageXOffset +"  X  "+window.pageYOffset);   // pixeles de desplazamiento de   : x,y - sup/izq
 $("#datos4").text(pag+"--:--"+sec);

 var x1=event.pageX/3;
 var y1=event.pageY/3;
 var x=25;
 var y=150;
 $("#datos6").text(x1+"--:--"+y1);

//$('#galeria').css({position:'relative',left:100-x1,top:(ph-50)-y1});
// $('.mov1').css({left:x-x1,top:y-y1});

});


//---------------------NAV---------------------

$('.scroll').click(function(event) {	
	event.preventDefault();	
	var parts = this.href.split("#"); 
	var trgt = parts[1];
	$('html, body').animate({scrollTop: $("#"+trgt).offset().top }, 1500); 
	tr2=trgt;

});


$(document).scroll(function(){
mov();
});

//----------------------

$(window).resize(function() {
    mov();
	$('html, body').animate({scrollTop: $("#"+tr2).offset().top },50);
});

//--------------------------------------------------------- Espacio entre paginas ------------------------------------------------------

function mov(){
pxy=window.pageYOffset; 
pw=$('article').width();    
ph=$('article').height();
$('#datos5').text(pxy); 

if(pxy>=0 && pxy<ph){ pag1=pag; pag=1;    }
if(pxy>=ph && pxy<ph*2){ pag1=pag; pag=2;    }
if(pxy>=ph*2 && pxy<ph*3){ pag1=pag; pag=3;    }
if(pxy>=ph*3 && pxy<ph*4){ pag1=pag; pag=4;    }    


 //document.getElementsByClassName("fondo_medio").elements[0].style.top=pxy/2;    


    $(".fondo_medio:eq(0)").css({top:(ph-50)-pxy/2});
    $(".fondo_medio:eq(1)").css({top:(ph*2-100)-pxy/2});
    $(".fondo_medio:eq(2)").css({top:(ph*3-100)-pxy/2});

//----------------pagina 1----------------
if(pxy>=0){      
    $('#tex').css({left:+pxy+20});     
    $('#p1').css({position:'relative',left:pxy});
    $('#p2').css({position:'relative',left:+pxy*3});  
    $('#p3').css({position:'relative',left:+pxy*6}); 
}      

//----------------pagina 2----------------
if(pxy>=0&&pxy<ph*1){ 
    $('#link').css({left:pxy-ph});
}     

//----------------pagina 3----------------
if(pxy>=ph&&pxy<ph*2){ 
    $('#galeria').css({left:-pxy+ph*2+25});
}     

//----------------pagina 4----------------
if(pxy>=ph*2&&pxy<ph*3){ 
    $('#video').css({left:-pxy+ph*3+25});
}


}

//----/mov-----------------------------------------------------------------------------------------------------


//----------------------

$('.inf').hover(function(){   
    $(this).find("p").fadeIn(500);
},function(){ 
    $(this).find("p").fadeOut(500); 
});

//----------------------

$(".im").mouseover(function() {
$(this).css({opacity:'0.0'}).animate({opacity:'1.0'},400);
}); 

$(".im2").mouseover(function() {
 $(this).css({opacity:'0.0'}).animate({opacity:'1.0'},400);
}); 

$(".im3").mouseover(function() {
 $(this).css({opacity:'0.0'}).animate({opacity:'1.0'},400);
}); 

//----------------------



}); // READY --------------------------



