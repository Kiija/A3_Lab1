(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
 var img = document.querySelectorAll('.data-ref');
    //model = document.querySelector('.modelName'),
     //price = document.querySelector('.priceInfo'),
     //description = document.querySelector('.modelDetails');
const httpRequest = new XMLHttpRequest();

function showData(){
    const url ='./includes/functions.php?carModel=' + this.id;

        //the fetch uses new JS Promise API
        fetch(url) //do an ajax call with fetch
        .then((resp)=> resp.json()) //convert to json
        .then(({modelName, pricing, modelDetails, model }) => {
          let carModel = document.querySelector('.modelName').textContent = modelName;
          let price = document.querySelector('.priceInfo').textContent = pricing;
          let desc = document.querySelector('.modelDetails').textContent = modelDetails;

             img.forEach(function(image, index){
               image.classList.add('nonActive');
             }); //call the process function

             document.querySelector(`#${model}`).classList.remove('nonActive');
           })

        .catch(function(error) {
          console.log(error);
        });

}

// function processResult(data){
//     const { modelName, pricing, modelDetails} = data;
//
//   ;
//          });
//
//          document.querySelector('#${data.model}').classList.remove('nonActive');
//
//          this.classList.remove('nonActive');
//
//        }
//
       img.forEach(function(image, index){
             //add an event handler to each image
          image.addEventListener('click', showData, false);
         });

})();
