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
// Listing global vars
var items_clicked = [];
var busmall_products = [];
var number_of_clicks = 25;
var busmall_names = [];
var ctx = document.getElementById('myChart').getContext('2d');

var product_container = document.body;

var click_info = document.getElementById('list')
var div1 = document.getElementById('image1');
var div2 = document.getElementById('image2');
var div3 = document.getElementById('image3');
var h2_el1 = document.getElementById('h21');
var h2_el2 = document.getElementById('h22');
var h2_el3 = document.getElementById('h23');
var pics1 = document.getElementById('img1');
var pics2 = document.getElementById('img2');
var pics3 = document.getElementById('img3');
var h3_el = document.getElementById('total');





var image_displayed1 = null;
var image_displayed2 = null;
var image_displayed3 = null;

// Constructer function for pictures objects 
var Product = function(name, url){
    this.name = name;
    this.url = url;
    this.clicks = 0;
    this.appeaeared = 0;

    busmall_products.push(this);
    busmall_names.push(name);
};

Product.prototype.render_as_img = function(div1, h2_el1, pics1){
    this.appeaeared++;
    pics1.src = this.url;
    h2_el1.textContent = this.name;   
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


image_displayed1 = busmall_products[0];
image_displayed2 = busmall_products[1];
image_displayed3 = busmall_products[2];


var handle_bus_click = function(event){
    number_of_clicks --;
    if(event.target.tagName !== 'IMG'){
        return;
    }

    if(event.target.tagName === 'IMG'){
    
    if(event.target.id === 'img1'){
        image_displayed1.clicks++;
    
       } else if(event.target.id === 'img2'){
        image_displayed2.clicks++;
    }
    }
    if(event.target.id === 'img3'){
        image_displayed3.clicks++;
    }

    if(number_of_clicks <= 0){
        product_container.removeEventListener('click', handle_bus_click);
        
    for(var i =0; i < busmall_products.length; i++){
        if(busmall_products[i].appeaeared === 0){
            var percentage = 0;
        }
        else{
            percentage = Math.round(busmall_products[i].clicks / busmall_products[i].appeaeared * 100);
        }
        var li_el = document.createElement('li');
        li_el.textContent = `${busmall_products[i].name} -- clicks: ${busmall_products[i].clicks}, times shown: ${busmall_products[i].appeaeared}, percent of time selected: ${percentage}`;
        click_info.appendChild(li_el);
        }
            document.getElementById('body').innerHTML = '';
           BusMallChart();  
    }
    var random1 = Math.floor(Math.random() * busmall_products.length);
    var random2 = Math.floor(Math.random() * busmall_products.length);
    var random3 = Math.floor(Math.random() * busmall_products.length);
    

    busmall_products[random1].render_as_img(div1, h2_el1, pics1);
    busmall_products[random2].render_as_img(div2, h2_el2, pics2);
    busmall_products[random3].render_as_img(div3, h2_el3, pics3);
    
    image_displayed1 = busmall_products[random1];
    image_displayed2 = busmall_products[random2];
    image_displayed3 = busmall_products[random3];

    
}



product_container.addEventListener('click', handle_bus_click);

function BusMallChart(){
    
for(var i = 0; i < busmall_products.length; i++){
    var productClicks = busmall_products[i].clicks;
    items_clicked.push(productClicks);
}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: busmall_names,
        datasets: [{
            label: '# of Votes',
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
                'rgba(255, 99, 132, 1)',
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
                    beginAtZero: true
                }
            }]
        }
    }
});
};






