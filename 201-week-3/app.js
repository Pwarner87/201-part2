'use strict'

/*
List global vars
    number of clicks
    array of all objects
    elements on the page

Constructor function
    name
    url
    clickcount
    how many times it appeared

Render it to the page
    get the image by id
    update image src with data url of the data

instantiate busmall objects
    new Constructor(params, params2)

click handler
    click to a max of 25 times
        show results
        kill the listener

    track number of clicks, increment



*/
var items_clicked = [];
var busmall_products = [];
var number_of_clicks = 25;
var busmall_names = [];

var product_container = document.body;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

var image_displayed1 = null;
var image_displayed2 = null;
var image_displayed3 = null;

var Product = function(name, url){
    this.name = name;
    this.url = url;
    this.clicks = 0;
    this.appeaeared = 0;

    busmall_products.push(this);
    busmall_names.push(name);
};

Product.prototype.render_as_img = function(target_img){
    target_img.src = this.url;
};

new Product('bag', 'bag.jpg');
new Product('banana', 'banana.jpg');
new Product('bathroom', 'bathroom.jpg');
new Product('boots', 'boots.jpg');
new Product('breakfast', 'breakfast.jpg')
new Product('bubblegum', 'bubblegum.jpg');
new Product('chair', 'chair.jpg');
new Product('cthulhu', 'cthulhu.jpg');
new Product('dog-duck', 'dog-duck.jpg');
new Product('dragon', 'dragon.jpg');
new Product('pen', 'pen.jpg');
new Product('pet-sweep', 'pet-sweep.jpg');
new Product('scissors', 'scissors.jpg');
new Product('shark', 'shark.jpg');
new Product('sweep', 'sweep.png');
new Product('tauntaun', 'tauntaun.jpg');
new Product('unicorn', 'unicorn.jpg');
new Product('usb', 'usb.gif');
new Product('water-can', 'water-can.jpg');
new Product('wine-glass', 'wine-glass.jpg');
// var stringy_busmall = localStorage
// busmall_products = JSON.parse(stringy_busmall);

image_displayed1 = busmall_products[0];
image_displayed2 = busmall_products[1];
image_displayed3 = busmall_products[2];



var handle_bus_click = function(event){
    number_of_clicks --;

    if(event.target.tagName === 'IMG'){

    if(event.target.id === 'image1'){
        image_displayed1.clicks++;
    
    

       } else if(event.target.id === 'image2'){
        image_displayed2.clicks++;
    }
    }
    if(event.target.id === 'image3'){
        image_displayed3.clicks++;
    }

    if(number_of_clicks <= 0){
        product_container.removeEventListener('click', handle_bus_click);
    
    for(var i =0; i < busmall_products.length; i++){
    items_clicked.push(busmall_products[i].clicks);
}
    }
    var random1 = Math.floor(Math.random() * busmall_products.length);
    var random2 = Math.floor(Math.random() * busmall_products.length);
    var random3 = Math.floor(Math.random() * busmall_products.length);
    

    busmall_products[random1].render_as_img(image1);
    busmall_products[random2].render_as_img(image2);
    busmall_products[random3].render_as_img(image3);

    image_displayed1 = busmall_products[random1];
    image_displayed2 = busmall_products[random2];
    image_displayed3 = busmall_products[random3];
}



product_container.addEventListener('click', handle_bus_click);

var canvas_el = document.getElementById('results');
var ctx = canvas_el.getContext('2d');


 var render_chart = function(data, labels, label, ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
        labels: busmall_names,
        datasets: [{
            label: 'Number of Votes',
            data: items_clicked,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})
 };
 render_chart;







