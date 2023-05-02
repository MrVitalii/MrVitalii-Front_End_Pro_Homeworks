/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studentsApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentsApi */ \"./src/studentsApi.js\");\nconst CLASS_STUDENT_ITEM = 'studentItem'\r\nconst CLASS_DELETE_BTN = 'deleteBtn'\r\nconst CLASS_MARKS_INPUT = 'markInput'\r\nconst studentsContainer = document.querySelector('#studentsContainer')\r\nconst form = document.querySelector('#studentForm')\r\nconst default_marks = Array(10).fill(0)\r\nlet students_list = []\r\n\r\nform.addEventListener('submit', onFormSubmit)\r\nstudentsContainer.addEventListener('click', onStudentsContainerClick)\r\nstudentsContainer.addEventListener('focusout', onStudentsContainerFocusOut)\r\n\r\n;\r\n\r\n _studentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi.getList()\r\n    .then((list) => {\r\n        renderStudentList(list)\r\n        students_list = list\r\n    })\r\n    .catch(e => showError(e))\r\n\r\nfunction onFormSubmit(e) {\r\n    e.preventDefault()\r\n\r\n    const student = getStudentData()\r\n\r\n    if (!isStudentValid(student)) {\r\n        showError(new Error('Некорректные данные. Заполните поле ввода'))\r\n        return\r\n    }\r\n\r\n    _studentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi.create(student)\r\n        .then((newStudent) => {\r\n            renderStudent(newStudent)\r\n            clearForm()\r\n            students_list.push(newStudent)\r\n        })\r\n        .catch(e => showError(e))\r\n}\r\n\r\nfunction onStudentsContainerClick(e) {\r\n    const target = e.target\r\n    const studentEl = findStudentEl(target)\r\n\r\n    if (!studentEl) {\r\n        return\r\n    }\r\n\r\n    if (isDeleteBtn(target)) {\r\n        deleteStudentEl(studentEl)\r\n    }\r\n}\r\n\r\nfunction onStudentsContainerFocusOut(e) {\r\n    const target = e.target\r\n\r\n    if (isMarksInput(target)) {\r\n        const studentEl = findStudentEl(target)\r\n        const id = getStudentElId(studentEl)\r\n        const marks = getStudentMarks(studentEl)\r\n\r\n        _studentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi.update(id, {marks})\r\n            .then(() => {\r\n                const updatedStudent = students_list.find(student => student.id === id);\r\n                updatedStudent.marks = marks\r\n            })\r\n            .catch(e => showError(e))\r\n    }\r\n}\r\n\r\nfunction isDeleteBtn(el) {\r\n    return el.classList.contains(CLASS_DELETE_BTN)\r\n}\r\n\r\nfunction isMarksInput(el) {\r\n    return el.classList.contains(CLASS_MARKS_INPUT)\r\n}\r\n\r\nfunction findStudentEl(el) {\r\n    return el.closest('.' + CLASS_STUDENT_ITEM)\r\n}\r\n\r\nfunction getStudentData() {\r\n    const id = form.id.value\r\n    const student = findStudentById(id) || {}\r\n\r\n    return {\r\n        ...student,\r\n        name: form.name.value,\r\n        marks: default_marks\r\n    }\r\n}\r\n\r\nfunction getStudentMarks(el) {\r\n    let marks = [];\r\n    const studentItem = el.closest(\".studentItem\")\r\n\r\n    if (studentItem) {\r\n        const studentInputs = studentItem.querySelectorAll(\".markInput\");\r\n\r\n        marks = Array.from(studentInputs).reduce((acc, input) => {\r\n            acc.push(Number(input.value))\r\n            return acc\r\n        }, [])\r\n    }\r\n\r\n    return marks\r\n}\r\n\r\nfunction deleteStudentEl(el) {\r\n    const id = getStudentElId(el)\r\n\r\n    _studentsApi__WEBPACK_IMPORTED_MODULE_0__.StudentsApi[\"delete\"](id)\r\n        .catch(e => showError(e))\r\n\r\n    el.remove()\r\n\r\n    students_list = students_list.filter(studentItem => studentItem.id !== id)\r\n}\r\n\r\nfunction isStudentValid(student) {\r\n    return (\r\n        student.name !== ''\r\n    )\r\n}\r\n\r\nfunction renderStudentList(list) {\r\n    const html = list.map(generateStudentHtml).join('')\r\n\r\n    studentsContainer.innerHTML = html\r\n}\r\n\r\nfunction renderStudent(student) {\r\n    const html = generateStudentHtml(student)\r\n\r\n    studentsContainer.insertAdjacentHTML('beforeend', html)\r\n}\r\n\r\nfunction generateStudentHtml(student) {\r\n    return `\r\n  <tbody id=\"studentList\">\r\n    <tr data-id=\"${student.id}\" class=\"studentItem\">\r\n      <td>${student.name}</td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[0]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[1]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[2]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[3]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[4]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[5]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[6]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[7]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[8]}\">\r\n      </td>\r\n      <td>\r\n        <input class=\"markInput\" type=\"text\" value=\"${student.marks[9]}\">\r\n      </td>\r\n      <td>\r\n        <button class=\"deleteBtn\">Delete</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n  `\r\n}\r\n\r\nfunction clearForm() {\r\n    form.reset()\r\n    form.id.value = ''\r\n}\r\n\r\nfunction showError(error) {\r\n    alert(error.message)\r\n}\r\n\r\nfunction getStudentElId(el) {\r\n    return el.dataset.id\r\n}\r\n\r\nfunction findStudentById(id) {\r\n    return students_list.find(student => student.id === id)\r\n}\n\n//# sourceURL=webpack://homework_24_students_marks_webpack/./src/index.js?");

/***/ }),

/***/ "./src/studentsApi.js":
/*!****************************!*\
  !*** ./src/studentsApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudentsApi\": () => (/* binding */ StudentsApi)\n/* harmony export */ });\nclass StudentsApi {\r\n    static URL = 'https://6391adecac688bbe4c4f165a.mockapi.io/api/students';\r\n\r\n    static request(url = '', method = 'GET', body) {\r\n        return fetch(StudentsApi.URL + url, {\r\n            method,\r\n            body: body ? JSON.stringify(body) : undefined,\r\n            headers: {\r\n                'Content-type': 'application/json',\r\n            }\r\n        })\r\n            .then((res) => {\r\n                if (res.ok) {\r\n                    return res.json();\r\n                }\r\n\r\n                throw new Error('Can not execute request to server');\r\n            })\r\n    }\r\n\r\n    static getList() {\r\n        return StudentsApi.request().catch(() => {\r\n            throw new Error('Can not fetch student list from server');\r\n        })\r\n    }\r\n\r\n    static create(student) {\r\n        return StudentsApi.request('', 'POST', student).catch(() => {\r\n            throw new Error('Can not create student on server');\r\n        })\r\n    }\r\n\r\n    static update(id, changes) {\r\n        return StudentsApi.request(`/${id}`, 'PUT', changes).catch(() => {\r\n            throw new Error('Can not update student data on server');\r\n        })\r\n    }\r\n\r\n    static delete(id) {\r\n        return StudentsApi.request(`/${id}`, 'DELETE').catch(() => {\r\n            throw new Error('Can not delete student on server');\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://homework_24_students_marks_webpack/./src/studentsApi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;