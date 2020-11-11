let user=Data.results

let index=0
const name=document.querySelectorAll(".card-title");
const image=document.querySelectorAll(".card-imag");
const emailAddress=document.querySelectorAll(".email-link");
const phoneNum=document.querySelectorAll(".phone-nr");
const buttonRight=document.querySelector(".next");
const buttonLeft=document.querySelector(".back");

function addUser(user){
    user.forEach((user,i) => {
        name[i].innerHTML=user.name.title+""+user.name.first+""+user.name.last;
        emailAddress[i].innerHTML=user.email
        phoneNum[i].innerHTML=user.phone
        image[i].src=user.picture.large
    });
}
addUser([user[index],user[index+1],user[index+2]])







let main = () => {
    buttonRight.addEventListener("click",function(){
        index += 3
        if(index===user.length-2){
            addUser([user[index],user[index+1],user[0]]) 
            index=-2
        } else if (index===user.length-1) {
            addUser([user[index],user[0],user[1]]) 
            index=-1
        } else if (index===user.length-3) {
            addUser([user[index],user[index+1],user[index+2]]) 
            index=-3
        } else {
            addUser([user[index],user[index+1],user[index+2]]) 
        }
    })
    buttonLeft.addEventListener("click",function(){
        index -= 3
        if(index===-3){
            index=Data.length-3
            addUser([user[index],user[index+1],user[index+2]]) 
        } else if (index===-1) {
            addUser([user[user.length-1],user[0],user[1]]) 
            index=user.length-1
        } else if (index===-2) {
            addUser([user[user.length-2],user[user.length-1],user[0]]) 
            index=user.length-2
        } else {
            addUser([user[index],user[index+1],user[index+2]]) 
        }
    })
   
  }
  
  main();
