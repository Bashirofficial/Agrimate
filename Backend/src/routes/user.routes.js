import { Router } from "express";
import { changeCurrentPassword, 
     getCurrentUser, 
     loginUser, logoutUser, 
     refreshAccessToken, 
     registerUser, 
     updateAccountDetails
     }
    from "../controllers/user.controllers.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(
    registerUser
    )

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)   

 router.route("/refresh-token").post(refreshAccessToken) //already putted in try and catch so we 
                                                        //are not usign verifyJwt middleware
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)



export default router