import React from 'react';
import fire from '../fire'

var db = fire.firestore();
var storage = fire.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('dashboard.PNG');

const AddUser = function(){
    console.log("success");
db.collection("users").add({
    first: "ARIS",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
return(
    <div>
        <p>SUCCESS</p>
    </div>
)
}

export default AddUser;