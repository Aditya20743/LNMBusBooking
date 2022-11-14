import * as ActionTypes from './ActionTypes';
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';
import { getDatabase, ref, set } from "firebase/database";
import { doc, Firestore, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';

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

// outpass functions
export const postOutpass = (user, outpass) => async (dispatch) => {
    console.log(user);
    outpass['uid'] = user.uid;
    outpass['name']= user.name;
    outpass['rollNum']= user.rollNum;

    dispatch(requestOutpass());
    try {
        await addDoc(collection(db, 'outpass'), outpass);
        dispatch(fetchOutpass(user));
    }
    catch (error) {
        dispatch(outpassError(error.message))
    }
};

export const fetchOutpass = (user) => async (dispatch) => {

    dispatch(requestOutpass());
    try {
        const querySnapshot = await getDocs(collection(db, "outpass"));
        let outpassArr = [];

        if (user === undefined)
            throw Error("Error unauthorized");
        if (user.role === 'student') {
            const userid = user.uid;
            querySnapshot.forEach((doc) => {
                if (doc.data().uid === userid) {
                    const _id = doc.id;
                    outpassArr.push({ _id, ...doc.data() });
                }   
            })
        }
        else if(user.role==='caretaker'){
            const hostel = user.hostelName;
            console.log(user);
            querySnapshot.forEach((doc) => {
                if (doc.data().hostelName === hostel)
                    outpassArr.push(doc.data());
            })
        }
        else{
            dispatch(outpassError('Error unauthorized'));
        }
        dispatch(receiveOutpass(outpassArr));
    }
    catch (error) {
        dispatch(outpassError(error.message))
    }
}

export const deleteOutpass = (outpass) => async (dispatch) => {
    dispatch(requestOutpass());
    try {
        const outpassRef = doc(db, "outpass", outpass.uid);
        await deleteDoc(outpassRef);
        dispatch(receiveOutpass(outpass));
    } catch (error) {
        dispatch(outpassError(error.message));
    }
}

// Bus functions
export const postBus = (bus) => async (dispatch) => {

    dispatch(requestBus());

    try {
        await addDoc(collection(db, 'bus'), bus);
        dispatch(receiveBus(bus));
    }
    catch (error) {
        dispatch(busError(error.message))
    }
};

export const fetchBus = () => async (dispatch) => {

    dispatch(requestBus());
    try {
        const querySnapshot = await getDocs(collection(db, "bus"));
        let busArr = [];
        querySnapshot.forEach((doc) => {
            const _id = doc.id;
                    busArr.push({ _id, ...doc.data() });
        })
        dispatch(receiveBus(busArr));
    }
    catch (error) {
        dispatch(busError(error.message))
    }
}

export const deleteBus = (bus) => async (dispatch) => {
    {
        dispatch(requestBus());
        try {
            const busRef = doc(db, "bus", bus.busId);
            await deleteDoc(busRef);
            dispatch(receiveBus(bus));

        } catch (error) {
            dispatch(busError(error.message));
        }
    };
}

// Store functions
export const postStore = (store) => async (dispatch) => {
    dispatch(requestStore());
    try {
        await addDoc(collection(db, 'store'), store);
        dispatch(receiveStore(store));
    }
    catch (error) {
        dispatch(storeError(error.message))
    }
};

export const fetchStore = () => async (dispatch) => {

    dispatch(requestStore());
    try {
        const querySnapshot = await getDocs(collection(db, "store"));
        let storeArr = [];
        querySnapshot.forEach((doc) => {
            const _id = doc.id;
            storeArr.push({ _id, ...doc.data() });
        })
        dispatch(receiveStore(storeArr));
    }
    catch (error) {
        dispatch(storeError(error.message))
    }
}

// Ticket functions
export const postTicket = (ticket) => async (dispatch) => {

    const user = auth.currentUser;
    const userid = user.uid;
    ticket['uid'] = userid;

    dispatch(requestTicket());
    try {
        await addDoc(collection(db, 'ticket'), ticket);
        dispatch(receiveTicket(ticket));
    }
    catch (error) {
        dispatch(ticketError(error.message))
    }
};

export const fetchTicket = () => async (dispatch) => {

    dispatch(requestTicket());
    try {
        const querySnapshot = await getDocs(collection(db, "ticket"));
        let ticketArr = [];
        const user = auth.currentUser;
        if (user !== undefined && user.role === 'student') {
            const userid = user.uid;
            querySnapshot.forEach((doc) => {
                if (doc.data().uid === userid)
                {const _id = doc.id;
                ticketArr.push({ _id, ...doc.data() });}
            })
        }
        else{
            dispatch(ticketError('Error unauthorized'));
        }
        dispatch(receiveTicket(ticketArr));
    }
    catch (error) {
        dispatch(ticketError(error.message))
    }
}

// Wallet functions
export const postWallet = (wallet) => async (dispatch) => {
    dispatch(requestWallet());
    try {
        await addDoc(collection(db, 'wallet'), wallet);
        dispatch(receiveWallet(wallet));
    }
    catch (error) {
        dispatch(walletError(error.message))
    }
};

export const fetchWallet = () => async (dispatch) => {

    dispatch(requestWallet());
    try {
        const user = auth.currentUser;
        const userid = user.uid;
        const querySnapshot = await getDocs(collection(db, "wallet"));
        querySnapshot.forEach((doc) => {
            if (doc.data().uid === userid)
                dispatch(receiveWallet(doc.data()));
        })

    }
    catch (error) {
        dispatch(walletError(error.message))
    }
}

export const updateWallet = (wallet,tokens) => async (dispatch) => {

    dispatch(requestWallet());
    try {    
        const walletRef = doc(db,'wallet',wallet.uid);

        walletRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            console.log("KKK");
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    
        // var bal = wallet.tokenBalance + tokens;
        console.log(walletRef.uid+ "Atharba");
        await updateDoc(walletRef, {
            
            // console.log(wallet.tokenBalance+'atharv');
            tokenBalance:50
        });

        console.log(wallet);
        dispatch(receiveWallet(wallet)); 
    }
    catch (error) {
        dispatch(walletError(error.message))
    }
}


///////////////////////////////////////////////////////////////////////////////////

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return auth.signInWithEmailAndPassword(creds.username, creds.password)
        .then(() => {
            var user = auth.currentUser;

            localStorage.setItem('user', JSON.stringify(user));

            var userRef = firestore.collection("User");
            var query = userRef.where('email', '==', user.email);

            query.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    dispatch(receiveLogin(doc.data()));
                    dispatch(fetchOutpass(doc.data()));
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
    dispatch(fetchOutpass());
}

export const fetchUser = (user) => async (dispatch) => {

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
        }, { merge: true }
        )
            .then(() => {
                console.log("Student successfully written!");
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
        }, { merge: true })
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
                dispatch(loginError("Error 401: Unauthorized"));
            }
            else {
                dispatch(fetchUser(user));
            }

            if(user.role==='student'){
                dispatch(fetchOutpass(user));
            }
            dispatch(fetchWallet(user));
            const b = {uid : '1'};
            dispatch(updateWallet(b, 8));
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}

