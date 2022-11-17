// Webcomponent for event cards on the homepage

import { getImg } from "../scripts/eDataHelper";

class EventCard extends HTMLElement {
    constructor() {
        super();
        let shadowElem = this.attachShadow({ mode: "open" });
    }

    set data(data) {
        if (!data) return;

        const styleElem = document.createElement("style");
        // CSS representation of event-card
        styleElem.innerHTML = `
        
        `;

        const card = document.createElement("article");

        /*
        Event Card components below
            event image
            event title
            button to view event
        */
        const eventImg = document.createElement("img");
        eventImg.src = getImg(data)
        eventImg.alt = getTitle(data)
        card.appendChild(eventImg);

        const eventTitle = document.createElement("p");
        eventTitle.classList.add("title");
        eventTitle.textContent = getTitle(data);
        card.appendChild(recipeTitle);

        const viewButton = document.createElement("button");
        viewButton.textContent = "View Event";
        card.appendChild(viewButton);
        
        shadowElem.appendChild(styleElem);
        shadowElem.appendChild(card);
    }
}

customElements.define('event-card', EventCard);