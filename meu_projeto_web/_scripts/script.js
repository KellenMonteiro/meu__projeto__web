var quantidade  = $('div#testemunhos ul').length;
var limite      = (quantidade * 336) * -1; 
var largura     = limite + 336;
var view_largura= $('section#depoimentos div#depoimentos-centro').width();

$('div#testemunhos').css('width',limite*-1);

$('div#depoimentos-direita').click( function() {
    
    posicao_atual   = $('div#testemunhos').position().left;
    nova_posicao    = posicao_atual - view_largura;
        
    if ( limite < (posicao_atual - view_largura) ) {

        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( limite > ( nova_posicao - view_largura)) {
        $('div#depoimentos-direita ion-icon').css('opacity',0.5);
        $('div#depoimentos-direita ion-icon').css('cursor','not-allowed');        
    }

    $('div#depoimentos-esquerda ion-icon').css('opacity',1);
    $('div#depoimentos-esquerda ion-icon').css('cursor','pointer');

})

$('div#depoimentos-esquerda').click( function() {
    posicao_atual   = $('div#testemunhos').position().left;

    if ( posicao_atual + view_largura <= 0 ) {
        nova_posicao = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( posicao_atual + view_largura > 0 ) {
        $('div#depoimentos-esquerda ion-icon').css('opacity',0.5);
        $('div#depoimentos-esquerda ion-icon').css('cursor','not-allowed');        
    }

    $('div#depoimentos-direita ion-icon').css('opacity',1);
    $('div#depoimentos-direita ion-icon').css('cursor','pointer');      
})

//códigos de clique para entrar

$('ion-icon#facebook').click(function(){
    window.open("https://www.facebook.com", "_blank");

})

$('ion-icon#instagram').click(function(){
    window.open("https://www.instagram.com", "_blank");

})

$('ion-icon#whatsapp').click(function(){
    window.open("https://www.whatsapp.com", "_blank");

})

$('ion-icon#youtube').click(function(){
    window.open("https://www.youtube.com", "_blank");

})

$('ion-icon#linkedin').click(function(){
    window.open("https://www.linkedin.com", "_blank");

})

//código de animação

$('div#testemunhos ul:eq(0)').css('opacity',0);
$('div#testemunhos ul:eq(1)').css('opacity',0);
$('div#testemunhos ul:eq(2)').css('opacity',0);

$('section#rotina-saudavel').waypoint( function(direcao) {
    if ( direcao == "down") {
        $('div.img1').removeClass('animate__animated animate__fadeOutUp');
        $('div.img4').removeClass('animate__animated animate__fadeOutUp');
        $('div.img2').removeClass('animate__animated animate__fadeOutUp animate__slow');
        $('div.img5').removeClass('animate__animated animate__fadeOutUp animate__slow');
        $('div.img3').removeClass('animate__animated animate__fadeOutUp animate__slower');
        $('div.img6').removeClass('animate__animated animate__fadeOutUp animate__slower');

        $('div.img1').addClass('animate__animated animate__fadeInUp');
        $('div.img4').addClass('animate__animated animate__fadeInUp');
        $('div.img2').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.img5').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.img3').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.img6').addClass('animate__animated animate__fadeInUp animate__slower');                
    }

    if (direcao == "up") {
        $('div.img1').addClass('animate__animated animate__fadeOutUp');
        $('div.img4').addClass('animate__animated animate__fadeOutUp');
        $('div.img2').addClass('animate__animated animate__fadeOutUp animate__slow');
        $('div.img5').addClass('animate__animated animate__fadeOutUp animate__slow');
        $('div.img3').addClass('animate__animated animate__fadeOutUp animate__slower');
        $('div.img6').addClass('animate__animated animate__fadeOutUp animate__slower'); 
    }
},{
    offset:'450px;'
})

$('section#produto').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('section#produto p').removeClass('animate__animated animate__fadeOutUp');
        $('section#produto div.shakes-opcoes').removeClass('animate__animated animate__fadeOutUp animate__slow');

        $('section#produto p').addClass('animate__animated animate__fadeInUp');
        $('section#produto div.shakes-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
    }

    if (direcao == 'up') {
        $('section#produto p').addClass('animate__animated animate__fadeOutUp');
        $('section#produto div.shakes-opcoes').addClass('animate__animated animate__fadeOutUp animate__slow');
    }
},{
    offset:'450px;'
})

$('section#depoimentos').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeOutUp animate__slower');
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeOutUp animate__slow');
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeOutUp animate__slower');

        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }

    if (direcao == 'up') {
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeOutUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeOutUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeOutUp animate__slower');
    }
},{
    offset:'400px;'
})

