//problem is red ki chance par blue bhi chal ja raha hai or vice versa
//ready queue only having the name of got which is eligiable to run
//whole_reference having actual got to run
const chance=['red','blue','yellow','green'];
const element = document.querySelector(".whole_red");
let store_placed=[];
const whole_red=['red1','red2','red3','red4'];

let ready_Queue=[];
let ready_Queue_red=[];
let ready_Queue_blue=[];
let ready_Queue_yellow=[];
let ready_Queue_green=[];

let whole_reference=[];
let whole_reference_red=[];
let whole_reference_blue=[];
let whole_reference_yellow=[];
let whole_reference_green=[];

const red=[
{left: 330,top: 243},{left: 380,top: 243},{left: 425,top: 243},{left: 475,top: 243},{left:520,top: 243},
{left:575,top: 200},{left:575,top: 162},{left: 575,top: 126},{left: 575,top:90},{left: 575,top: 53},
{left: 575,top: 13},{left:635,top: 13},{left: 695,top: 13},{left:695,top: 53},{left:695,top: 90},
{left:695,top: 125},{left:695,top: 163},{left:695,top:200},{left:760,top:240},{left:815,top:240},{left:868,top:240},
{left:918,top:240},{left:962,top:240},{left:1006,top:240},{left:1006,top:282},{left:1006,top:332},{left:962,top:332},
{left:918,top:332},{left:868,top:332},{left:818,top:332},{left:765,top:332},{left:690,top:385},{left:690,top:415},
{left:690,top:452},{left:694,top:492},{left:694,top:540},{left:694,top:590},{left:624,top:590},{left:570,top:590},
{left:570,top:540},{left:570,top:493},{left:570,top:453},{left:570,top:415},{left:570,top:385},{left:520,top:345},
{left:475,top:345},{left:427,top:345},{left:380,top:345},{left:330,top:345},{left:285,top:345},{left:285,top:293},
{left:330,top:293},{left:378,top:293},{left:425,top:293},{left:475,top:293},{left:520,top:293}
]

const blue=[{left:570,top:540},{left:570,top:494},{left:570,top:453},{left:570,top:416},
{left:570,top:383},{left:520,top:343},{left:475,top:343},{left:425,top:343},{left:379,top:343},{left:329,top:343},
{left:285,top:345},{left:285,top:293},{left:285,top:245},{left:330,top:245},{left:377,top:245},{left:425,top:245},{left:475,top:245},
{left:520,top:245},{left:575,top:200},{left:575,top:163},{left:575,top:126},{left:575,top:90},{left:575,top:52},{left:575,top:12},
{left:635,top:12},{left:695,top:12},{left:695,top:52},{left:695,top:90},{left:695,top:126},{left:695,top:163},{left:695,top:200},{left:760,top:240},
{left:815,top:240},{left:865,top:240},{left:918,top:240},{left:963,top:240},{left:1006,top:240},
{left:1006,top:282},{left:1006,top:335},{left:962,top:335},{left:916,top:335},{left:866,top:335},{left:816,top:335},{left:760,top:335},
{left:690,top:385},{left:690,top:415},{left:690,top:453},{left:694,top:493},{left:690,top:543},{left:690,top:593},
,{left:624,top:593},{left:624,top:540},{left:624,top:493},{left:624,top:452},{left:624,top:415},{left:624,top:382},]

const yellow=[
{left:963,top:343},{left:920,top:343},{left:870,top:343},{left:820,top:343},{left:765,top:343},
{left:700,top:383},{left:700,top:415},{left:700,top:450},{left:700,top:493},{left:700,top:543},{left:700,top:593},
{left:630,top:593},{left:570,top:593},{left:570,top:543},{left:570,top:493},{left:570,top:453},{left:570,top:413},{left:570,top:384},
{left:520,top:344},{left:475,top:344},{left:425,top:344},{left:380,top:344},{left:330,top:344},{left:285,top:344},
{left:285,top:290},{left:285,top:240},{left:330,top:240},{left:380,top:240},{left:430,top:240},{left:470,top:240},{left:520,top:240},
{left:570,top:200},{left:570,top:155},{left:570,top:125},{left:570,top:90},{left:570,top:50},{left:570,top:15},
{left:640,top:15},{left:700,top:15},{left:700,top:50},{left:700,top:90},{left:700,top:125},{left:700,top:165},{left:700,top:200},
{left:760,top:240},{left:820,top:240},{left:870,top:240},{left:920,top:240},{left:965,top:240},{left:1010,top:240},
{left:1010,top:280},{left:965,top:280},{left:915,top:280},{left:865,top:280},{left:760,top:280},{left:700,top:280},
]

