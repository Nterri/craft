const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
};

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__container').offsetHeight;
            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active');
                menuBody.classList.remove('active');
            }
            console.log(gotoBlockValue);
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
    }
};

const name = document.querySelector('.name');
const number = document.querySelector('.number');
const error = document.querySelector('.submit__error');
const errorPhone = document.querySelector('.submit__error-phone');
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscribe_form');
    form.addEventListener('submit', formSend);
    function formSend(e) {
        e.preventDefault();
        if (name.classList.contains('error')) { name.classList.remove('error') }
        if (number.classList.contains('error')) { number.classList.remove('error') }
        if (error.classList.contains('active')) { error.classList.remove('active') }
        if (errorPhone.classList.contains('active')) { errorPhone.classList.remove('active') }
        if (name.value == '' && number.value == '') {
            name.classList.add('error');
            number.classList.add('error');
            error.classList.add('active');
        }
        if (name.value == '') {
            name.classList.add('error');
            error.classList.add('active');
        }
        if (number.value == '') {
            number.classList.add('error');
            error.classList.add('active');
        }
        if (name.value != '' && number.value != '' && !(/^\d[\d\(\)\ -]{4,14}\d$/.test(number.value))) {
            number.classList.add('error');
            errorPhone.classList.add('active');
        }
        if (name.value != '' && number.value != '' && (/^\d[\d\(\)\ -]{4,14}\d$/.test(number.value))) {
            form.reset();
            setTimeout(() => {
                alert('Спасибо');
            }, 100);
        }
        /* let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove('sending');
        } else {
            alert('Error');
            form.classList.remove('sending');
        } */
    }
});

const name2 = document.querySelector('.name2');
const number2 = document.querySelector('.number2');
const error2 = document.querySelector('.submit__error2');
const errorPhone2 = document.querySelector('.submit__error-phone2');
document.addEventListener('DOMContentLoaded', function () {
    const form2 = document.getElementById('subscribe_form2');
    form2.addEventListener('submit', formSend);
    function formSend(e) {
        e.preventDefault();
        if (name2.classList.contains('error')) { name2.classList.remove('error') }
        if (number2.classList.contains('error')) { number2.classList.remove('error') }
        if (error2.classList.contains('active')) { error2.classList.remove('active') }
        if (errorPhone2.classList.contains('active')) { errorPhone2.classList.remove('active') }
        if (name2.value == '' && number2.value == '') {
            name2.classList.add('error');
            number2.classList.add('error');
            error2.classList.add('active');
        }
        if (name2.value == '') {
            name2.classList.add('error');
            error2.classList.add('active');
        }
        if (number2.value == '') {
            number2.classList.add('error');
            error2.classList.add('active');
        }
        if (name2.value != '' && number2.value != '' && !(/^\d[\d\(\)\ -]{4,14}\d$/.test(number2.value))) {
            number2.classList.add('error');
            errorPhone2.classList.add('active');
        }
        if (name2.value != '' && number2.value != '' && (/^\d[\d\(\)\ -]{4,14}\d$/.test(number2.value))) {
            form2.reset();
            setTimeout(() => {
                alert('Мы с вами свяжемся! Спасибо');
            }, 100);
        }
        /* let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove('sending');
        } else {
            alert('Error');
            form.classList.remove('sending');
        } */
    }
});