$('div#transicao-depoimentos-plano').waypoint(function(direcao) {
    if ( direcao == 'down') {
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate_slow');
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate_slow');
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate_slow'); 

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate_slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate_slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate_slow');
    } else {
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate_slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate_slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate_slow');  
    }
},{
    offset:'600px;'
})

$('section#plano-principal').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeOutLeft animate_slower');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeOutUp animate_slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeOutRight animate_slower');

        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate_slower');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate_slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate_slower');
    } else {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeOutLeft animate_slower');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeOutUp animate_slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeOutRight animate_slower');
    }
},{
    offset:'450px;'
})

$('footer').waypoint(function(direcao) {
    if(direcao == 'down') {
        $('div#mapa').removeClass('animate__animated animate__fadeOut');
        $('div#informacao').removeClass('animate__animated animate__fadeOut');
        $('div#copo-rodape-decoracao').removeClass('animate__animated animate__fadeOut');

        $('div#mapa').addClass('animate__animated animate__fadeIn');
        $('div#informacao').addClass('animate__animated animate__fadeIn');
        $('div#copo-rodape-decoracao').addClass('animate__animated animate__fadeIn');
    } else {

        $('div#mapa').addClass('animate__animated animate__fadeOut');
        $('div#informacao').addClass('animate__animated animate__fadeOut');
        $('div#copo-rodape-decoracao').addClass('animate__animated animate__fadeOut');
    }

},{
    offset:'650px;'
})


$('header h1').waypoint( function(direcao) {
    if(direcao=='down') {
        $ ('nav').addClass('navEstatico');
        $ ('nav div').addClass('logoEstatico');
        $ ('nav ul').addClass('menuEstatico');
        $ ('nav ul li a').addClass('itemEstatico');
        $ ('nav ion-icon').addClass('iconeEstatico');
        $ ('nav ul#icone-menu-mobile ion-icon').css('color','#404040');
        $ ('nav ul#icone-menu-mobile').css('margin-top','5px');
        $ ('nav ul#icone-menu-mobile').css('margin-right','-20px');
    } else{
        $ ('nav').removeClass('navEstatico');
        $ ('nav div').removeClass('logoEstatico');
        $ ('nav ul').removeClass('menuEstatico');
        $ ('nav ul li a').removeClass('itemEstatico');
        $ ('nav ion-icon').removeClass('iconeEstatico');
        $ ('nav ul#icone-menu-mobile ion-icon').css('color','white');
        $ ('nav ul#icone-menu-mobile').css('margin-top','70px');
        $ ('nav ul#icone-menu-mobile').css('margin-right','20px');
        
    }
},{
    offset:'200px;'
})

//ações de navegação
$('nav div').click(function() {
    $('html, body').animate({scrollTop:$('header').offset().top},1000, function() {
        if($(window).width() < 812) {
            esconderMenu();
            controle = true;
        }
    });
})

$('nav ul li:eq(0)').click(function() {
    $('html, body').animate({scrollTop:$('section#rotina-saudavel').offset().top},1000, function () {
        if($(window).width() < 812) {
            esconderMenu();
            controle = true;
        }
    });
})

$('nav ul li:eq(1)').click(function() {
    $('html, body').animate({scrollTop:$('section#produto').offset().top},1000, function(){
        if($(window).width() < 812) {
            esconderMenu();
            controle = true;
        }
    });
})

$('nav ul li:eq(2)').click(function() {
    $('html, body').animate({scrollTop:$('section#depoimentos').offset().top},1000, function() {
        if($(window).width() < 812) {
            esconderMenu();
            controle = true;
        }
    });
})

$('nav ul li:eq(3)').click(function() {
    $('html, body').animate({scrollTop:$('section#plano-principal').offset().top},1000, function() {
        if($(window).width() < 812) {
            esconderMenu();
            controle = true;
        }
    });
})

//ação de mostrar e esconder o menu

function mostrarMenu() {
    $('nav ul#principal').css('display','flex');
    $('nav ul#secundaria').css('display','flex');
}

function esconderMenu() {
    $('nav ul#principal').css('display','none');
    $('nav ul#secundaria').css('display','none');
}

var controle=true;
$('nav ul#icone-menu-mobile').click(function() {
    if(controle==true) {
        mostrarMenu();
        controle=false;
    } else{
        esconderMenu();
        controle=true;
    }

})

$(window).resize (function(){
    if($(window).width()> 812) {
        mostrarMenu();
    }else {
        esconderMenu();
    }
})