//bus.js
export const requestBus = () => {
    return {
        type: ActionTypes.BUS_REQUEST
    }
}
export const receiveBus = (bus) => {
    return {
        type: ActionTypes.BUS_SUCCESS,
        bus
    }
}
export const busError = (message) => {
    return {
        type: ActionTypes.BUS_FAILURE,
        message
    }
}

//specialbus.js
export const requestSpecialBusRequest = () => {
    return {
        type: ActionTypes.SPECIALBUSREQUEST_REQUEST
    }
}
export const receiveSpecialBusRequest = (specialBusRequest) => {
    return {
        type: ActionTypes.SPECIALBUSREQUEST_SUCCESS,
        specialBusRequest
    }
}
export const specialBusRequestError = (message) => {
    return {
        type: ActionTypes.SPECIALBUSREQUEST_FAILURE,
        message
    }
}
// Special Bus functions
export const postSpecialBusRequest = (user, specialbusrequest) => async (dispatch) => {
    console.log(specialbusrequest);
    specialbusrequest['uid'] = user.uid;
    specialbusrequest['name']= user.name;
    specialbusrequest['email']= user.email;


    dispatch(requestSpecialBusRequest());
    try {
        await addDoc(collection(db, 'specialBusRequest'), specialbusrequest);
        dispatch(receiveSpecialBusRequest(specialbusrequest));
    }
    catch (error) {
        dispatch(specialBusRequestError(error.message))
    }
};

