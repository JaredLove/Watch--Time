const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  saveMovie,
  deleteMovie,
  login,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
<<<<<<< HEAD
// router.route("/").post(createUser).put(authMiddleware);
=======
router.route('/').post(createUser).put(authMiddleware, saveMovie);

router.route('/').post(createUser).put(authMiddleware);
>>>>>>> 0e408245d56d3dc404aae2a4f8ae738fee1eb101

router.route("/login").post(login);

<<<<<<< HEAD
router.route("/me").get(authMiddleware, getSingleUser);
=======
router.route('/movies/:movieId').delete(authMiddleware, deleteMovie);

>>>>>>> 0e408245d56d3dc404aae2a4f8ae738fee1eb101

module.exports = router;
