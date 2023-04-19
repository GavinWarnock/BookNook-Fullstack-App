The Book Nook
Backend 
Project
Tech Stack
Python, Git/GitHub, Flask, Postman

Starter Code Repository
https://github.com/dCC-Online/ReactFlask_JWT_StarterCode 
User Stories
Total Unweighted Project Points: /62.5
Total Weighted Project Points: /80 (combined with frontend)

‼️ NOTE: The Flask backend is for storing the Users, User Reviews, and favorites listings, NOT book information itself. The details of individual books will be coming from the outside Google Books API.
 It is required to complete the backend API before moving on to any of the frontend user stories. Once completed, send the GitHub repository with the completed code to your private instructor chat to be checked off. ‼️





Main Stories

(5 points): As a developer, I want to make good, consistent commits (at least 25 for the entire team for both the backend and frontend).  
(5 points): As a developer, I want to create an ERD for my project that shows all models, fields, and relationships used in the backend (including the provided User model).

(5 points): As a developer, I want to set up the Flask + React starter code and connect the backend to my MySQL database, closely following the setup guide for instructions. 

(2.5 points): As a developer, I want to emulate the layout of the starter code by creating an additional books.py resource file to store my Resources. 

(5 points): As a developer, I want to create a Review model and schema with the following fields: 
Property names must be in snake_case and match the following exactly!  
id - Integer
book_id– String
text - String
rating - Integer
user_id – Integer 
user – Relationship

(5 points): As a developer, I want to create a Favorite model and schema with the following fields: 
Property names must be in snake_case and match the following exactly!  
id - Integer
book_id - String
title - String
thumbnail_url - Text
user_id – Integer 
user – Relationship

(5 points): As a developer, I want to create a UserReviews Resource that contains the following:
A post() method that:
Requires JWT authorization (Protected route). 
Accepts a body object from the request in the form of a Review model. 
Assigns a user_id
Responds with the newly created Review object.  
Returns a 201 status code.

(5 points): As a developer, I want to create a UserFavorites Resource that contains the following:
A get() method that:
Requires JWT authorization (Protected route). 
Responds with a list of all Favorites associated with the current logged-in user
Returns a 200 status code.  
A post() method that:
Requires JWT authorization (Protected route). 
Accepts a body object from the request in the form of a Favorite model.
Adds the new Favorite to the database, associated with the user who sent the JWT in the request. 
Returns a 201 status code.

(10 points): As a developer, I want to create a GetBookInformation Resource with a get() method that does the following things: 
Accepts a value from the request’s URL (The book_id of the Book I am trying to get Details for). 
Responds with a custom response dictionary that contains:
 all Reviews from the database that are related to the book_id sent in the URL. 
An average of all user ratings.
A true/false property as to whether the logged-in user has favorited this book.
Returns a 200 status code.

(5 points): As a developer, I want to use Postman to test all endpoints of my REST web API, save it to a collection, and then export it as a JSON from Postman to include in my repo.  


Bonus Stories

(10 points): As a developer, I want to create a ReviewDetailResource that contains the following:
A put() method that:
Requires JWT authorization (Protected route). 
Accepts a value from the request’s URL (The id of the Review to be updated).  
Accepts a body object from the request in the form of a Review model.  
Finds the Review in the database and updates that Review with the properties that were sent in the request’s body.  
Returns a 200 status code.  
Responds with the newly updated Review object.  
A delete() method that:
Requires JWT authorization (Protected route). 
Accepts a value from the request’s URL (The id of the Review to be deleted).  
Finds the Review in the database and deletes it.  
Returns a 204 status code.  


Checklist

Run through the Setup Setups and get your project ready to begin work.
Review the Resources outlined below - be sure to have relevant documentation and references open while you develop!



Setup Steps
A person from the group makes a GitHub Repository and adds all other group members as collaborators. NOTE: Only the Repository owner should download the starter code zip from the dCC repository.
The repository owner shares their screen and the group works through the first set of steps for the provided React Flask Starter Code Setup Guide on the repository owner’s computer. STOP WHEN YOU REACH “Setting Up Flask Backend” 
The repository owner pushes the starter code up to their own GitHub repository, and the rest of the collaborators then clone the repository owner’s repo.
All team members go through the setup process themselves starting from the Flask Backend Setup Steps and stopping when they get to the Setting Up React Frontend section. 
Each member will need their own venv, their own MySQL database, and their own .env file
Once complete with setup, all team members will watch the backend videos on their Portal introducing the Flask portion of the starter code (~.5 hours) 
Begin working on user stories for the Book Nook Backend!
Resources
Lectures 
Flask REST API
Web Services
Postman

Relevant Projects 
Products REST API
Music Library Backend REST API

Other Resources
Student Hub - search for articles about using Flask and Postman.
React Flask Setup Guide (located on your Course Portal as a lesson)



End Result  

You will have a working API and a set of Postman requests confirming that all of the user stories have been met!


