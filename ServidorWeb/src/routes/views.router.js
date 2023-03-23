const { Router } = require("express");
const router = Router();

const userInfo = [
  {
    name: "Eber",
    course: "backend",
  },
  {
    name: "Ernesto",
    course: "nodeJS",
  },
  {
    name: "ERACLITO",
    course: "FRONT",
  },
];
const user = {
  name: "Eb",
  course: "ingles",
  role: "admin",
};
router.get("/", (req, res) => {
  /*const numberMax = users.length
        const random = Math.floor(Math.random()*numberMax)
        console.log(random);*/
  res.render("index.handlebars", {
    userInfo, //: users [random],
    user,
    title: "Curso de NodeJS y Express",
    user,
    role: user.role === "admin",
  });
});
//  route.get('/login', (req, res) => {
//    res.render('login.handlebars', { style: "login.css" });
// });
// route.get('/register', (req, res) => {
//     res.render('register.handlebars');
//   });

module.exports = router;
