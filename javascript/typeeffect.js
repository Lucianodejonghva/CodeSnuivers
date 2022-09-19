
function myKeyPress(e) {
    let keynum;
    
    if (window.event) { // Explorer                  
        keynum = e.keyCode
        
        
    } else if (e.which) { // Firefox/Opera                 
        keynum = e.which;
    }
    

    let keys = document.querySelectorAll(".toets");
    let keychar = (String.fromCharCode(keynum));

    keys.forEach(key => {
        H1Content = key.querySelector("h1").innerText;
        // console.log(H1Content);
        if (H1Content.toLowerCase() === keychar.toLowerCase()) {
            // console.log("hit")
            //debugger;
            key.classList.add("toetsactive");
            setTimeout(() => {
                
                key.classList.remove("toetsactive")
            }, 100);

        } else {
            key.classList.remove("toetsactive")
        }
    });


}