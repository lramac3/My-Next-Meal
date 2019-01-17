let errorMessage, user = {
     uid: ``,
     email: ``,
     name: ``,
     alergies: [],
     likes: [],
     favorites: []
}

let createUser =  (email, password) => {
     sessionStorage.setItem("user", null);
     sessionStorage.setItem("errorMessage", null);
     let retVal =  auth().createUserWithEmailAndPassword(email, password)
     .then(function (returnVal) {
          user.uid = returnVal.user.uid;
          db().ref(`users/${returnVal.user.uid}`).set({
               name: ``,
               email: returnVal.user.email
          }).then(function(data){
               sessionStorage.setItem("user", JSON.stringify(user));
               sessionStorage.setItem("errorMessage", errorMessage);
               window.location.assign("profile.html")
          }) .catch(function (error) {
               // Handle Errors here.
               errorMessage = error.message;
               sessionStorage.setItem("errorMessage", errorMessage);
               let mod = `<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Login Error</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">${errorMessage}</div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div></div>`;
               $("body").append(mod);
               $("#exampleModal").modal('show');
               $("#exampleModal").on('hidden.bs.modal', function () {
                   $(this).remove();
               });
          });
          //db().ref(`users/${returnVal.user.uid}/lastLogin`).push(firebase.database.ServerValue.TIMESTAMP)
          //db().ref(`users/${returnVal.user.uid}/alergies`).push(``)
          //db().ref(`users/${returnVal.user.uid}/likes`).push(``)
     })
     .catch(function (error) {
          // Handle Errors here.
          errorMessage = error.message;
          sessionStorage.setItem("errorMessage", errorMessage);
          sessionStorage.setItem("errorMessage", errorMessage);
               let mod = `<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Login Error</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">${errorMessage}</div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>`;
               $("body").append(mod);
               $("#exampleModal").modal('show');
               $("#exampleModal").on('hidden.bs.modal', function () {
                   $(this).remove();
               });
     })

}

$(document).ready(function (evt) {

});