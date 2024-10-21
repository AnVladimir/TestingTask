README
======

Introduction
------------
Thank you for taking the time to review my application for the tester 
position. In this repository, you will find a simple automated test 
that I created to test the functionality of a web application. I used 
a tool called WebdriverIO, which allows for automated browsing of web 
pages to verify their behavior.

Technologies Used
-----------------
This project uses several basic technologies that enable automated 
testing of web applications:
- JavaScript: The programming language used to write the test scripts.
- WebdriverIO: A tool that provides automation for testing web 
  applications.

Prerequisites
-------------
Before running the tests, make sure you have the following installed 
on your system:
- Node.js: This is a runtime environment needed to run JavaScript on 
  your computer. You can download it from https://nodejs.org/.
- npm: This is a package manager that comes with Node.js and is used 
  to install the necessary tools and dependencies for the project.

How to Run the Tests
--------------------
Follow these simple steps to run the tests:
1. Clone the Repository: Start by copying the repository to your 
   local computer using the following commands: 
   git clone [repository-url] 
   cd [repository-folder]
2. Install Dependencies: Next, you need to install the project 
   dependencies. Run the following command: 
   npm install
3. Run the Tests: To execute the tests, use the following command: 
   npx wdio run wdio.conf.js. This will run all the test cases 
   defined in the project.
4. Generate and View the Allure Report: After running the tests, 
   you can create a report to see the results: 
   npx allure generate allure-results --clean -o allure-report. 
   To view the report in your web browser, run: 
   npx allure open.

Additional Information
----------------------
- Test Files: The test case can be found in the ./test/specs/ 
  directory, following the recommended structure for WebdriverIO 
  projects.
- Additional Resources: The test includes extra files located in 
  ../pageobjects and ../helper, which contain important functions 
  and selectors used in the tests.
- Configuration: The settings for WebdriverIO are defined in the 
  wdio.conf.js file. If you need to make changes to suit your 
  environment, you can do so in that file.

--------------------------------------------
I hope this submission meets your expectations. Please feel free 
to contact me if you need any further information or clarification.

Best regards,
Anita Khomiak.
