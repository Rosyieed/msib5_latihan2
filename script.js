
document.getElementById("hitungButton").addEventListener("click", function () {

  const result = document.getElementById("hasil");
  const nama = document.getElementById("nama").value;
  const matkul = document.getElementById("matkul").value;
  const grade = document.getElementById("grade").value;

  if (nama == "" || matkul == "" || grade == "") {
    alert("Isi semua form!");
    return;
  }

  let nilaiSkala = 0;
  switch (grade) {
    case "A":
      nilaiSkala = 4;
      break;
    case "B":
      nilaiSkala = 3;
      break;
    case "C":
      nilaiSkala = 2;
      break;
    case "D":
      nilaiSkala = 1;
      break;
    case "E":
      nilaiSkala = 0;
      break;
  }

  const rataRata = nilaiSkala;

  const newRow = `
        <tr>
          <td>${nama}</td>
          <td>${matkul}</td>
          <td>${grade}</td>
          <td>${rataRata}</td>
        </tr>
      `;
  result.innerHTML += newRow;
});