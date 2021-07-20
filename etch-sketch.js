
let number_squares=16;
let totalsize=number_squares*number_squares;
let draw_space=600;
let square_size=600/number_squares;
let color='blue'


create_grid(number_squares,'drawing');

// let hoversq=document.querySelector('.square');
// hoversq.addEventListener('mouseover',function(e){
//     // console.log('click');
//     e.style.backgroundColor=`blue`;
// })

function create_grid(number_squares, elementid){
    gridstyle(number_squares, elementid);
    let draw=document.getElementById(elementid);

    for (let i=1;i<=totalsize;i++){
        let square=document.createElement('div');
        square.classList.add('square');
        square.style.border='0.5px solid rgb(75, 75, 75)';
        square.addEventListener('mouseover',function(e){
            // console.log('click');
            e.target.style.backgroundColor=`blue`;
        })
        // square.textContent='.';
        draw.appendChild(square);
    }
}

function gridstyle(number_squares, elementid){
    let draw=document.getElementById(elementid);
    draw.style.display="grid";
    draw.style.gridTemplateColumns=`repeat(${number_squares},${square_size}px`;
    
}