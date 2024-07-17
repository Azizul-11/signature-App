const colorPicker= document.getElementById('colorPicker');
const canvasColor= document.getElementById('canvasColor');
const canvas= document.getElementById('myCanvas');
const clearBotton= document.getElementById('clearBotton');
const saveBotton= document.getElementById('saveBotton');
const fontSize= document.getElementById('fontsize');
const retriveBotton= document.getElementById('retriveBotton');

const ctx= canvas.getContext('2d');

colorPicker.addEventListener('change', (e)=>{
    ctx.strokeStyle=e.target.value
    ctx.fillStyle=e.target.value
})


canvas.addEventListener('mousedown', (e)=>{
    isDrawing=true;
    lastX=e.offsetX;
    lastY=e.offsetY
})

canvas.addEventListener('mousemove', (e)=>{
    if(isDrawing)
    {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastX=e.offsetX;
        lastY=e.offsetY;
    } 
})

canvas.addEventListener('mouseup', ()=>{
    isDrawing=false;
})

canvasColor.addEventListener("change", (e)=>{
    ctx.fillStyle=e.target.value;
    ctx.fillRect(0,0,800,500)
})


colorPicker.addEventListener("change", (e)=>{
    ctx.strokeStyle=e.target.value;
    ctx.fillStyle=e.target.value;
})

clearBotton.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

saveBotton.addEventListener("click",()=>{
    localStorage.setItem('canvasContents', canvas.toDataURL());

    let link= document.createElement('a');

    link.download= 'my-canvas.png';

    link.href=canvas.toDataURL();

    link.click();
})




retriveBotton.addEventListener("click",()=>{
    let saveCanvas= localStorage.getItem("canvasContents");

    if(saveCanvas)
    {
        let img= new Image();
        img.src=saveCanvas;
        ctx.drawImage(img,0,0);
    }
})