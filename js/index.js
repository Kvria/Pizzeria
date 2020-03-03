var total=0;

$(document).ready(function(){
    $(".image1").hover(function(){
        $(".text1").toggle();
    });
    $(".image2").hover(function(){
        $(".text2").toggle();
    });
    $(".image3").hover(function(){
        $(".text3").toggle(); 
    });
    $(".image4").hover(function(){
        $(".text4").toggle(); 
    });
    $(".image5").hover(function(){
        $(".text5").toggle(); 
    });
    $(".image6").hover(function(){
        $(".text6").toggle(); 
    });
    $(".image7").hover(function(){
        $(".text7").toggle(); 
    });
    $(".image8").hover(function(){
        $(".text8").toggle(); 
    });
    $(".image9").hover(function(){
        $(".text9").toggle(); 
    });
    $(".image10").hover(function(){
        $(".text10").toggle(); 
    });
    $(".image11").hover(function(){
        $(".text11").toggle(); 
    });
    $(".image12").hover(function(){
        $(".text12").toggle(); 
    });
    $(".image13").hover(function(){
        $(".text13").toggle(); 
    });
    $(".image14").hover(function(){
        $(".text14").toggle(); 
    });

    $("#submit").click(function(event){
        event.preventDefault();
        
        var size=$("#size").val();
        var crust=$("#crust").val();
        var firstName=$("#fname").val();
        var lastName=$("#lname").val();
        var contact=$("#contact").val();
        var toppings=$("#toppings").val();
        var number=parseInt($("#number").val());
        var delivery=$("#delivery").val();
        var location=$("#location").val();
        
        $("#showsize").text(newPizza.size)

        var newPizza=new Order(firstName,lastName,contact,size,crust,toppings,number,delivery,location)
        checkout(size,crust,toppings,number,delivery);
        $("#")
        total=0;
       

    });
});
var order = new String;
function Order(firstName, lastName, contact, size, crust, toppings,number, delivery,location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.location = location;
    this. size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.delivery = delivery;
    this.number=number;
}


var small = 650
var medium = 800
var large = 950
var stuffed = 50
var gfree = 150
var ebacon = 70
var ebell = 50
var ecorn = 50
var eolives = 150
var nai = 150
var nonai = 300


function checkout(size,crust,toppings,number,delivery){
    switch (size){
        case ("small"):
            total=(total+small)*number;
            break;
        case ("medium"):
            total=(total+medium)*number;
            break;
        case ("large"):
            total=(total+large)*number;
            break;

    }
    switch (crust){
        case ("crispy"):
            total=(total+0)*number;
            break;
        case ("stuffed"):
            total=(total+stuffed)*number;
            break;
        case ("gluten-free"):
            total=(total+gfree)*number;
            break;
        
    }
    
    switch (toppings){
        case ("bacon"):
            total=(total+ebacon)*number;
            break;
        case ("bell"):
            total=(total+ebell)*number;
            break;
        case ("corn"):
            total=(total+ecorn)*number;
            break;
        case ("olives"):
            total=(total+eolives)*number;
            break;
        
    }

     switch (delivery){
        case ("yes"):
            switch (location){
                case ("nai"):
                    total=total+nai;
                    break;
                case ("nonai"):
                    total=total+nonai;
                    break;
            }
    }
    
}