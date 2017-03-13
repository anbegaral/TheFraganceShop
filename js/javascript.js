'use strict'

var product = {
  "name" : "KORRES MAKEUP",
  "subtitle" : "Zea Mays 15 Natural Blusher 6g",
  "description": "Korres makeup has a vitamin-packed formulas with enchanced skin and lash benefits. Shop the Korres Makeup Zea Mays 15 Natural Blusher 6g online today at The Fragrance Shop.",
  "code": "Stock Code: 13064",
  "price": "£17.50",
  "numStars": 3,
  "image": "images/korrezeamays15x300.jpg",
  "ingredients": "<p>5.1 oz/150 ml<br>Cetyl Ethylhexanoate, Oryza Sativa (Rice) Bran Oil, ...</p>",
  //function to show the stars in depending on the reviews
  calcStars: function(){
    var starsHtml = '';
    var maxStars = 5;
    for(var i=0;i< product.numStars; i++){
      starsHtml += '<span class="glyphicon glyphicon-star"></span>'
    }
    for(var i=0;i< maxStars - product.numStars; i++){
      starsHtml += '<span class="glyphicon glyphicon-star-empty"></span>'
    }
    return starsHtml;
  },
  //initializes the data
  init: function(){
    var stars = product.calcStars();
    console.log(stars);
    $('#name').html(product.name);
    $('#subtitle').html(product.subtitle);
    $('#stars').html(stars);
    $('#description').html(product.description);
    $('#code').html(product.code);
    $('#price').html(product.price);
    $('#information').html(product.ingredients);
    $('#image').attr('src', product.image);
  }
}

var cart = []

var addToBasket = function(){
  cart.push(product);
  $('.cart').text(cart.length);
}

// TODO: Add information to the rest of the buttons
$('#details').click(function(e){
  $('.information').css('display', 'none');
  e.preventDefault();
});

$('#ingredients').click(function(e){
  $('.information').html(product.ingredients);
  $('.information').css('display', 'block');
  e.preventDefault();
});

$('#gift').click(function(e){
  $('.information').css('display', 'none');
  e.preventDefault();
});

$('#delivery').click(function(e){
  $('.information').css('display', 'none');
  e.preventDefault();
});

$('#add').click(addToBasket);

//Loading the data
product.init();
