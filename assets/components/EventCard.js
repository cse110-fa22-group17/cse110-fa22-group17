// Webcomponent for event cards on the homepage

import { getImg, getTitle } from "../scripts/eDataHelper.js";

class EventCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    set data(data) {
        if (!data) return;

        const styleElem = document.createElement("style");
        // CSS representation of event-card HTML elements
        styleElem.innerHTML = `
        * {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }

        article {
            align-items: center;
            border: 1px solid #000;
            border-radius: 8px;
            display: grid;
            grid-template-rows: 80px 50px 15px 18px 15px 36px;
            height: 200px;
            padding: 0px 20px 20px 20px;
            width: 25%;
            float: left;
            column-gap: 10%;
            row-gap: 10%;
            margin-right: 40px;
            margin-bottom: 20px;
        }

        article p {
            color: #000;
            font-size: 20px;
            text-align: center;
          }

          article button {
            align_items:bottom;
            border: 1px solid #414BB2;
            background-color: #414BB2;
            border-radius: 14px;
            color: white;
            cursor: pointer;
            font-size: 20px;
            padding: 5px 20px;
            top:50%;
          }
        
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
        card.appendChild(eventTitle);
        
        const viewButton = document.createElement("button");
        viewButton.textContent = "View Event";
        card.appendChild(viewButton);
        
        this.shadow.appendChild(styleElem);
        this.shadow.appendChild(card);
    }
}

customElements.define('event-card', EventCard);