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
    
    // call saveKoala with the new obejct
    saveKoala();
  }); 
}



function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas

  let koalaToSend = {
    name: 'testName',
    age: 'testName',
    gender: 'testName',
    readyForTransfer: 'testName',
    notes: 'testName',
  };
 
$.ajax({
  method: 'POST',
  url: '/koalas',
  data: koalaToSend
}).then(function(response) {
  console.log("koala client side resp", response);
  //reload the new koalas
  getKoalas();
}).catch(function(error) {
  console.log('error in artist post', error); 
  alert('Error adding koala. Please try again later.')       
});
};
