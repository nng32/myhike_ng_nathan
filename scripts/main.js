function readDisplayQuote() {
    // console.log("readDisplay called");

    // get into write collection
    db.collection("quotes").doc("tuesday")
    .onSnapshot(tuesdayDoc => {
        console.log(tuesdayDoc.data());
        document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;
    })
}

function insertName() {
    // check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid);
            currentUser = db.collection("users").doc(user.uid); // go to user's document in firestore
            currentUser.get().then(userDoc => {
                // get username
                var userName = userDoc.data().name;
                console.log(userName);
                $("#name-goes-here").text(userName);
                document.getElementById("name-goes-here").innerHTML = userName;
            })
        }
    })
}

readDisplayQuote();
insertName();