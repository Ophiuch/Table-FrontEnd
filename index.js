let pageNumber = 1;
let sortColumn = "Name";
let sortDirection = "asc";
let searchItem = "";


function fetchAthletes(page = 1) {
  const searchQuery = document.getElementById('searchInput').value;
  searchItem = searchQuery;

  fetch(`https://localhost:7179/api/Soccerer?pageNumber=${page}&pageSize=10&sortColumn=${sortColumn}&sortDirection=${sortDirection}&searchItem=${searchItem}`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          updateTable(data.data);
          updatePagination(data.totalRecords, data.pageNumber, data.pageSize);
      });
}

function updateTable(athletes) {
  const tbody = document.querySelector('#athleteTable tbody');
  tbody.innerHTML = '';
  athletes.forEach(athlete => {
      const row = `<tr>
          <td>${athlete.name}</td>
          <td>${athlete.age}</td>
          <td>${athlete.skill}</td>
          <td>${athlete.position}</td>
          <td>${athlete.score}</td>
      </tr>`;
      tbody.innerHTML += row;
  });
}

function updatePagination(totalRecords, currentPage, pageSize) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(totalRecords / pageSize);
  for (let i = 1; i <= totalPages; i++) {
      const pageButton = `<button onclick="fetchAthletes(${i})">${i}</button>`;
      pagination.innerHTML += pageButton;
  }
}
function sortTable(column) {
  sortDirection = (sortColumn === column && sortDirection === 'asc') ? 'desc' : 'asc';
  sortColumn = column;
  fetchAthletes(currentPage);
}

function searchTable() {
  fetchAthletes(1); // Reset to page 1 on new search
}













fetchAthletes();