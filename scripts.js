const Btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

console.log(Btns);
console.log(display);

for(let i=0;i<Btns.length;i++){

    Btns[i].addEventListener('click' ,
        () => {
            const btnValue = Btns[i].innerText;

            if(btnValue ==='AC'){
                display.value="";
            }

            else if(btnValue==='√'){
                display.value = Math.sqrt(display.value);
            }

            else if(btnValue==='='){
                display.value = eval(display.value);
            }

            else{
                if(btnValue==='x'){
                    btnValue.valueOf='*';
                }
                display.value=display.value+btnValue;
            }
        });
}


