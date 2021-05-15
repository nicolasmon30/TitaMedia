window.onload = () => {
    let btns = document.querySelectorAll('.titaBtn__btn')
    let container = document.querySelector('.titaGrid')
    let box = container.querySelector('.titaGrid__box')
    btns.forEach((btn) =>{
        btn.addEventListener('click',(e) => {
            let target = e.target
            let targetId = target.id
            if(targetId === 'grid__row'){
                container.classList.add('titaGrid__full')
            }else{
                container.classList.remove('titaGrid__full')
            }
            
        })
    })
}