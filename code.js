//function that display value
function dis(x)
{
    document.getElementById("result").value+=x;
}

//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}

function del(){
    document.getElementById("result").value=result.value.splice(0,-1);
}