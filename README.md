# Waste collection data
   Develop a simple application to display the data in a format that can be easily read and understood by a human.
## Prerequisites
- Please check you Node 18+ to run the vite server. (https://nodejs.org/en)
## Setup 
- Clone this repo
- Navigate to directory and run: `npm i ; npm run dev`.
  <small>This will both install vite, its dependancies, tailwind and host the webpage </small>
- Either ctrl+click the link provided, or on a browser, navigate to `localhost:5173` 

# Solution
*Summary*
I convert the CSV data into an array of JSON objects. I insert this array into a component that will display each record and provides a search bar and column ascending/descending functions. 
*Breakdown*
- I request to get the csv data from `public/data` and handle if this fails.
- The csv data is given to a function that converts it into an array of json objects
- This is then given to a `TableData.vue` component.
- This component is only responsible for providing the filter functions and tabling the data 


## Problems encountered
- Finding out a method of converting CSV data into an appropriate JSON object
- Error and loading handling when fetching this data to fake it was being on the server.
-  

