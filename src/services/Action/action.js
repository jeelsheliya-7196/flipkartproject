
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import axios from "axios";
import { base_url } from "../../Api/Api";

export const googleaynce = () => {
    // const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(credential, "credential");
        }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);

            console.log("errr", error);
            // ...
        });
}


// export const anyncproductview = () => {
//     return dispatch => {
//         axios.get(base_url + "/products").then((res) => {
//             let prod = res.data;
//             let newpro = prod.filter((spro) => {
//                 // console.log(spro);
//                 if (spro.category == "womens-jewellery") {
//                     return spro
//                 }

//             })
//             // console.log(newpro);
//             dispatch(allproduct(newpro))

//         }).catch((err)=>{
//             console.log("err",err);
//         })
//     }
// }

// const allproduct = (data) => {
//     return {
//         type: "allProduct",
//         payload: data
//     }
// }