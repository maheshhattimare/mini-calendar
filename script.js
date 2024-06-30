const myDay=document.getElementById('myDay');
const dayOfWeek=document.getElementById('dayOfWeek');
const myYear=document.getElementById('myYear');
const myMonth=document.getElementById('myMonth');

const date=new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.addEventListener('DOMContentLoaded',function(){

    myDay.innerHTML=`${date.getDay()}`
    dayOfWeek.innerHTML=`${daysOfWeek[date.getDate()]}`
    myYear.innerHTML=`${date.getFullYear()}`
    myMonth.innerHTML=`${months[date.getMonth()]}`
    
});

    // console.log(date);
    // console.log(date.getDay()); //monday
    // console.log(date.getDate()); //date (1-31)
    // console.log(date.getFullYear());
    // console.log(date.getMonth()+1);