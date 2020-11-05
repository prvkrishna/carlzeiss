Installation:
-------------------
1) git clone https://github.com/prvkrishna/carlzeiss.git

2) cd carlzeiss --> npm install
3) npm start

----------------------------------------------------------------------------------------------------
 The task Completed:
----------------------------------------------------------------------------------------------------
1) Login screen is designed. 
   Used "https://jsonplaceholder.typicode.com/users" service to bring users. Validating users from this 
   these user. 
    For Eg: One of the user from above list is "email": "Sincere@april.biz" and username: "Bret".
    If the user enters any email and username(password) from the above API, then only he will be redirected to home page.

2) /home: In home page displaying the Users and Blogs. 
   If user clicks on any of these two, will be redirected to respective pages.

3) /users: Displaying all the users in a table

4) /blogs: Displaying all the blogs in a table.
   If user clicks on any of blog id, he will be redirected to individual blog page.

5) "Back button" and "log out" button functionality implemented

6) "/home", "/users", "/blogs", these routes are protected, if you login then only you can go to these routes

