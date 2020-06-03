// this is for inflow HTML 

// document.getElementById("cameraTakePicture").addEventListener 
//    ("click", cameraTakePicture); 

// function cameraTakePicture() { 
//     navigator.camera.getPicture(onSuccess, onFail, {  
//        quality: 50, 
//        destinationType: Camera.DestinationType.DATA_URL 
//     });  
    
//     function onSuccess(imageData) { 
//        var image = document.getElementById('myImage'); 
//        image.src = "data:image/jpeg;base64," + imageData; 
//     }  
    
//     function onFail(message) { 
//        alert('Failed because: ' + message); 
//     } 
//  }





// var app = {
//     // Application Constructor
//     initialize: function() {
//         document.getElementById("scancode").addEventListener 
//         ("click", scan);
//     },

//     scan: function () {
//         cordova.plugins.barcodeScanner.scan(
//             function (result) {
//                 if(!result.cancelled) {
//                     if(result.format == "QR_CODE") {
//                         navigator.notification.prompt("Please enter name of data",  function(input){
//                             var name = input.input1;
//                             var value = result.text;

//                             var data = localStorage.getItem("LocalData");
//                             console.log(data);
//                             data = JSON.parse(data);
//                             data[data.length] = [name, value];

//                             localStorage.setItem("LocalData", JSON.stringify(data));

//                             alert("Done");
//                         });
//                     }
//                 }
//             },
//             function (error) {
//                 alert("Scanning failed: " + error);
//             }
//         );
//     }
// };

// app.initialize();





























// var app = {
//     initialize: function () {
//         if(localStorage.getItem("LocalData") == null) {
//             var data = [];
//             data = JSON.stringify(data);
//             localStorage.setItem("LocalData", data);
//         }

//     },

//     scan: function () {
//         cordova.plugins.barcodeScanner.scan(
//             function (result) {
//                 if(!result.cancelled) {
//                     if(result.format == "QR_CODE") {
//                         navigator.notification.prompt("Please enter name of data",  function(input){
//                             var name = input.input1;
//                             var value = result.text;

//                             var data = localStorage.getItem("LocalData");
//                             console.log(data);
//                             data = JSON.parse(data);
//                             data[data.length] = [name, value];

//                             localStorage.setItem("LocalData", JSON.stringify(data));

//                             alert("Done");
//                         });
//                     }
//                 }
//             },

//             function (error) {
//                 alert("Scanning failed: " + error);
//             }
//         );
//     }  
// };

// app.initialize();
// app.scan();