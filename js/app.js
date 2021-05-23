// document.addEventListener('DOMContentLoaded', () => {

//     const input = Array.from(document.querySelectorAll('.input'));
//     const input_name = document.querySelector('.input-name');
//     const input_mail = document.querySelector('.input-mail');
//     const input_message = document.querySelector('.input-message');
//     for (let i of input) {
//         i.setAttribute('required', true);

//     }

//     document.querySelector('form').addEventListener('submit', (e) => {
//             e.preventDefault();
//         })
//         if (input_name.validity.valid) {
//             console.log('good')
//         }
//         for (let i of input) {
//             i.setCustomValidity("Ce champ est requis");
//             i.reportValidity();
//         }

// });