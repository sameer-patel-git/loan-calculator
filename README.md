# loan-calculator

Steps to run the test:

1. Run command "npm install" to install all the dependencies
2. Run command "npm run wdio"


1.	We can add test cases to check the followings. 
  a.	All the question strings and labels.
  b.	What type of data could be entered in the form?  Ex number, string, special characters etc. 
  c.	Min and max length of the numbers.
  d.	Negative values/numbers etc. 
2.	If this test was part of a much larger test set, we can speed it by running the test cases in parallel and also can be run it in different platforms. 
3.	To eliminate the flaky issues, we can use the explicit wait statement like waitForClickable, waitForDisplayed, waitForEnabled

