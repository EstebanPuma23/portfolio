let btn = document.querySelector('.btn');
btn.addEventListener("click", function() {
    let about = document.querySelector('#about')
    about.style.display = 'block'


});


const $form = document.querySelector('#form');
        const $buttomMailTo = document.querySelector('#trucazo');

        function handleSubmit(e){
            e.preventDefault()
            const form = new FormData(this)
            $buttomMailTo.setAttribute('href', `mailto:puma.esteban18@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
            $buttomMailTo.click()
        }   

        $form.addEventListener('submit',handleSubmit )