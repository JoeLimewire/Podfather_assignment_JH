# Waste collection data
Develop a simple application to display the data in a format that can be easily read and understood by a human.
## Prerequisites
- Please check you have Node 18+ to run the vite server. (https://nodejs.org/en)
## Setup
- Clone this repo
- Navigate to directory and run: npm i ; npm run dev.
<small>This will both install vite, its dependencies, tailwind and host the webpage </small>
- Either ctrl+click the link provided, or on a browser, navigate to localhost:5173
  
# Solution
Summary
I convert the CSV data into an array of JSON objects. I insert this array into a component that will display each record and provides a search bar, column ascending/descending functions and an option to colour every unique value with a colour.
Breakdown
- I request to get the csv data from public/data and handle if this fails.
- The csv data is given to a function that converts it into an array of json objects
- This is then given to a TableData.vue component.
- This component is only responsible for providing the filter functions and tabulating the data.
  
## Problems encountered
- Finding out a method of converting CSV data into an appropriate JSON object
- Error and loading handling when fetching this data to fake it was being on the server.
- Sorting a string of numbers doesn't work as "2" > "10" so I had to check if they were numbers before sorting
- StringToColour function that I found didn't give unique colours to numbers so I had to treat string-numbers differently to strings.
  
## If I had more time
If there were more records to the a db (1,000+) then a more sophisticated system was probably needed. I could have added:
- A relational db to query and perhaps provide more detailed search functions
- Pagination to only fetch and recieve just the records that I needed
- UI / UX design to make it more pleasant on the eyes
- Comparitive analysis between different datasets.
