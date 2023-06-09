const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const spotsRouter = require("./spots.js");
const reviewsRouter = require("./reviews.js");
const bookingsRouter = require("./bookings.js");
const imagesRouter = require("./images.js");

const { restoreUser } = require("../../utils/auth.js"); //=> auth.js restoreUser

router.use(restoreUser); //global middleware => up

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/spots", spotsRouter);

router.use("/reviews", reviewsRouter);

router.use("/bookings", bookingsRouter);

router.use("/", imagesRouter);

// router.post("/test", (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
