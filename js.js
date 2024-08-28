


function openmodal() {
    var menuEleve = document.querySelector('.menu-eleve');
    menuEleve.style.display = 'block';
}
function closemodal() {
    var menuEleve = document.querySelector('.menu-eleve');
    menuEleve.style.display = 'none';
}

function openmodify(studentId) {
    var menuEleve = document.querySelector('.menu-eleve-modify');
    menuEleve.style.display = 'block';
    openModify(studentId);
}
function closemodify() {
    var menuEleve = document.querySelector('.menu-eleve-modify');
    menuEleve.style.display = 'none';
}

function opendelete(studentId) {
    var menuEleve = document.querySelector('.delete-modal');
    menuEleve.style.display = 'flex';
    document.querySelector('.modal-btn-delete.oui').setAttribute('onclick', `deleteStudent(${studentId})`);
}
function closedelete() {
    var menuEleve = document.querySelector('.delete-modal');
    menuEleve.style.display = 'none';
}

function openModify(studentId) {
    window.location.href = '/students/edit/' + studentId;
}

function deleteStudent(studentId) {
    window.location.href = '/students/delete/' + studentId;
    var menuEleve = document.querySelector('.delete-modal');
    menuEleve.style.display = 'none';
}
