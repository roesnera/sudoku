
function changeNumHTML() {
    let inner = Number(this.innerHTML);
    console.log(inner)
    switch (inner){
        case 1:
            this.innerHTML = 2;
            break;
        case 2:
            this.innerHTML = 3;
            break;
        case 3:
            this.innerHTML = 4;
            break;
        case 4:
            this.innerHTML = 5;
            break;
        case 5:
            this.innerHTML = 6;
            break;
        case 6:
            this.innerHTML = 7;
            break;
        case 7:
            this.innerHTML = 8;
            break;
        case 8:
            this.innerHTML = 9;
            break;
        case 9:
            this.innerHTML = '';
            break;
        default:
            this.innerHTML = 1;
        
    }



}




$(document).ready(function () {
    
    for(let y = 0; y<9; y++){
        for(let x = 0; x<9; x++){
            let arr = []
            let str = '';
            arr.push('#')
            arr.push(y);
            arr.push('-');
            arr.push(x);
            str = arr.join('');
            $(str).click(function (e) { 
                e.preventDefault();
                {
                    let inner = Number(this.innerHTML);
                    switch (inner){
                        case 1:
                            this.innerHTML = 2;
                            break;
                        case 2:
                            this.innerHTML = 3;
                            break;
                        case 3:
                            this.innerHTML = 4;
                            break;
                        case 4:
                            this.innerHTML = 5;
                            break;
                        case 5:
                            this.innerHTML = 6;
                            break;
                        case 6:
                            this.innerHTML = 7;
                            break;
                        case 7:
                            this.innerHTML = 8;
                            break;
                        case 8:
                            this.innerHTML = 9;
                            break;
                        case 9:
                            this.innerHTML = '';
                            break;
                        default:
                            this.innerHTML = 1;
                        
                    }
                }
            });
        }
    }
})