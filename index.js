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


// [
//   {
//     "id": 1,
//     "name": "Marc-André ter Stegen",
//     "age": 31,
//     "skill": "Goalkeeping",
//     "position": "Goalkeeper",
//     "score": 88
//   },
//   {
//     "id": 2,
//     "name": "Jules Koundé",
//     "age": 24,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 85
//   },
//   {
//     "id": 3,
//     "name": "Ronald Araújo",
//     "age": 24,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 86
//   },
//   {
//     "id": 4,
//     "name": "Pedri",
//     "age": 21,
//     "skill": "Passing",
//     "position": "Midfielder",
//     "score": 88
//   },
//   {
//     "id": 5,
//     "name": "Gavi",
//     "age": 19,
//     "skill": "Dribbling",
//     "position": "Midfielder",
//     "score": 84
//   },
//   {
//     "id": 6,
//     "name": "Robert Lewandowski",
//     "age": 35,
//     "skill": "Finishing",
//     "position": "Forward",
//     "score": 91
//   },
//   {
//     "id": 7,
//     "name": "Frenkie de Jong",
//     "age": 26,
//     "skill": "Passing",
//     "position": "Midfielder",
//     "score": 87
//   },
//   {
//     "id": 8,
//     "name": "Ferran Torres",
//     "age": 23,
//     "skill": "Dribbling",
//     "position": "Forward",
//     "score": 82
//   },
//   {
//     "id": 9,
//     "name": "Ansu Fati",
//     "age": 21,
//     "skill": "Finishing",
//     "position": "Forward",
//     "score": 81
//   },
//   {
//     "id": 10,
//     "name": "Sergi Roberto",
//     "age": 31,
//     "skill": "Versatile",
//     "position": "Midfielder",
//     "score": 79
//   },
//   {
//     "id": 11,
//     "name": "Thibaut Courtois",
//     "age": 31,
//     "skill": "Goalkeeping",
//     "position": "Goalkeeper",
//     "score": 90
//   },
//   {
//     "id": 12,
//     "name": "Éder Militão",
//     "age": 26,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 85
//   },
//   {
//     "id": 13,
//     "name": "David Alaba",
//     "age": 31,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 85
//   },
//   {
//     "id": 14,
//     "name": "Toni Kroos",
//     "age": 34,
//     "skill": "Passing",
//     "position": "Midfielder",
//     "score": 88
//   },
//   {
//     "id": 15,
//     "name": "Luka Modrić",
//     "age": 38,
//     "skill": "Vision",
//     "position": "Midfielder",
//     "score": 88
//   },
//   {
//     "id": 16,
//     "name": "Federico Valverde",
//     "age": 25,
//     "skill": "Versatile",
//     "position": "Midfielder",
//     "score": 87
//   },
//   {
//     "id": 17,
//     "name": "Vinícius Júnior",
//     "age": 23,
//     "skill": "Dribbling",
//     "position": "Forward",
//     "score": 90
//   },
//   {
//     "id": 18,
//     "name": "Rodrygo",
//     "age": 23,
//     "skill": "Dribbling",
//     "position": "Forward",
//     "score": 85
//   },
//   {
//     "id": 19,
//     "name": "Antonio Rüdiger",
//     "age": 30,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 84
//   },
//   {
//     "id": 20,
//     "name": "Aurélien Tchouaméni",
//     "age": 23,
//     "skill": "Defense",
//     "position": "Midfielder",
//     "score": 84
//   },
//   {
//     "id": 21,
//     "name": "Andreas Christensen",
//     "age": 27,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 83
//   },
//   {
//     "id": 22,
//     "name": "Sergiño Dest",
//     "age": 23,
//     "skill": "Dribbling",
//     "position": "Defender",
//     "score": 78
//   },
//   {
//     "id": 23,
//     "name": "Marcos Alonso",
//     "age": 33,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 79
//   },
//   {
//     "id": 24,
//     "name": "Ferran Jutglà",
//     "age": 24,
//     "skill": "Finishing",
//     "position": "Forward",
//     "score": 77
//   },
//   {
//     "id": 25,
//     "name": "Iñaki Peña",
//     "age": 25,
//     "skill": "Goalkeeping",
//     "position": "Goalkeeper",
//     "score": 75
//   },
//   {
//     "id": 26,
//     "name": "Fran García",
//     "age": 24,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 80
//   },
//   {
//     "id": 27,
//     "name": "Joselu",
//     "age": 34,
//     "skill": "Finishing",
//     "position": "Forward",
//     "score": 82
//   },
//   {
//     "id": 28,
//     "name": "Eduardo Camavinga",
//     "age": 21,
//     "skill": "Versatile",
//     "position": "Midfielder",
//     "score": 85
//   },
//   {
//     "id": 29,
//     "name": "Ferland Mendy",
//     "age": 29,
//     "skill": "Defense",
//     "position": "Defender",
//     "score": 81
//   }
// ]