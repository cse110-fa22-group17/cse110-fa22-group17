// Webcomponent for event cards on the homepage

import { getImg, getTitle, getEnd, getStart, getLocation } from "../scripts/dataHelper.js";

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
            height: 300px;
            padding: 0px 20px 20px 20px;
            width: 15%;
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

          article h1 {
            color: #000;
            text-align: center;
          }

          article img {
            display: block;
            margin-left: auto;
            margin-right: auto;

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
            event dates
            event location
            button to view event
        */

        const eventImg = document.createElement("img");
        // Call getImg via dataHelper when correctly implemented
        eventImg.src = "../images/Clueless.png"; 
        eventImg.alt = getTitle(data);
        card.appendChild(eventImg);

        const eventTitle = document.createElement("h1");
        eventTitle.classList.add("title");
        eventTitle.textContent = getTitle(data);
        card.appendChild(eventTitle);
        
        const eventDates = document.createElement("p");
        eventDates.classList.add("dates");
        eventDates.textContent = getStart(data) + ' ' + getEnd(data);
        card.appendChild(eventDates);
        
        const eventLocation = document.createElement("p");
        eventLocation.classList.add("location");
        eventLocation.textContent = getLocation(data);
        card.appendChild(eventLocation);

        const viewButton = document.createElement("button");
        viewButton.textContent = "View Event";
        card.appendChild(viewButton);
        
        this.shadow.appendChild(styleElem);
        this.shadow.appendChild(card);
    }
}

customElements.define('event-card', EventCard);