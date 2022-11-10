import * as ActionTypes from './ActionTypes';
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';
import { getDatabase, ref, set } from "firebase/database";
import { doc, Firestore, getDoc } from "firebase/firestore";


export const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}
export const receiveLogin = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user
    }
}
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return auth.signInWithEmailAndPassword(creds.username, creds.password)
        .then(() => {
            var user = auth.currentUser;
            var userInfo = {};
            var userInfo2 = {};

            // var userData = firestore.collection('User').where('email', '==', user.email)
            // .get()
            //  .then(snapshot => {
            //         snapshot.forEach(doc => {
            //                 //console.log(doc.data());
            //             //if(doc.data().email==user.email)
            //                 userInfo= doc.data();
            //             //console.log(userInfo);
            //             // userInfo2= userInfo;
            //         })
            //         return userData;

            //     });

            localStorage.setItem('user', JSON.stringify(user));

            var userRef =firestore.collection("User");

var query = userRef.where('email', '==', user.email);
        
               query.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
            dispatch(receiveLogin(doc.data()));

                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        

        })
        .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}
export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    auth.signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

    localStorage.removeItem('user');
    dispatch(receiveLogout());
}





export  const fetchUser = (user) =>    async (dispatch) => {

    const db = getDatabase();
    // Detection Phase
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    var rnum = user.email.substring(0, 8);
    const userRef = firestore.doc(`User/${uid}`)

    

    // const docRef = doc(db, "User",uid);
    const docSnap = await getDoc(userRef);

   // if (!docSnap.exists()) {
        if (email[0] >= '0' && email[0] <= '9') {



            await userRef.set({

                name: displayName,
                email: email,
                image: photoURL,
                role: "student",
                rollNum: rnum,
                uid: uid

            }, {merge: true}
            )
                .then(() => {
                    console.log("Student successfully written!" );
                })
                .catch((error) => {
                    console.error("Error writing Student in document:  ", error);
                });
        }
        else {

            await userRef.set({

                name: displayName,
                email: email,
                image: photoURL,
                role: "faculty",
               
            },{merge:true})
                .then(() => {
                    console.log("Faculty successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing Faculty in document:  ", error);
                });

        }

    const docUser = await getDoc(userRef);
    console.log(docUser.data());

    dispatch(receiveLogin(docUser.data()));

}


export const googleLogin = () => (dispatch) => {
    const provider = new fireauth.GoogleAuthProvider();


    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));

            if (user.email.includes("@lnmiit.ac.in") === false) {
                dispatch(logoutUser());
                dispatch(loginError("Error 401: Unauthorized"))

            }
            else {


                // user = 
               
                    dispatch(fetchUser(user));
               
                

            
                
            }
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}