BookNook - Frontend 
Project
Tech Stack
React.js, React Hooks, HTML/CSS, Axios, Postman, Adobe XD (or wireframing software of choice), Google Books API, Bootstrap

API Documentation
Google Books API Documentation
https://developers.google.com/books/docs/v1/getting_started 

Google Developer Console
 https://console.developers.google.com/ 
 
REST Request Documentation 
https://developers.google.com/books/docs/v1/getting_started#REST

Endpoints

Searching for a books based on a query (Google Books API CALL #1)
https://www.googleapis.com/books/v1/volumes?q={SEARCH QUERY HERE}

Searching for book details with a book id (Google Books API CALL #2): 
https://www.googleapis.com/books/v1/volumes/{Book Id here}



User Stories
Total Unweighted Project Points:  /67.5
Total Weighted Project Points:  /80 (combined with backend)

Main Stories
(5 points) As a developer, I want to make at least 15  good, consistent commits.
(5 points) As a web designer, I want to create a wireframe for my application 
(5 points) As a developer, I want to use React.js best practices, which consist of creating functional components and properly passing state around as props. 
(2.5 points) As a developer, I want to emulate the existing structure of the starter code by placing my larger Page components in the pages folder and smaller components in the components folder. 
(2.5 points) As a developer, I want to emulate the existing import structure on the App.js by organizing my imports as Pages or Components. 
(7.5 points) As a developer, I want to use CSS appropriately to make an aesthetically pleasing application. 
(10 points) As a user, I want to be able to search for a book’s title and see a list of matches displayed with their title as returned from the Google Books API Call #1.
(5 points) As a user, I want to click on a Book from the search results and be routed to a BookDetailPage, utilizing the book’s id as a React Router Route Param.
(5 points) As a user, I want the BookDetailPage to display details of that book coming from the Google Books API, including title, author(s), description, a full-sized thumbnail from the Google Books API Call #2.
(7.5 points) As a user, I want the BookDetailPage to display a list of all user Reviews, along with the average score of user ratings coming from the BookNook Backend API, and its favorite status related to the current logged-in user.
(5 points) As a logged-in user, I want to be able to Favorite a book from the BookDetailPage by sending an Axios Post request to the BookNook Backend API.
(5 points) As a logged-in user, I want to be able to leave a Review for a book from the BookDetailPage by sending an Axios Post request to the BookNook Backend API. 
NOTE: You will need to store the id of the book with the review so it can be fetched later if the book is viewed in the BookDetailPage!
(2.5 points) As a logged-in user, I want to click a link on the NavBar to be taken to the FavoritesPage. 
(5 points) As a logged-in user, I want the FavoritesPage to show a list of my Favorites containing the title and thumbnail coming from the BookNook Backend API.

Bonus Stories
NOTE: These features may also require adding additional endpoints to the Flask backend.
(5 points) As a registered user, I want to edit a Review I have posted. (Using Axios to make a PUT request to the BookNook Backend API.).  
(2.5 points) As a registered user, I want to delete a Review I have posted. (Using Axios to make a DELETE request to the BookNook Backend API.).
(2.5 points) As a registered user, I want to Unfavorite a Book I have favorited. (Using Axios to make a DELETE request to the BookNook Backend API.).



Checklist
Test the two provided Google Books API CALLs to visualize and understand their responses in Postman.
Watch the provided React Flask Starter Code Walkthrough videos for the Frontend. 
Design the React application using a wireframing/prototyping tool like Whimsical, Adobe XD, or Figma.
Build and test the React Frontend using React best practices (components organized into their own folders with external CSS stylesheets, lifting state up as high as possible in component hierarchy, passing data from parents to children as props, etc)




Setup Steps
Utilize the starter code to begin building your React application. You will need these additional pages & components at a minimum (you may add more): 
SearchPage.jsx 
SearchBar.jsx 
ResultsList.jsx
BookDetailsPage.jsx 
Book.jsx
ReviewList.jsx 
ReviewForm.jsx 
FavoritesPage.jsx 
FavoritesList.jsx

Work on getting your main pages and routes set up using the pattern established in the starter code (create a page component in the pages folder, add a route to the App.js file, protect it with the PrivateRoute component if only a logged in user can access) 
Start with the SearchPage component and set up your Axios requests to fetch results from the Google Books API based on a provided search string. 
When your search results are verified to be coming in, work on getting the BookDetailPage up and running by capturing the BookId passed as a Route Param (see React Router lecture slide 14). 
Once you have captured the BookId route param in the BookDetailPage, use it to make the Google Books api calls for Book Details, (Google API Call #2), along with the API calls to your own Backend for Reviews.


Resources
Lectures 
React Hooks
Design/UX
Wireframing + Prototyping 
React JWT 
React Router


Relevant Projects 
Weight Tracker
Social Feed
Music Library

Other Resources
Student Hub - All React.js articles, Callbacks & Higher Order Array Methods (JavaScript)
Video - Third Party API Integration and React Hooks 
Postman
Article - Conditionally Rendering JSX
End Result  

See Project Walkthrough - Book Nook video to see what the final result should look like!
