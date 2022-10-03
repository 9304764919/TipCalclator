function Calculatetip(){
    let billamt=document.getElementById("billamt").value
    let rate=document.getElementById("rate").value
    document.getElementById("tipamt").innerHTML=(billamt/100)*rate
    document.getElementById("tot").innerHTML=(parseFloat(billamt/100)*rate)+parseFloat(billamt)
    
    
}
function refresh(){
    window.location.reload("Refresh");
}