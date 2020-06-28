// Async function to fetch all employees data from API
async function getEmployees() {
  // GET data and storing response
  const response = await fetch('http://localhost:8088/employees?_expand=department&_expand=computer');
  // Parsing JSON response to JS and storing result
  const data = await response.json();
  // Invoking display in DOM function passing-in stored GET response
  displayEmployees(data);
};

// Function converting specific data points in employee list to HTML and displaying in DOM
const displayEmployees = listEmployees => {
  // Accessing HTML DOM element where employee list will be displayed
  const displayElement = document.getElementById('employeeContainer');
  // Using map array method to iterate through employee object and transforming key data points to HTML
  const htmlString = listEmployees.map(employeeObj => {
    return `
    <article class="employee">
      <header class="employee__name">
        <h1>${employeeObj.employeeName}</h1>
      </header>
      <section class="employee__department">
        Works in the ${employeeObj.department.department} department
      </section>
      <section class="employee__computer">
        Currently using a ${employeeObj.computer.computer}
      </section>
    </article>
    `;
  }).join(''); // Joining array of employee HTML and converting to string
  // Setting innerHTML of display DOM element to employee HTML string
  displayElement.innerHTML = htmlString;
}

// Invoking Async function
getEmployees();