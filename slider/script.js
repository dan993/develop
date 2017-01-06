$(function () {
    // setting slider size according to widnow size
    //(if u want fixed, change all $(window) selector to wahatever you need)
    
    var setSlider = function () { // sefl called function
        $('.data').css({
            width: $(window).width(),
            height: $(window).height()
        });
        $('.left')
            .css('height', $(window).height());
        $('.right')
            .css('height', $(window).height());
        $('.mySlider')
            .css('height', $(window).height());
        $('.glyph-arrow')
            .css('top', $(window).height() / 2 - 10);      
    };
    setSlider();
    $(window).on('resize', function () { // on resize window execute setSlider
        setSlider();
    });
    
    // setting the number of span elements
    //according to slider data and insert into DOM tree
    var numOfSpanIncicator = $('.slider-data').length;
    console.log(numOfSpanIncicator);
    for(i = 0; i < numOfSpanIncicator; i++ ){
        $('.indicators .holder').append('<span></span>');
    }
    
    var time = 5000;
    //set progress bar to fill within seconds
    var stepFill = 0; 
    var step = 10;
    console.log(time);
    console.log(stepFill);
    function fillBar(){
        if(stepFill < 100){
        stepFill = stepFill + step;
        $('.progress-bar').css('width', stepFill+'%');
        setTimeout(fillBar, time/11);
    }else{
        stepFill = 0;
        setTimeout(fillBar, time/11);
    }
    };
    setTimeout(fillBar, time/11);
    
    // slider loop function
    function loopMe(){
        $('.right .glyph-arrow').click();
        setTimeout(loopMe, time);
    };
   setTimeout(loopMe, time);
    
    
    // setting first picure and indicator 
         $('.slider-data')
             .fadeOut();
         $('.slider-data')
             .eq(0)
             .fadeIn();
         $('.indicators span')
             .eq(0)
             .addClass('current')
             .css('background-color', 'white');
    
    // function that slide on indicator click
    function indicatorClick(index){
        $('.slider-data')
             .removeClass('current')
             .fadeOut();
         $('.indicators span')
             .removeClass('current')
             .css('background-color','transparent');
         current = index;
         $('.slider-data')
             .eq(current)
             .addClass('current')
             .fadeIn();
         $('.indicators span')
             .eq(current)
             .addClass('current')
             .css('background-color','white'); 
    };
    // setting change for every data in mySlider
    
    var max = $('.slider-data')
            .last()
            .index();
    var min = 0;
    var current = $('.slider-content .current')
        .index();
    
    $('.right .glyph-arrow').on('click', function () {
        if(current !== max){
         $('.slider-data')
             .removeClass('current')
             .fadeOut();
         $('.indicators span')
             .removeClass('current')
             .css('background-color','transparent');
         current++;
         $('.slider-data')
             .eq(current)
             .addClass('current')
             .fadeIn();
         $('.indicators span')
             .eq(current)
             .addClass('current')
             .css('background-color','white');
        }else{
            current = $('.slider-data')
                .first()
                .addClass('current')
                .index();
            $('.slider-data')
                .fadeOut();
            $('.slider-data')
                .eq(0)
                .fadeIn();
            $('.indicators span')
                .css('background-color', 'transparent');
            $('.indicators span')
                .eq(0)
                .css('background-color', 'white');
        }
        
    });
        
    $('.left .glyph-arrow').on('click', function () {
        if(current !== min){
         $('.slider-data')
             .removeClass('current')
             .fadeOut();
         $('.indicators span')
             .removeClass('current')
             .css('background-color','transparent');
         current--;
         $('.slider-data')
             .eq(current)
             .addClass('current')
             .fadeIn();
         $('.indicators span')
             .eq(current)
             .addClass('current')
             .css('background-color','white'); 
        }else{
            current = $('.slider-data')
                .last()
                .addClass('current')
                .index();
            $('.slider-data')
                .fadeOut();
            $('.slider-data')
                .eq(3)
                .fadeIn();
            $('.indicators span')
                .css('background-color', 'transparent');
            $('.indicators span')
                .eq(3)
                .css('background-color', 'white');
        }
        
    });
    
    $('.indicators span').on('click', function(){
       indicatorClick($(this).index());
    });
    
});