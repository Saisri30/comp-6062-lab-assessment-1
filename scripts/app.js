const myFullName = 'Sai Sri';
const myStudentNumber = 1234054;
const result = `${myFullName} - ${myStudentNumber}`; 
console.log(result);

const primaryHeadingContent = document.querySelector('h1');

primaryHeadingContent.innerHTML = result;
//console.log(primaryHeadingContent.innerHTML);

primaryHeadingContent.classList.add("primaryHeading");