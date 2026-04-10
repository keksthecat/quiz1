// Dropdown clase - link activ pentru fiecare clasă
classDropdownLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // previne săritul paginii
    const cl = link.dataset.class; // clasa selectată
    selectedClass = cl;

    // Ascunde blocurile inutile
    classSelectionDiv.style.display = "none";
    startBtnDiv.style.display = "none";
    quizDiv.style.display = "none";

    // Curăță și afișează materiile clasei selectate
    subjectButtonsDiv.innerHTML = "";
    subjects[cl].forEach(sub => {
      const btn = document.createElement("button");
      btn.textContent = sub;
      btn.onclick = () => {
        selectedSubject = sub;
        subjectSelectionDiv.style.display = "none";
        startBtnDiv.style.display = "block";
        background.style.background = "linear-gradient(to right,#fff4f0,#ffc1b6)";
      };
      subjectButtonsDiv.appendChild(btn);
    });

    // Afișează blocul cu materiile
    subjectSelectionDiv.style.display = "block";
  });
});