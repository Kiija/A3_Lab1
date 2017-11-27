(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
 var img = document.querySelectorAll('.data-ref'),
     model = document.querySelector('.modelName'),
     price = document.querySelector('.priceInfo'),
     description = document.querySelector('.modelDetails');

function showData(){

       let changeText = carData[this.id];
       model.firstChild.nodeValue = changeText.model;
       price.firstChild.nodeValue = changeText.price;
       description.firstChild.nodeValue = changeText.description;
       img.forEach(function(image, index){
          image.classList.add('nonActive');
         });

         this.classList.remove('nonActive');

       }

       img.forEach(function(image, index){
             //add an event handler to each image
          image.addEventListener('click', showData, false);
         });

})();
