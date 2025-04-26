// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    // This is the new address on the machine we're asking for data
    let apiRoute = "/api/grades";
    // When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function(){
        let results;
        // Check if were done
        if(xhr.readyState === xhr.DONE){
            // Check if were successful
            if(xhr.status !== 200){
                console.error(`Could not get grades.
                    Status: ${xhr.status}`)
            }
            // And then call the function to update the HTML with our data
            populateGradebook(JSON.parse(xhr.responseText))
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

// TODO: Populate the table with the grade data
function populateGradebook(data) {
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data", data);
    let tableElm = document.getElementById("gradebook"); // Get the gradebook table element
        data.forEach(function(assignment){
            let row = document.createElement('tr'); // Create a table row element
            let columns = []; // Handy place to stick the columns of information
            columns.name = document.createElement('td'); // The first columns table data will be the name
            columns.name.appendChild(
                // Concatenate the full name:  "last_name, first_name"
                document.createTextNode(assignment.last_name + "," + assignment.first_name)
            );
            columns.grade = document.createElement('td'); // Second column will be the grade
            columns.grade.appendChild(
                document.createTextNode(assignment.total_grade)
            );
            // Add the table data columms to the table row
            row.appendChild(columns.name);
            row.appendChild(columns.grade);
            // Add the row to the table itself to make the data visible
            tableElm.appendChild(row);
        });
}

// TODO: REMOVE THIS
// Call the stubs to demonstrate the workFlow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE