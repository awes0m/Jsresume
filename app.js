const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSection= document.querySelector('.main-content');

function PageTransitions(){
    //Button click active clas
    for (let i = 0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    // Sections Active 
    allSection.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        if (id){
            // remove selected from other buttons
            sectBtn.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // Hide other Sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
PageTransitions();