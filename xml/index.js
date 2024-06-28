function loadFoods() {
    fetch("https://raw.githubusercontent.com/trabalhos-etec/festa-junina-xml/main/foods.xml") 
        .then((response) => response.text())
        .then((xmlString) => {
            console.log("foi")
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "text/xml");
            const foods = xmlDoc.querySelectorAll("food"); 

            const boxContainer = document.querySelector(".box-container");

            foods.forEach((food) => {
                const link = food.querySelector("link").textContent;
                const name = food.querySelector("name").textContent;
                const description = food.querySelector("description").textContent;

                const boxElement = document.createElement("div");
                boxElement.classList.add("box");

                const imageElement = document.createElement("img");
                imageElement.classList.add("image");
                imageElement.src = link;

                const contentElement = document.createElement("div");
                contentElement.classList.add("content");
                const h3Element = document.createElement("h3");
                h3Element.textContent = name;
                const pElement = document.createElement("p");
                pElement.textContent = description;

                contentElement.appendChild(h3Element);
                contentElement.appendChild(pElement);
                boxElement.appendChild(imageElement);
                boxElement.appendChild(contentElement);

                boxContainer.appendChild(boxElement);
            });
        })
        .catch((error) => {
            console.error("Erro ao carregar o arquivo XML:", error);
        });
}

loadFoods();
