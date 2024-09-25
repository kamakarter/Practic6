// задание 1

console.log(document.querySelector('div'));
console.log(document.querySelector('ul'));

let elementLi = document.querySelectorAll('li');
console.log(elementLi[1]);


// задание 2

let AllLiItems = document.querySelectorAll('li');
AllLiItems.forEach(link => link.classList.add('list-item'));

console.log();

// задание 3

let CountDivs = parseInt(prompt("Введите количество блоков: ", 0));

for (let i = 0; i < CountDivs; i++){
    document.querySelector('.MainDiv').innerHTML += `<div class="MainDivItem">${i}</div>`;
}

// задание 4

let BtnFormCreate = document.querySelector('.btn').addEventListener('click', function (){
    document.querySelector('.form_box   ').innerHTML += `
    <form action="#">
            <label for="name">Имя</label>
            <input type="text" name="name" placeholder="Введите ваше имя*">
            
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Введите email*">
            
            <input type="submit" placeholder="Отправить">
        </form>
`;
})



