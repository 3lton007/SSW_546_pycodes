const express = require("express");
const router = express.Router();
const data = require("../data");
const palindrome = data.palindrome;

router.get("/", (req, res) => {
  res.render("palindrome/index");
});

router.get("/result", (req, res) => {
  res.render("palindrome/result");
}); 
  
router.post("/result", (req,res) => {
  const palin_res = req.body
  console.log(palin_res);
  console.log(palin_res["text-to-test"]);
  const errors =[];
  if (palin_res["text-to-test"]  == "")
  {
    errors.push('No string provided');
  }

  if(errors.length > 0) {
    res.status(400).render("palindrome/index", {
      errors: errors,
      hasErrors: true
    })
    console.log("errors");
  }
  else
  {
    const result = palindrome.palindrome(palin_res["text-to-test"]);
    console.log(result);
    res.render("palindrome/result", {
      palindrom: result,
      palin_text: palin_res["text-to-test"],
      title: "The Palindrome Results!"
    })
  }

})

module.exports = router;