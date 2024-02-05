const input=document.querySelector('.input');
const lastsms=document.querySelector('.lastmessage');
const submit=document.querySelector('.submit');
const error=document.querySelector('.eror');
submit.addEventListener('click',function(e){
    e.preventDefault();
    if(input.value===''){
     error.classList.add('show');
     setTimeout(function(){
        error.classList.remove('show')
     },4000)
      }
      else{
        lastsms.textContent=input.value;
        input.value='';
      }
})