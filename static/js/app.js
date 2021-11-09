// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing data
    tbody.html("");
    // loop through the array data
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
        //loop through each field and add the value as a cell in table
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    //take datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check if a date was entered, and filter by it
    if (date) {
        //Apply filter, keep rows where 'datetime'matches filter
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //Build table with filtered data, if no date given, will include all data
    buildTable(filteredData);
};

//link to html tag for the button, and run fn when that button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

//Build table when page loads
buildTable(tableData);