const green=[
{left:700,top:55},{left:700,top:90},{left:700,top:125},{left:700,top:165},{left:700,top:200}
,{left:760,top:240},{left:820,top:240},{left:870,top:240},{left:920,top:240},{left:960,top:240},{left:1010,top:240}
,{left:1010,top:285},{left:1010,top:340},{left:965,top:340},{left:920,top:340},{left:870,top:340},{left:820,top:340},{left:760,top:340}
,{left:700,top:383},{left:700,top:415},{left:700,top:455},{left:700,top:495},{left:700,top:540},{left:700,top:590}
,{left:625,top:590},{left:570,top:590},{left:570,top:540},{left:570,top:495},{left:570,top:455},{left:570,top:416},{left:570,top:384}
,{left:520,top:344},{left:475,top:344},{left:425,top:344},{left:380,top:344},{left:330,top:344},{left:286,top:344},{left:286,top:244}
,{left:330,top:244},{left:380,top:244},{left:430,top:244},{left:475,top:244},{left:520,top:244}
,{left:570,top:200},{left:570,top:165},{left:570,top:125},{left:570,top:90},{left:570,top:53},{left:570,top:15}
,{left:640,top:15},{left:640,top:55},{left:640,top:90},{left:640,top:125},{left:640,top:165},{left:640,top:200},,{left:640,top:240}
]

function Select_ready_Queue(Act_On){
switch (Act_On) {
    case 'red':
        ready_Queue=[...ready_Queue_red]
        console.log('ready_Queue_red:',ready_Queue_red)
    break;
    case 'blue':
        ready_Queue=[...ready_Queue_blue]
        console.log('ready_Queue_blue:',ready_Queue_blue)
    break;
    case 'yellow':
        ready_Queue=[...ready_Queue_yellow]
    break;
    case 'green':
        ready_Queue=[...ready_Queue_green]
    break;
}
console.log('Select_ready_Queue:',ready_Queue);
}

function Update_ready_Queue(Act_On){
    switch (Act_On) {
        case 'red':
            ready_Queue_red=[...ready_Queue]
            console.log('Update_ready_Queue:',ready_Queue_red);
        break;
        case 'blue':
            ready_Queue_blue=[...ready_Queue]
            console.log('Update_ready_Queue:',ready_Queue_blue);
        break;
        case 'yellow':
            ready_Queue_yellow=[...ready_Queue]
        break;
        case 'green':
            ready_Queue_green=[...ready_Queue]
        break;
    }
    // ready_Queue=[];
    console.log('Update_ready_Queue queue:',ready_Queue)
}

function Select_whole_reference(Act_On){
    switch (Act_On) {
        case 'red':
            whole_reference=[...whole_reference_red]
        break;
        case 'blue':
            whole_reference=[...whole_reference_blue]
        break;
        case 'yellow':
            whole_reference=[...whole_reference_yellow]
        break;
        case 'green':
            whole_reference=[...whole_reference_green]
        break;
    }
}

function Update_whole_reference(Act_On){
    switch (Act_On) {
        case 'red':
            whole_reference_red=[...whole_reference]
        break;
        case 'blue':
            whole_reference_blue=[...whole_reference]
        break;
        case 'yellow':
            whole_reference_yellow=[...whole_reference]
        break;
        case 'green':
            whole_reference_green=[...whole_reference]
        break;
    }
}

function Next_call_got(Act_On){
    console.log('Next_call_got:',Act_On);
    switch (Act_On) {
        case 'red':
        UserTurn('blue')
        break;
        case 'blue':
        UserTurn('yellow');
        break;
        case 'yellow':
        UserTurn('green')
        break;
        case 'green':
        UserTurn('red');
        break;
    }
}

function Place_locate(e){
switch(e){
    case 'red':
    store_placed=[...red];
    break;
    case 'blue':
    store_placed=[...blue];
    break;
    case 'yellow':
    store_placed=[...yellow];
    break;
    case 'green':
    store_placed=[...green];
    break;
}
}

function disable_got_while_other_chance(Act_On){
    console.log('disable_got_while_other_chance:',Act_On);
chance.forEach((element)=>{
 if(!(Act_On===element)){
    document.querySelectorAll(`.${element}`).forEach((btn)=>{
        btn.style.pointerEvents='none';
    })
 }else{
    document.querySelectorAll(`.${element}`).forEach((btn)=>{
        btn.style.pointerEvents='auto';
    })
 }
})
}

