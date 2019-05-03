$(document).ready(function(){

    $(window).on('load', function(){
        $('.wait').css('display','none');
        $('.logowait').css('animationPlayState','paused');
    });

    $('.lightbox').hide();
    
    $('.boton1').click(function(){
        $('.lightbox').fadeIn(500);
        $('.lightbox').css('display','flex');
    });
    
    $('.cerrar1').click(function(){
        $('.lightbox').fadeOut(500);
    });

       function changeIzq(mostrar){
            $('.SeccionesDesplazadas li').eq(mostrar).css('left', '0%');
            $('.scroll').css('overflowY', 'hidden');
            $('.circlelight').css('left', '-7%');
        }

        function changeDer(esconder){
            $('.SeccionesDesplazadas li').eq(esconder).css('left', '100%');
            $('.circlelight').css('left', '93%');
            $('.scroll').css('overflowY', 'scroll');
        }

        function clickenboton(btn){
        $('.textlight i').click(function(){
            changeIzq(btn);
            });
        $('.textlight2 i').click(function(){
            changeDer(btn);
            });
        }

        clickenboton(0);

        function displayN(none){
            $('.SeccionesDesplazadas li').eq(none).css('display', 'none');
        }

        function displayB(block){
            $('.SeccionesDesplazadas li').eq(block).css('display', 'block');
        }


    var entrar2 = true;

    $('.us').click(function(){

        $('.flecha').toggle();

        if(entrar2 == true){
              $('.us2').css('left','0px');
              $('.us').css('left','150px');
              $('.us').css('animationPlayState','paused');
              entrar2 = false;
        }else{
            $('.us2').css('left','-400px');
            $('.us').css('left','-50px');
            $('.us').css('animationPlayState','running');
            entrar2 = true;
        }
    });

    $('.open1').click(function(){
        $('.open1box').slideToggle(500);
    });
    $('.open2').click(function(){
        $('.open2box').slideToggle(500);
    });
    $('.open1_1').click(function(){
        $('.open1box_1').slideToggle(500);
    });
    $('.open2_1').click(function(){
        $('.open2box_1').slideToggle(500);
    });
    $('.open1_2').click(function(){
        $('.open1box_2').slideToggle(500);
    });
    $('.open2_2').click(function(){
        $('.open2box_2').slideToggle(500);
    });
    $('.open1_3').click(function(){
        $('.open1box_3').slideToggle(500);
    });
    $('.open2_3').click(function(){
        $('.open2box_3').slideToggle(500);
    });
    $('.open1_4').click(function(){
        $('.open1box_4').slideToggle(500);
    });
    $('.open2_4').click(function(){
        $('.open2box_4').slideToggle(500);
    });
    $('.open1_5').click(function(){
        $('.open1box_5').slideToggle(500);
    });
    $('.open2_5').click(function(){
        $('.open2box_5').slideToggle(500);
    });
    $('.open1_6').click(function(){
        $('.open1box_6').slideToggle(500);
    });
    $('.open2_6').click(function(){
        $('.open2box_6').slideToggle(500);
    });

    $('.nosotroslight').click(function(){
        $('.nostig').css('transform','translateY(0vh)');
        $('.nosotroslight').css('transform','translateY(-200px)');
    });

    $('.nostig').click(function(){
        $('.nostig').css('transform','translateY(100vh)'); 
        $('.nosotroslight').css('transform','translateY(0px)');   
    });

    $(document).scroll(capturarScroll);
    var posY = 0;

    function capturarScroll(){

        posY =  $(document).scrollTop();
        console.log(posY);
        cambiarTamMenu();
    }

    function cambiarTodos(){
        for (var i = 0; i < 7; i++) {
            $(".años h3").eq(i).css({
                fontSize:"18px",
                fontWeight:"400",
                paddingLeft:"70px"
            })
        }
        
    }

    function cambiarIndice(indice){
        $(".años h3").eq(indice).css({
             fontSize:"40px",
             fontWeight:"bold",
             paddingLeft:"25px",
        })
    }

    function cambiarTexto(title,text,text2,color){
            $('.quetitle').html(title);
            $('.quetext').html(text +=(text2));
            $('.cuadrolight').css('backgroundColor',color);
        }  

    function cambiarTamMenu(){
        if(posY > 0 ){
            cambiarTodos();
            cambiarIndice(0);
            clickenboton(0);
            displayN(1);
            cambiarTexto('¿Qué es el nado sincronizado?',
            'Es un deporte que se practica en una piscina combinando natación, gimnasia y danza. Un nadador o equipo de nadadores realiza una coreografía acompañada de música y unos jueces puntúan una serie de parámetros: dificultad y originalidad de los movimientos, sincronía entre movimientos y música, en definitiva la calidad técnica y artística. ',
            'Se podría afirmar que esta disciplina es un baile con movimientos gimnásticos realizados en el medio acuático. Se compite en categorías distintas y en modalidad individual, de dúo o por equipos.',
            '#0090cc');
        }

        if(posY > 400){
            cambiarTodos();
            cambiarIndice(1);
            clickenboton(1);
            displayB(1);
            displayN(2);
            cambiarTexto('mandarina','Son buenas ','lola','#0090cc');
        }


        if(posY > 1200){
            cambiarTodos();
            cambiarIndice(2);
            clickenboton(2);
            displayB(2);
            displayN(3);
            
        }

        if(posY > 1800){
            cambiarTodos();
            cambiarIndice(3);
            clickenboton(3);
            displayB(3);
            displayN(4);
        }

        if(posY > 2400){
            cambiarTodos();
            cambiarIndice(4);
            clickenboton(4);
            displayB(4);
            displayN(5);
        }

        if(posY > 3000){
            cambiarTodos();
            cambiarIndice(5);
            clickenboton(5);
            displayB(5);
            displayN(6);
        }

        if(posY > 3600){
            cambiarTodos();
            cambiarIndice(6);
            clickenboton(6);
            displayB(6);
            displayN(7);
        }

        if(posY > 4200){
            cambiarTodos();
            $('.circlelight,.años').fadeOut();
        }else{
            $('.circlelight,.años').fadeIn();
        }
    }

    $('.logo').click(function(){
        $('.cabecera').css('animationPlayState', 'running');
        $('.scroll').css('overflowY', 'scroll');
        $('.nosotroslight').css('animationPlayState','running');
    });

    /*$('.años ul a').click(function(e){
    //Evita que la función se ejecute ante de disparar el evento
    e.preventDefault();
    
    //Capturar el atributo del anchore
    var atributo = $(this).attr('href');
    
    //.stop() = Detiene la ejecución de las animaciones
    $('body, html').stop().animate({
        scrollTop: $(atributo).offset().top
    }, 1500, 'easeInOutQuart');
    });*/

    $('.años li a, .nosS, .subirS').click(function(e){
    //Evita que la función se ejecute ante de disparar el evento
    e.preventDefault();
    
    //Capturar el atributo del anchore
    var atributo = $(this).attr('href');
    
    //.stop() = Detiene la ejecución de las animaciones
    $('body, html').stop().animate({
        scrollTop: $(atributo).offset().top
    }, 1000, 'easeOutQuart');
    
    // $('.flecha').click(function(){
    //     $('body, html').animate({
    //     scrollTop: '0px'
    // }, 1500, 'easeInOutQuart');
    //     });
    });

});