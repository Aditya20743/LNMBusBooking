import * as ActionTypes from './ActionTypes';
import { auth, firestore, fireauth } from '../firebase/firebase';
import { doc, getDoc, getDocs, collection, addDoc, deleteDoc } from "firebase/firestore";
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
    try {
        if (user !== undefined && user.role === 'student') {
            outpass['uid'] = user.uid;
            outpass['name'] = user.name;
            outpass['rollNum'] = user.rollNum;
            dispatch(requestOutpass());
            await addDoc(collection(db, 'outpass'), outpass);
            dispatch(fetchOutpass(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(outpassError(error.message));
    }
};

export const fetchOutpass = (user) => async (dispatch) => {

    try {
        dispatch(requestOutpass());
        if (user !== undefined) {
            const querySnapshot = await getDocs(collection(db, "outpass"));
            let outpassArr = [];
            if (user.role === 'student') {
                const userid = user.uid;
                querySnapshot.forEach((doc) => {
                    if (doc.data().uid === userid) {
                        const _id = doc.id;
                        outpassArr.push({ _id, ...doc.data() });
                    }
                })
            }
            else if (user.role === 'caretaker') {
                const hostel = user.hostelName;
                querySnapshot.forEach((doc) => {
                    if (doc.data().hostelName === hostel && doc.data().status === "pending"){
                        const _id = doc.id;
                        outpassArr.push({ _id, ...doc.data() });
                    }
                })
            }
            dispatch(receiveOutpass(outpassArr));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(outpassError(error.message));
    }
}

// export const deleteOutpass = (outpass) => async (dispatch) => {
//     try {
//         dispatch(requestOutpass());
//         const user = auth.currentUser;
//         if (user === undefined)
//             throw Error("Error 401: Unauthorized");
//         const outpassRef = doc(db, "outpass", outpass.uid);
//         await deleteDoc(outpassRef);
//         dispatch(receiveOutpass(outpass));
//     } catch (error) {
//         dispatch(outpassError(error.message));
//     }
// }

export const updateOutpass = (user, outpass) => async (dispatch) => {
    try {
        dispatch(requestOutpass());
        
        if (user !== undefined && user.role === "caretaker") {
            const outpassRef = firestore.doc(`outpass/${outpass._id}`)
            await outpassRef.set(outpass, { merge: true });
            dispatch(fetchOutpass(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(outpassError(error.message));
    }
}

// Bus functions
export const postBus = (user, bus) => async (dispatch) => {
    try {
        dispatch(requestBus());
        if (user !== undefined && user.role === 'admin') {

            const seatsArr = new Array(bus.totalSeats);

            for(let i=0;i<bus.totalSeats;i++)
                    seatsArr[i]=false;
                    
            bus['seatsAvailable']=bus.totalSeats;
            bus['seats']=seatsArr;
            await addDoc(collection(db, 'bus'), bus);
            dispatch(fetchBus());
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(busError(error.message))
    }
};

export const fetchBus = () => async (dispatch) => {
    try {
        dispatch(requestBus());
        const user = auth.currentUser;
        if (user === undefined)
            throw Error("Error 401: Unauthorized");
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

export const deleteBus = (user, bus) => async (dispatch) => {
    try {
        dispatch(requestBus());
        if (user !== undefined && user.role === 'admin') {
            const busRef = doc(db, "bus", bus._id);
            await deleteDoc(busRef);
            dispatch(fetchBus());
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(busError(error.message));
    }
}

// Book Seat
export const bookBus = (user, bus) => async (dispatch) => {
    console.log(user, bus);
    try {
        dispatch(requestBus());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            const busRef = firestore.doc(`bus/${bus._id}`)
            await busRef.set(bus, { merge: true });
            dispatch(fetchBus());
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(busError(error.message));
    }
}

// Store functions
export const postStore = (user, store) => async (dispatch) => {
    try {
        dispatch(requestStore());
        if (user !== undefined && user.role === 'admin') {
            await addDoc(collection(db, 'store'), store);
            dispatch(fetchStore(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(storeError(error.message))
    }
};

export const fetchStore = () => async (dispatch) => {
    try {
        dispatch(requestStore());
        const user = auth.currentUser;
        if (user === undefined)
            throw Error("Error 401: Unauthorized");
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
export const postTicket = (user, ticket) => async (dispatch) => {
    try {
        dispatch(requestTicket());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            ticket['uid'] = user.uid;
            await addDoc(collection(db, 'ticket'), ticket);
            dispatch(fetchTicket(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(ticketError(error.message))
    }
};

export const fetchTicket = (user) => async (dispatch) => {

    try {
        dispatch(requestTicket());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            const querySnapshot = await getDocs(collection(db, "ticket"));
            let ticketArr = [];
            const userid = user.uid;
            querySnapshot.forEach((doc) => {
                if (doc.data().uid === userid) {
                    const _id = doc.id;
                    ticketArr.push({ _id, ...doc.data() });
                }
            });
            dispatch(receiveTicket(ticketArr));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(ticketError(error.message))
    }
}

export const updateTicket = (user, ticket) => async (dispatch) => {
    try {
        dispatch(requestTicket());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            const ticketRef = firestore.doc(`ticket/${ticket._id}`)
            await ticketRef.set(ticket, { merge: true });
            dispatch(fetchTicket(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(ticketError(error.message))
    }
}


export const cancelTicket = (user, wallet,ticket) => async (dispatch) => {
    try {
        dispatch(requestTicket());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            
            //get bus and Time
            const busRef = firestore.doc(`bus/${ticket.busId}`)
            const docBus = await getDoc(busRef);

            const currentTime =new Date().toLocaleTimeString('it-IT', { hour12: false, 
                hour: "numeric", 
                minute: "numeric",
                timeZone: 'Asia/Kolkata'});
            const busDepartureTime=docBus.data().time;
            const curHour = parseInt(currentTime.slice(0, 2));
            const curMin=parseInt(currentTime.slice(3, 5));

            const busHour=parseInt(busDepartureTime.slice(0, 2));
            const busMin= parseInt(busDepartureTime.slice(3, 5));

            if((busHour-curHour)*60 +(busMin-curMin)>15){
                dispatch(updateWallet(user,wallet,0.5));
            }
            dispatch(updateTicket(user, ticket));
            dispatch(fetchTicket(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(ticketError(error.message))
    }
}

// Wallet functions
export const postWallet = (user) => async (dispatch) => {

    try {
        dispatch(requestWallet());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            const walletRef = firestore.doc(`wallet/${user.uid}`)
            await walletRef.set({
                tokenNo: 0,
                uid: user.uid,
            }, { merge: true }
            )
            dispatch(fetchWallet(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(walletError(error.message))
    }
};

export const fetchWallet = (user) => async (dispatch) => {
    try {
        dispatch(requestWallet());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            const walletRef = firestore.doc(`wallet/${user.uid}`)
            const docSnap = await getDoc(walletRef);
            if (!docSnap.exists()) {
                dispatch(postWallet(user));
            }
            else {
                dispatch(receiveWallet(docSnap.data()));
            }
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(walletError(error.message))
    }
}

export const updateWallet = (user, wallet, token) => async (dispatch) => {

    try {
        dispatch(requestWallet());
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            const walletRef = firestore.doc(`wallet/${wallet.uid}`)

            //Check If token Is Int
            if (typeof(token)!== 'number'){
                throw Error("Token is not a Number");
            }

            if (wallet.tokenNo + token < 0) {
                throw Error("Insufficient Balance");
            }


            var newBal = wallet.tokenNo + token;
            await walletRef.set({
                tokenNo: newBal,
            }, { merge: true }
            )
            dispatch(fetchWallet(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(walletError(error.message))
    }
}

// Special Bus functions
export const postSpecialBusRequest = (user, specialbusrequest) => async (dispatch) => {
    dispatch(requestSpecialBusRequest());
    try {
        if (user !== undefined && (user.role === 'student' || user.role === 'faculty')) {
            specialbusrequest['uid'] = user.uid;
            specialbusrequest['name'] = user.name;
            specialbusrequest['email'] = user.email;
            await addDoc(collection(db, 'specialBusRequest'), specialbusrequest);
            dispatch(fetchSpecialBusRequest(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(specialBusRequestError(error.message))
    }
};

export const fetchSpecialBusRequest = (user) => async (dispatch) => {

    try {
        dispatch(requestSpecialBusRequest());
        if (user !== undefined && user.role === 'admin') {
            const querySnapshot = await getDocs(collection(db, "specialBusRequest"));
            let specialBusArr = [];
            querySnapshot.forEach((doc) => {
                if(doc.data().status === "pending" ){
                    const _id = doc.id;
                    specialBusArr.push({ _id, ...doc.data() });
                }
            })
            dispatch(receiveSpecialBusRequest(specialBusArr));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(specialBusRequestError(error.message))
    }
}

export const deleteSpecialBusRequest = (user, specialbusrequest) => async (dispatch) => {
    dispatch(requestSpecialBusRequest());
    try {
        if (user !== undefined && user.role === 'admin') {
            const specialBusRef = doc(db, "specialBusRequest", specialbusrequest._id);
            await deleteDoc(specialBusRef);
            dispatch(fetchSpecialBusRequest(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(specialBusRequestError(error.message));
    }
}

export const updateSpecialBus = (user, specialbus) => async (dispatch) => {
    try {
        dispatch(requestSpecialBusRequest());
        if (user !== undefined && user.role === 'admin') {
            const specialBusRef = firestore.doc(`specialBusRequest/${specialbus._id}`)
            await specialBusRef.set(specialbus, { merge: true });
            dispatch(fetchSpecialBusRequest(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(specialBusRequestError(error.message));
    }
}

export const postSchedule = (user, schedule) => async (dispatch) => {
    try {
        if (user !== undefined && user.role === 'admin') {
            dispatch(requestSchedule());
            dispatch(requestSpecialBusRequest());
            await addDoc(collection(db, 'schedule'), schedule);
            dispatch(fetchSchedule());
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    }
    catch (error) {
        dispatch(scheduleError(error.message))
    }
}

export const fetchSchedule = () => async (dispatch) => {
    try {
        dispatch(requestSchedule());
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

export const updateSchedule = (user, schedule) => async (dispatch) => {
    try {
        dispatch(requestSchedule());
        if (user !== undefined && user.role === 'admin') {
            const scheduleRef = firestore.doc(`schedule/${schedule._id}`)
            await scheduleRef.set(schedule, { merge: true });
            dispatch(fetchSchedule());
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(scheduleError(error.message))
    }
}

export const deleteSchedule = (user, schedule) => async (dispatch) => {
    dispatch(requestSchedule());
    try {
        if (user !== undefined && user.role === 'admin') {
            const scheduleRef = doc(db, "schedule", schedule._id);
            await deleteDoc(scheduleRef);
            dispatch(fetchSchedule(user));
        }
        else {
            throw Error("Error 401: Unauthorized");
        }
    } catch (error) {
        dispatch(scheduleError(error.message));
    }
}
///////////////////////////////////////////////////////////////////////////////////

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return auth.signInWithEmailAndPassword(creds.username, creds.password)
        .then(() => {
            var user = auth.currentUser;

            var userRef = firestore.collection("User");
            var query = userRef.where('email', '==', user.email);

            query.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());

                    dispatch(receiveLogin(doc.data()));

                    if (doc.data().role === "caretaker")
                        dispatch(fetchOutpass(doc.data()));
                    if (doc.data().role === "admin")
                        dispatch(fetchSpecialBusRequest(doc.data()));
                    localStorage.setItem('user', JSON.stringify(doc.data()));
                });
            })
                .catch((error) => {
                    throw error;
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
    try {
        dispatch(requestLogout())
        auth.signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            //
        });

        localStorage.removeItem('user');
        dispatch(receiveLogout());

        dispatch(fetchOutpass());
        dispatch(fetchWallet());
        dispatch(fetchTicket());
        dispatch(fetchBus());
        dispatch(fetchSpecialBusRequest());

    } catch (error) {
        throw Error("Error 401: Unauthorized");
    }   
}

export const checkUser = () => (dispatch) => {
    try {
        if( localStorage.getItem('user') === null){
            throw Error("Error 401: Unauthorized");
        }
        else{
            const user = JSON.parse(localStorage.getItem('user'));

            dispatch(receiveLogin(user));

            if (user.role === "caretaker")
                dispatch(fetchOutpass(user));
            if (user.role === "admin") {
                dispatch(fetchBus(user));
                dispatch(fetchSpecialBusRequest(user));
            }
            else{
                dispatch(fetchWallet(user));
                dispatch(fetchTicket(user));
                dispatch(fetchBus(user));

                if (user.role === 'student') {
                    dispatch(fetchOutpass(user));
                }
            }
        }
    }catch(error){
        dispatch(loginError(error.message));
    }
}

export const fetchUser = (user) => async (dispatch) => {
    try {
        if( user === undefined || user === null){
            throw Error("Error 401: Unauthorized");
        }
        const uid = user.uid;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        var rnum = user.email.substring(0, 8);
        const userRef = firestore.doc(`User/${uid}`)

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
                    dispatch(receiveLogin(user));
                })
                .catch((error) => {
                    dispatch(loginError(error.message));
                });
        }
        else {
            await userRef.set({
                name: displayName,
                email: email,
                image: photoURL,
                role: "faculty",
            }, { merge: true })
            .catch((error) => {
                dispatch(loginError(error.message));
            });
        }

        const docUser = await getDoc(userRef);
        dispatch(fetchWallet(docUser.data()));
        dispatch(fetchTicket(docUser.data()));
        dispatch(fetchBus(docUser.data()));

        localStorage.setItem('user', JSON.stringify(docUser.data()));

        if (docUser.data().role === 'student') {
            dispatch(fetchOutpass(docUser.data()));
        }
        dispatch(receiveLogin(docUser.data()));
    }
    catch (error) {
        dispatch(loginError(error.message))
    }
}


export const googleLogin = () => (dispatch) => {
    const provider = new fireauth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;

            if (user.email.includes("@lnmiit.ac.in") === false) {
                dispatch(logoutUser());
                dispatch(loginError("Error 401: Unauthorized"));
            }
            else {
                dispatch(fetchUser(user));
            }
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