console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $("#viewKoalas").on('click', '.deleteBttn', deleteFunc);
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $("#nameIn").val(),
      age: $("#ageIn").val(),
      gender: $("#genderIn").val(),
      readyForTransfer: $("#readyForTransferIn").val(),
      notes: $("#notesIn").val()
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
  $(document).on('click', '.readyToTransferBtn', readyToTransfer)
}


function saveKoala(input){
  // ajax call to server to get koalas
  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: input 
  }).then(function(response) {
    // console.log("koala client side resp", response);
    //reload the new koalas
    getKoalas();
  }).catch(function(error) {
    console.log('error in koala side post', error); 
    alert('Error adding koala. Please try again later.')       
  });
  };


function readyToTransfer() {
  let id = $(this).closest('tr').data('id')/*get the id of the row/koala, have to see how table is */
  $.ajax({
    method: 'PUT',
    url: `/koalas/${id}`
  }).then((res) => {
    console.log('Succesfully updated the koala.', res);
  }).catch((error) => {
    console.log('/PUT request failed: ', error);
    alert('Check console for error. PUT request failed.')
  });
};


function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
  })
  .then(function (response){
    // empty the DOM before reappending
    $("#viewKoalas").empty();
    // append to DOM
    for (let i = 0; i < response.length; i++) {
      $('#viewKoalas').append(`
          <tr data-id=${response[i].id}">
              <td>${response[i].name}</td>
              <td>${response[i].age}</td>
              <td>${response[i].gender}</td>
              <td>${response[i].ready_for_transfer}</td>
              <td>${response[i].notes}</td>
              <td><button class="readyBtn">Ready for Transfer</button></td>
              <td><button class="deleteBttn">Delete</button></td>
          </tr>
      `);
    }
  });
} // end getKoalas


function deleteFunc() {
  $(this).parent().parent().remove();
}