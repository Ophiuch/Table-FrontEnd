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
  pagination.innerHTML = ''; // Clear existing pagination

  const totalPages = Math.ceil(totalRecords / pageSize); // Calculate total pages

  // Helper to create a pagination button
  const createButton = (page, text = page) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = () => fetchAthletes(page);
    if (page === currentPage) {
      button.disabled = true; // Disable the current page button
      button.style.fontWeight = 'bold'; // Highlight current page
    }
    pagination.appendChild(button);
  };

  // Show first page button
  if (currentPage > 3) {
    createButton(1); // Always show first page
    if (currentPage > 4) {
      const dots = document.createElement('span');
      dots.textContent = '...'; // Ellipsis to indicate skipped pages
      pagination.appendChild(dots);
    }
  }

  // Show two pages before the current page
  for (let i = Math.max(1, currentPage - 2); i < currentPage; i++) {
    createButton(i);
  }

  // Show current page
  createButton(currentPage);

  // Show two pages after the current page
  for (let i = currentPage + 1; i <= Math.min(totalPages, currentPage + 2); i++) {
    createButton(i);
  }

  // Show last page button
  if (currentPage < totalPages - 2) {
    if (currentPage < totalPages - 3) {
      const dots = document.createElement('span');
      dots.textContent = '...'; // Ellipsis before the last page
      pagination.appendChild(dots);
    }
    createButton(totalPages); // Always show last page
  }
}
function sortTable(column) {
  sortDirection = (sortColumn === column && sortDirection === 'asc') ? 'desc' : 'asc';
  sortColumn = column;
  fetchAthletes(pageNumber);
}

function searchTable() {
  fetchAthletes(1); 
}

fetchAthletes();

