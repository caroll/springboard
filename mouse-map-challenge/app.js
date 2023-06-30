

document.getElementById("canva").addEventListener("mousemove" , ( point ) => {
    //console.log("X ->"+ point.offsetX + " - Y ->" + point.offsetY );
    let r = Math.round( (point.offsetX * 255 ) / window.innerWidth );
    let b = Math.round( (point.offsetY * 255 ) / window.innerHeight );
    const color = `rgb(${r},0,${b})`;
    document.body.style.backgroundColor = color;
});
