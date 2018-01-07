(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
 var img = document.querySelectorAll('.data-ref');
    //model = document.querySelector('.modelName'),
     //price = document.querySelector('.priceInfo'),
     //description = document.querySelector('.modelDetails');
const httpRequest = new XMLHttpRequest();

function showData(){
//make an AJAX call to the DB; handle errors firstChild
      if (!httpRequest){
        alert('giving up');
        return false;
      }

      httpRequest.onreadystatechange = processRequest;
      httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
      httpRequest.send();
}

    function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
    //debugger;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
        //debugger;
        let data = JSON.parse(httpRequest.responseText);

        processResult(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }


function processResult(data){
    const { modelName, pricing, modelDetails} = data;

    let model = document.querySelector('.modelName').textContent = modelName;
    let price = document.querySelector('.priceInfo').textContent = pricing;
    let desc = document.querySelector('.modelDetails').textContent = modelDetails;

       //let changeText = carData[this.id];
      // model.firstChild.nodeValue = changeText.model;
       //price.firstChild.nodeValue = changeText.price;
       //description.firstChild.nodeValue = changeText.description;
       img.forEach(function(image, index){
         image.classList.add('nonActive');
         });

         document.querySelector('#${data.model}').classList.remove('nonActive');

         this.classList.remove('nonActive');

       }

       img.forEach(function(image, index){
             //add an event handler to each image
          image.addEventListener('click', showData, false);
         });

})();
