# Waste collection data
Develop a simple application to display the data in a format that can be easily read and understood by a human.
## Prerequisites
- Please check you have Node 18+ to run the vite server. (https://nodejs.org/en)
## Setup
- Clone this repo.
- Navigate to the directory where this was installed and run: `npm i ; npm run dev`.\
<sup>(This will both install vite, its dependencies, tailwind and host the webpage.)</sup>
- Either ctrl+click the link provided in the terminal, or on a browser, navigate to `localhost:5173`.
  
# Solution
**Summary**\
I converted the CSV data into an array of JSON objects. I then inserted the array into a component that displays each record and provides a search bar, column ascending/descending functions and an option to colour every unique value with a colour.\
\
**Breakdown**
- I request to get the csv data from `public/data` and handle if this fails.
- The csv data is given to a function that converts it into an array of json objects.
- This is then given to a `TableData.vue` component.
- This component is only responsible for providing the filter functions and tabulating the data.
  
## Problems encountered
- Finding out a method of converting CSV data into an appropriate JSON object.
- Error and loading handling when fetching this data to fake it was being sent from a server.
- For the ascending/ descending functionality, sorting a string of numbers doesn't work as "2" > "10" so I had to check if they were numbers before sorting.
- StringToColour function, that I found online, didn't give unique colours to numbers so I had to treat string-numbers ("123") differently to strings("apples").
  
## If I had more time
If there were more records to the csv file (1,000+) then a more sophisticated system would be needed. I could have added:
- A relational db to query and perhaps provide more detailed search functions.
- Pagination to only fetch and recieve the specific number of records that I need / limit records received.
- UI / UX design to make it more pleasing.
- Comparitive analysis between different datasets (if another dataset was provided).
