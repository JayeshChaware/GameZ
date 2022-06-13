var Name=[]; 
var sname;
function userName(){
    sname=prompt("Your Name please");
    for (let i = localStorage.length; i>=1 ; i--) {
        var usrmsg=JSON.parse(localStorage.getItem(i));

        document.getElementById("chat").innerHTML += usrmsg.user+": "+usrmsg.msg +'\r\n';
        
    }
}
var msgs=localStorage.length;

function addMsg()
{
    var msg=document.getElementById("msg").value;
    var getDat={
        "user": sname,
        "msg": msg
    }
    localStorage.setItem(localStorage.length+1,JSON.stringify(getDat));
    msgs++; 
    document.getElementById("chat").innerHTML="";
    for (let i = localStorage.length; i>=1 ; i--) {
        var usrmsg=JSON.parse(localStorage.getItem(i));

        document.getElementById("chat").innerHTML += usrmsg.user+": "+usrmsg.msg +'\r\n';
        // usrmsg.user.value+":"+usrmsg.msg.value +'<br>  ';
        
    }
//    console.log(msgs);
    
}