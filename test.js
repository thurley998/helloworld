function countClicks(){
    console.log("Counting Start...");
    var counts = localStorage.getItem('click-counts');//You can use
    if (counts!==null){
        var newClick = parseInt(counts) + 1;
        localStorage.setItem('click-counts', newClick);
    }
    else{
        localStorage.setItem('click-counts', "1");
    }
   document.getElementById("showCounts").innerHTML = counts;
 }

 // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "gs://comunity-000.appspot.com/,
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();