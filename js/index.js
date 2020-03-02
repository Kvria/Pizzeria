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
});
var order = new String;
function Order(firstName, lastName, contact, address, size, crust, toppings, flavours) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.address = address;
    this. size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.flavours = flavours;
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

let submitDetails = document.getElementById('submit');

submitDetails.addEventListener('click', submitBirthday)
function submitBirthday(e) {
  e.preventDefault();
var calc = function add()