function myFunction(x) {
    if (x.matches) {            // If media query matches
        
        document.getElementById("para1").innerHTML = `<h1 style=" margin-left: 100px;">OUR Founder</h1>
        "Innovation, passion and commitment towards the popularization of astronomy and space sciences amongst all,to
        spread knowledge of astronomy and explain everything that we observe in the universe, from the comets and planets in our solar
        system to distant galaxies, and at the same time it also aims at creating projects which would help us in the near future."`

        var prevHeader = document.getElementById("founder-name");

        prevHeader.remove();
    } 
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes