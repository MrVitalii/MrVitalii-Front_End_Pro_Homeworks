const CLASS_STUDENT_ITEM = 'studentItem'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_MARKS_INPUT = 'markInput'
const studentsContainer = document.querySelector('#studentsContainer')
const form = document.querySelector('#studentForm')
const default_marks = Array(10).fill(0)
let students_list = []

form.addEventListener('submit', onFormSubmit)
studentsContainer.addEventListener('click', onStudentsContainerClick)
studentsContainer.addEventListener('focusout', onStudentsContainerFocusOut)

import {StudentsApi} from "./studentsApi"

 StudentsApi
    .getList()
    .then((list) => {
        renderStudentList(list)
        students_list = list
    })
    .catch(e => showError(e))

function onFormSubmit(e) {
    e.preventDefault()

    const student = getStudentData()

    if (!isStudentValid(student)) {
        showError(new Error('Некорректные данные. Заполните поле ввода'))
        return
    }

    StudentsApi
        .create(student)
        .then((newStudent) => {
            renderStudent(newStudent)
            clearForm()
            students_list.push(newStudent)
        })
        .catch(e => showError(e))
}

function onStudentsContainerClick(e) {
    const target = e.target
    const studentEl = findStudentEl(target)

    if (!studentEl) {
        return
    }

    if (isDeleteBtn(target)) {
        deleteStudentEl(studentEl)
    }
}

function onStudentsContainerFocusOut(e) {
    const target = e.target

    if (isMarksInput(target)) {
        const studentEl = findStudentEl(target)
        const id = getStudentElId(studentEl)
        const marks = getStudentMarks(studentEl)

        StudentsApi.update(id, {marks})
            .then(() => {
                const updatedStudent = students_list.find(student => student.id === id);
                updatedStudent.marks = marks
            })
            .catch(e => showError(e))
    }
}

function isDeleteBtn(el) {
    return el.classList.contains(CLASS_DELETE_BTN)
}

function isMarksInput(el) {
    return el.classList.contains(CLASS_MARKS_INPUT)
}

function findStudentEl(el) {
    return el.closest('.' + CLASS_STUDENT_ITEM)
}

function getStudentData() {
    const id = form.id.value
    const student = findStudentById(id) || {}

    return {
        ...student,
        name: form.name.value,
        marks: default_marks
    }
}

function getStudentMarks(el) {
    let marks = [];
    const studentItem = el.closest(".studentItem")

    if (studentItem) {
        const studentInputs = studentItem.querySelectorAll(".markInput");

        marks = Array.from(studentInputs).reduce((acc, input) => {
            acc.push(Number(input.value))
            return acc
        }, [])
    }

    return marks
}

function deleteStudentEl(el) {
    const id = getStudentElId(el)

    StudentsApi
        .delete(id)
        .catch(e => showError(e))

    el.remove()

    students_list = students_list.filter(studentItem => studentItem.id !== id)
}

function isStudentValid(student) {
    return (
        student.name !== ''
    )
}

function renderStudentList(list) {
    const html = list.map(generateStudentHtml).join('')

    studentsContainer.innerHTML = html
}

function renderStudent(student) {
    const html = generateStudentHtml(student)

    studentsContainer.insertAdjacentHTML('beforeend', html)
}

function generateStudentHtml(student) {
    return `
  <tbody id="studentList">
    <tr data-id="${student.id}" class="studentItem">
      <td>${student.name}</td>
      <td>
        <input class="markInput" type="text" value="${student.marks[0]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[1]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[2]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[3]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[4]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[5]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[6]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[7]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[8]}">
      </td>
      <td>
        <input class="markInput" type="text" value="${student.marks[9]}">
      </td>
      <td>
        <button class="deleteBtn">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  `
}

function clearForm() {
    form.reset()
    form.id.value = ''
}

function showError(error) {
    alert(error.message)
}

function getStudentElId(el) {
    return el.dataset.id
}

function findStudentById(id) {
    return students_list.find(student => student.id === id)
}