function Move_got(Act_On){
    console.log('Move_got called!')
let i=0;
const whole_got=document.querySelectorAll(`.whole_${Act_On}`);
console.log('whole_got',whole_got)
whole_got.forEach((element)=>{

element.addEventListener('click',function move(event){  
    Place_locate(Act_On);
const current_dise_value=parseInt(document.getElementsByName(Act_On)[1].innerText);

Actual_Got=document.querySelector(`.${event.target.classList[1]}`);
if(current_dise_value==6 && event.target.accessKey==''){
    event.target.accessKey=0;
    let place=parseInt(event.target.accessKey);
    Actual_Got.style.left=`${store_placed[place].left}px`;
    Actual_Got.style.top=`${store_placed[place].top}px`;

    if(!(ready_Queue.includes(event.target.classList[1]))){
        ready_Queue.push(event.target.classList[1]);//add in ready Queue
    }
    Update_ready_Queue(Act_On);
}

element.removeEventListener('click',move);
Dont_other_Glow(Act_On);
Earse_num(Act_On)
Next_call_got(Act_On)
})
})
}
// Actual_Got,Act_On,current_dise_value
function Move_ready_Queue(Act_On){
    console.log('Move_ready_Queue called!')
    console.log('Act_On:',Act_On)
    console.log('ready_Queue:',ready_Queue);
    Place_locate(Act_On);
    ready_Queue.forEach((element)=>{
    if(!(whole_reference.includes(document.querySelector(`.${element}`)))){
        whole_reference.push(document.querySelector(`.${element}`));
        console.log("whole-reference added");
    }
    })
    console.log('whole_reference:',whole_reference);

        whole_reference.forEach((element)=>{
        element.addEventListener('click',function move_ready(event){
        event.preventDefault();
        const current_dise_value=+(document.getElementsByName(Act_On)[1].innerText);
        Actual_Got=document.querySelector(`.${event.target.classList[1]}`);
        let place=+(event.target.accessKey);
        let temp1=place;
        let temp2=+(current_dise_value);
            let i=0;
            const move_step_by_step=setInterval(function(){
                place++;
            if(place>(temp1+temp2)){

            place--;
            event.target.accessKey=place;
            clearInterval(move_step_by_step);
           }else{
            Actual_Got.style.left=`${store_placed[place].left}px`;
            Actual_Got.style.top=`${store_placed[place].top}px`;
            }
        },500)
        element.removeEventListener('click',move_ready);
        Dont_other_Glow(Act_On);
        Earse_num(Act_On);
        Update_ready_Queue(Act_On);
        Next_call_got(Act_On);
        Update_whole_reference(Act_On);
        whole_reference=[];
        console.log(whole_reference);
        })
    })
}

function Earse_num(Act_On){
    switch (Act_On){
        case "red":
        document.querySelector('.dis1').innerHTML="";
        break;
        case "blue":
        document.querySelector('.dis2').innerHTML=""; 
        break;
        case "green":
        document.querySelector('.dis3').innerHTML="";  
        break;
        case "yellow":
        document.querySelector('.dis4').innerHTML=""; 
        break;
    }
}

function UserTurn(Act_On){
switch(Act_On){
    case 'red':
    Active_Dise('red');
    break;
    case 'blue':
    Active_Dise('blue');
    break;
    case 'yellow':
    Active_Dise('yellow');
    break;
    case 'green':
    Active_Dise('green');
    break;
}
}

const whole_button=document.querySelectorAll('.LudoButton');
whole_button.forEach((button)=>{
    button.addEventListener('click',function Action(event){
        event.stopPropagation
        dice_roll(event.target.name);
        Glow_Got(event.target.classList[1],event.target.name,event);
    })
})

function dice_roll(e){
let a=parseInt(((Math.random()*10)));
if(a>=1 && a<=6)
    a=a;
else if(a>6)
    a=a-3;
else
    a=1;
switch (e){
    case "red":
    document.querySelector('.dis1').innerHTML=a; 
    break;
    case "blue":
    document.querySelector('.dis2').innerHTML=a; 
    break;
    case "green":
    document.querySelector('.dis3').innerHTML=a;   
    break;
    case "yellow":
    document.querySelector('.dis4').innerHTML=a;  
    break;
}    
}

function Active_Dise(e){ 
    function run(i){
        if(document.querySelector(`.button${i+1}`).name==e){
        const dise_one=document.querySelector(`.button${i+1}`);
        dise_one.disabled = false;
        dise_one.style=`border:10px solid black`;
        }
        else{
        document.querySelector(`.button${i+1}`).disabled =true;
        document.querySelector(`.button${i+1}`).style='border:0px';
        }  
        if(i<3){
        run(i=i+1)
        }  
        }
        run(0);
}

function Glow_Got(d,e,btn_ref){
    Select_ready_Queue(e);
    Select_whole_reference(e);
    disable_got_while_other_chance(e);

    const Got=document.querySelectorAll(`.${e}`)
    const temp=parseInt(document.querySelector(`#${d}`).innerHTML);
    if(temp==6){
        function run(i){
        Got[i].style.boxShadow=`0 0 36px ${e},inset 0 0 10px black`,`16px 0 20px black`;
        if(i<=2){
            run(i=i+1);
        }
    }
        run(0);
    }else{
        ready_Queue.forEach((element)=>{
            member=element.split('').splice(0,element.length-1).join('');
            element=document.querySelector(`.${element}`);
        element.style.boxShadow=`0 0 36px ${member},inset 0 0 10px black`,`16px 0 20px black`
    })
    }
    if(temp===6&&ready_Queue.length>0){
        Move_got(e);
        Move_ready_Queue(e);
    }else{
        (ready_Queue.length===0&&temp==6)?Move_got(e):(ready_Queue.length>0?Move_ready_Queue(e):Next_call_got(e));//need to complete
    }
}
//removing the glow from other got
function Dont_other_Glow(e){
const whole_got=document.querySelectorAll(`.${e}`);
whole_got.forEach((element)=>{
    element.style.boxShadow="none";
})
}