function openUrl(url){
    open(url,"_self");
}

function displaySlideOn(list){
    for(i in list){
        list[i].style.display = "block";
        list[i].style.transform = "translate("+trans+"px)";
        trans = trans+200;
    }
}
function displaySlideOff(list){
    for(i in list){
        list[i].style.display = "none";
        list[i].style.transform = "translate(0px)";
        trans = trans-200;
    }
}

function openPage(flag){
    let i = window.location.href.lastIndexOf('/')+1;
    let j = window.location.href.lastIndexOf('.');
    let index = window.location.href.substring(i,j);
    let cur = window.location.href;
    let nextPage = cur.replace(index,(index*1)+flag);
    openUrl(nextPage);
}

function checkAll(class1, class2){
    let inputClass = document.querySelectorAll(class1);
    let spanClass = document.querySelectorAll(class2);
    let check = true;
    for(i=0; i<inputClass.length; i++){
        if(inputClass[i].value == "" || inputClass[i].value == null || inputClass[i].value == undefined){
            spanClass[i].style.display = "inline";   
            spanClass[i].style.color= "red";
            spanClass[i].innerHTML = "<strong>해당 영역을 입력하세요</strong>";
            check = false;
        }
        else{
            spanClass[i].style.display = "none"; 
        }
    }
    if(check==false){
        event.preventDefault();
    }
}

function checkInputKey(id){
    let a =['!','@','#','$','%','^','&','*','(',')'];
    let b =['0','1','2','3','4','5','6','7','8','9'];
    let c =['q','a','z','w','s','x','e','d','c','r','f','v','t','g','b','t','g','b','y','h','n','u','j','m','i','k','o','p','l','Q','A','Z','W','S','X','E','D','C','R','F','V','T','G','B','T','G','B','Y','H','N','U','J','M','I','K','O','P','L'];
    let d =['q','a','z','w','s','x','e','d','c','r','f','v','t','g','b','t','g','b','y','h','n','u','j','m','i','k','o','p','l'];
    let e =['Q','A','Z','W','S','X','E','D','C','R','F','V','T','G','B','T','G','B','Y','H','N','U','J','M','I','K','O','P','L'];
    let pwdCheck = document.getElementById(id);
    let pwdChar = pwdCheck.value;
    let aCheck = false;
    let bCheck = false;
    let cCheck = false;
    for(i in pwdChar){
        if(a.includes(pwdChar[i])){
            aCheck=true;
        }
        if(b.includes(pwdChar[i])){
            bCheck=true;
        }
        if(c.includes(pwdChar[i])){
            cCheck=true;
        }
    }
    if(aCheck && bCheck && cCheck){
        return true;
    }
    else{
        alert("비밀번호는 영문+숫자+특수문자 조합으로 입력하세요.")
        event.preventDefault();
    }
}
