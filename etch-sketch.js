
let number_squares=16;
// let totalsize=number_squares*number_squares;
// let draw_space=600;
// let square_size=600/number_squares;
let color='blue'


create_grid(number_squares,'drawing');
let btn=document.getElementById('btn');
btn.addEventListener('click', change_size);

// let hoversq=document.querySelector('.square');
// hoversq.addEventListener('mouseover',function(e){
//     // console.log('click');
//     e.style.backgroundColor=`blue`;
// })

function create_grid(number_squares, elementid){
    let totalsize=number_squares*number_squares;
    let square_size=600/number_squares;
    gridstyle(number_squares, elementid,square_size);
    let draw=document.getElementById(elementid);
    

    for (let i=1;i<=totalsize;i++){
        let square=document.createElement('div');
        square.classList.add('square');
        square.style.border='0.5px solid rgb(75, 75, 75)';
        square.addEventListener('mouseover',color_grid);
        // square.textContent='.';
        draw.appendChild(square);
    }
}

function color_grid(e){
    let randomR=Math.round(Math.random()*255);
    let randomG=Math.round(Math.random()*255);
    let randomB=Math.round(Math.random()*255);
    let color=(randomR,randomG,randomB);
    // e.target.style.backgroundColor=(randomR,randomG,randomB);
    // e.target.style.backgroundColor=(randomR,randomG,randomB);
    e.target.style.backgroundColor=`rgb(${randomR}, ${randomG}, ${randomB})`

}

function gridstyle(number_squares, elementid,square_size){
    let draw=document.getElementById(elementid);
    draw.style.display="grid";
    draw.style.gridTemplateColumns=`repeat(${number_squares},${square_size}px`;
    // draw.style.gridTemplateRows=`repeat(${number_squares},${square_size}px`;
    
}

function delete_element(parentelementid,oldelementid,newelementid){
    // will replace an element with an empty element
    let parentel=document.getElementById(parentelementid);
    let oldel=document.getElementById(oldelementid);
    oldel.remove()
    let newel=document.createElement('div');
    newel.setAttribute('id', newelementid);
    parentel.appendChild(newel);


    
}


function change_size(e){
    // console.log(e);
    number_squares=Number(window.prompt("What size do you want the grid?"));
    while (isNaN(number_squares) || number_squares>100 || number_squares<1){
        if (isNaN(number_squares)){
            alert('Must be a number');
        }else if (number_squares>100 || number_squares<1){
            alert('Must be between 1-100')
        }   
        number_squares=Number(window.prompt("What size do you want the grid?"));
    }
    delete_element('content','drawing','drawing');
    create_grid(number_squares,'drawing');
    
}