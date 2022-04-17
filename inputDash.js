let input = document.querySelector('input');
input.addEventListener('input', function(){
    let inp = this.value.split(" - ").join("");
    if(inp.length > 0){
     inp = inp.match(new RegExp('.{1,1}' , 'g')).join(" - ");
    }
    this.value = inp;
});