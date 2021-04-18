import firebase from 'firebase';
import '../firebase/config';
import * as actions from '../actions';
import { db } from '../firebase/config';

export const authSignIn = () => {
    // Using a redirect.
    firebase
        .auth()
        .getRedirectResult()
        .then(function (result) {
            var user = result.user;
            if (user) {
                db.ref('users/' + user.uid).set({
                    _id: user.uid,
                });
                actions.signIn(user.uid);
            }
        });

    // Start a sign in process for an unauthenticated user.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
};

export const authSignOut = props => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            props.signOut();
        });
};

export const updateUserSignedIn = props => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            db.ref('users/' + user.uid).on('value', snapshot => {
                if (!snapshot.exists()) {
                    // Add new users to database
                    db.ref('users/' + user.uid).set({
                        _id: user.uid,
                    });
                    props.signIn(user.uid);
                } else {
                    const data = snapshot.val();
                    props.signIn(data._id);
                }
            });
        } else {
            // No user is signed in.
            props.signOut();
        }
    });
};
