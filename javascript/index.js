var ListOfNames = [
    { Device: "laptop" },
    { Device: "tablet" },
    { Device: "phone" },
    { Name: "Stefan" },
    { Name: "Tobias" },
    { Name: "Luciano" },
    { Name: "Ivar" },
    { Name: "Suus Ten V." },
    { Name: "Krijn" },
    { Name: "Maaike" },
    { Name: "Nazneen" },
    { Name: "Rosa" },
    { Name: "Sascha" },
    { Name: "Suus H." },
    { Name: "Rayan" },
    { Name: "Duneya" },
    { Name: "Rosa" },
    { Name: "Demi" },
    { Name: "Ralph" },
    { Name: "Youssra" },
    { Name: "Marwu" },
    { Name: "Gijs" }

];


for (var i = 0; i < 3; i++) {
    // get search bar element

    const searchInput = document.getElementById("studentsearchbar" + ListOfNames[i].Device);

    // store name elements in array-like object
    const namesFromDOM = document.getElementsByClassName("name");

    // listen for user events
    searchInput.addEventListener("keyup", (event) => {
        const { value } = event.target;

        // get user search input converted to lowercase
        const searchQuery = value.toLowerCase();

        for (const nameElement of namesFromDOM) {
            // store name text and convert to lowercase
            let name = nameElement.textContent.toLowerCase();

            // compare current name to search input
            if (name.includes(searchQuery)) {
                // found name matching search, display it
                nameElement.style.display = "block";
            } else {
                // no match, don't display name
                nameElement.style.display = "none";
            }
        }
    });

};

let ULIDLaptop = document.getElementById('laptopsearchresult');

for (var i = 3; i < ListOfNames.length; i++) {


    let LiItemsLaptop = document.createElement('li');
    LiItemsLaptop.setAttribute("class", "name");

    let ATagLaptop = document.createElement('a');
    ATagLaptop.setAttribute("href", "https://" + ListOfNames[i].Name + ".student.fdnd.nl")
    ATagLaptop.setAttribute("target", "_blank");
    ATagLaptop.innerHTML = ListOfNames[i].Name;

    ULIDLaptop.appendChild(LiItemsLaptop);
    LiItemsLaptop.appendChild(ATagLaptop);
};




let ULIDTablet = document.getElementById('tabletsearchresult');

for (var i = 3; i < ListOfNames.length; i++) {

    let LiItemsTablet = document.createElement('li');
    LiItemsTablet.setAttribute("class", "name");

    let ATagTablet = document.createElement('a');
    ATagTablet.setAttribute("href", "https://" + ListOfNames[i].Name + ".student.fdnd.nl")
    ATagTablet.setAttribute("target", "_blank");
    ATagTablet.innerHTML = ListOfNames[i].Name;


    ULIDTablet.appendChild(LiItemsTablet);
    LiItemsTablet.appendChild(ATagTablet);

}




let ULIDPhone = document.getElementById('phonesearchresult');

for (var i = 3; i < ListOfNames.length; i++) {

    let LiItemsPhone = document.createElement('li');
    LiItemsPhone.setAttribute("class", "name");

    let ATagPhone = document.createElement('a');
    ATagPhone.setAttribute("href", "https://" + ListOfNames[i].Name + ".student.fdnd.nl")
    ATagPhone.setAttribute("target", "_blank");
    ATagPhone.innerHTML = ListOfNames[i].Name;


    ULIDPhone.appendChild(LiItemsPhone);
    LiItemsPhone.appendChild(ATagPhone);

}