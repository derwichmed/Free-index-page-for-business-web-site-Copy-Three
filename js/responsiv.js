$(function (){
    isNavGaucheSubItemHidden = true;
    $('.body_index > nav > ul > li').click(function (){
        if(isNavGaucheSubItemHidden){
            $(this).find('> ul').css('display','block');
            $(this).find('> ul').addClass('nav_sub_item_show');
            isNavGaucheSubItemHidden = false;
        }
        else{
            $(this).find('> ul').css('display','none');
            $(this).find('> ul').removeClass('nav_sub_item_show');
            isNavGaucheSubItemHidden = true;
        }
    });
    
    isMenuOneHidden = true;
    $('.ecomerce_menu_one > div:nth-child(2) > img').click(function (){
        if(isMenuOneHidden){
            $('.ecomerce_menu_one > div:nth-child(2) > ul').css('display','block');
            isMenuOneHidden = false;
        }
        else{
            $('.ecomerce_menu_one > div:nth-child(2) > ul').css('display','none');
            isMenuOneHidden = true;
        }
        
    });
    
    isMenuTwoHidden = true;
    $('.ecomerce_menu_two > div:first-child > img').click(function (){
        if(isMenuTwoHidden){
            $('.ecomerce_menu_two > div:first-child > ul > li + li').css('display','block'); 
            isMenuTwoHidden = false;
        }
        else{
            $('.ecomerce_menu_two > div:first-child > ul > li + li').css('display','none'); 
            isMenuTwoHidden = true;
        }
       
    });
    
    isNavMenuHidden = true;
    $('.body_index > nav > div >  img').click(function (){
       if(isNavMenuHidden){
           $('.body_index > nav > ul').css('display','block');
           isNavMenuHidden = false;
       }
        else{
            $('.body_index > nav > ul').css('display','none');
            isNavMenuHidden = true;
        }
    });
    
});