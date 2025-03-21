function operate(n1,op,n2)
{
    switch (op)
    {
    case '+':
        return n1+n2;
    case '–':
        return n1-n2;
    case '×':
        return n1*n2;
    case '/':
        return n1/n2;
    default:
        return 0;
    }
}
const btns = document.querySelectorAll(".keyBtn");
btns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        document.getElementById("disp").value = document.getElementById("disp").value + btn.textContent;
    });
});