export const fetchSpecialBusRequest = () => async (dispatch) => {

    dispatch(requestSpecialBusRequest());
    try {
        const querySnapshot = await getDocs(collection(db, "specialBusRequest"));
        let specialBusArr = [];
        querySnapshot.forEach((doc) => {
            const _id = doc.id;
            specialBusArr.push({ _id, ...doc.data() });
        })
        dispatch(receiveSpecialBusRequest(specialBusArr));
    }
    catch (error) {
        dispatch(specialBusRequestError(error.message))
    }
}


export const deleteSpecialBusRequest = (specialbusrequest) => async (dispatch) => {
    {
        dispatch(requestSpecialBusRequest());
        try {
            const specialBusRef = doc(db, "specialBusRequest", specialbusrequest.specialBusId);
            await deleteDoc(specialBusRef);
            dispatch(receiveSpecialBusRequest(specialbusrequest));

        } catch (error) {
            dispatch(specialBusRequestError(error.message));
        }

    };
}

//outpass.js
export const requestOutpass = () => {
    return {
        type: ActionTypes.OUTPASS_REQUEST
    }
}
export const receiveOutpass = (outpass) => {
    return {
        type: ActionTypes.OUTPASS_SUCCESS,
        outpass
    }
}

export const outpassError = (message) => {
    return {
        type: ActionTypes.OUTPASS_FAILURE,
        message
    }
}

//schedule.js
export const requestSchedule = () => {
    return {
        type: ActionTypes.SCHEDULE_REQUEST
    }
}
export const receiveSchedule = (schedule) => {
    return {
        type: ActionTypes.SCHEDULE_SUCCESS,
        schedule
    }
}
export const scheduleError = (message) => {
    return {
        type: ActionTypes.SCHEDULE_FAILURE,
        message
    }
}

//store.js
export const requestStore = () => {
    return {
        type: ActionTypes.STORE_REQUEST
    }
}
export const receiveStore = (store) => {
    return {
        type: ActionTypes.STORE_SUCCESS,
        store
    }
}
export const storeError = (message) => {
    return {
        type: ActionTypes.STORE_FAILURE,
        message
    }
}

//ticket.js
export const requestTicket = () => {
    return {
        type: ActionTypes.ADDTICKET_REQUEST
    }
}
export const receiveTicket = (ticket) => {
    return {
        type: ActionTypes.ADDTICKET_SUCCESS,
        ticket
    }
}
export const ticketError = (message) => {
    return {
        type: ActionTypes.ADDTICKET_FAILURE,
        message
    }
}


//wallet.js
export const requestWallet = () => {
    return {
        type: ActionTypes.WALLET_REQUEST
    }
}
export const receiveWallet = (wallet) => {
    return {
        type: ActionTypes.WALLET_SUCCESS,
        wallet
    }
}
export const walletError = (message) => {
    return {
        type: ActionTypes.WALLET_FAILURE,
        message
    }
}


export const postSchedule = (schedule) => async (dispatch) => {

    dispatch(requestSchedule());
    dispatch(requestSpecialBusRequest());
    try {
        await addDoc(collection(db, 'schedule'), schedule);
        dispatch(receiveSchedule(schedule));
    }
    catch (error) {
        dispatch(scheduleError(error.message))
    }
}

export const fetchSchedule = () => async (dispatch) => {

    dispatch(requestSchedule());
    try {
        const querySnapshot = await getDocs(collection(db, "schedule"));
        let scheduleArr = [];
        querySnapshot.forEach((doc) => {
            const _id = doc.id;
            scheduleArr.push({ _id, ...doc.data() });
        })
        dispatch(receiveSchedule(scheduleArr));
    }
    catch (error) {
        dispatch(scheduleError(error.message))
    }
}
