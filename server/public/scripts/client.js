console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
  $(document).on('click', '.readyToTransferBtn', readyToTransfer)
}

function readyToTransfer() {
  let item = $(this).closest('tr').data('id')/*get the id of the row/koala, have to see how table is */
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
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}
