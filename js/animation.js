/* elements' animation */

$(document).ready(function() {
        $.fn.fullpage({
            slidesColor: ['', '#f7ea22', '#7ff779', '#69c3f7', '#f3d579', '#f5f5f5'],
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
            navigation: true,
            afterLoad: function(anchorLink, index){
                if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6){
                    $('.coder-designer').addClass("animated flipInY", 500);
                    $('.paragraph').addClass("animated fadeInUp", 400);
                    $('.services-content, .blog-icon').delay(200).addClass("animated fadeInUp",400);
               }
            },
            onLeave: function(index, direction){
                if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6){
                    $('.coder-designer').removeClass("animated flipInY");
                    $('.paragraph').removeClass("animated fadeInUp", 400);
                    $('.services-content, .blog-icon').removeClass("animated fadeInUp",400);
               }
            }
        });
        
        $('.logo').addClass("animated bounceIn", 400);
        $('.text-content').delay(200).addClass("animated flipInY", 600);
        /*$('#scrollDown').on('click', function(e){
            e.preventDefault();
            jQuery.scrollTo(".page2", 1000, {offset: -(jQuery('.page1').height()), axis: 'y'});
        });*/
        
        //side bar function
        
        $('.menu-btn').on("click", function(e){
            e.preventDefault();
            
            var _this = $(this);
            
            if($('.menu-box').css('left') == '-245px'){
                _this.animate({left: '265px'}, 350);
                $('.menu-box').animate({left: '0'}, 350);
                $('#superContainer').animate({marginLeft: '245px'}, 350);     
            }else{
                $('.menu-box').animate({left: '-245px'}, 350);
                $('#superContainer').animate({marginLeft: '0'}, 350);
                _this.animate({left: '1em'}, 350);
            }
        });
        $('.close-btn, .main').on("click", function(){
            $('.menu-btn').animate({left: '1em'}, 350);
            $('#superContainer').animate({marginLeft: '0'}, 350);
            $('.menu-box').animate({left: '-245px'}, 350);
        });
});