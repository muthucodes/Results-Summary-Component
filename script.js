"use strict";

const categoryWiseScoresContainer = document.querySelector(
  ".category-wise-scores"
);

window.addEventListener("load", (event) => {
  console.log("page loaded");
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        console.log(item);

        const html = `
          <li
          style="background-color: ${item.backgroundColor}"
          class="category-wise-score"
          >
            <div class="icon-and-category">
              <img src="${item.icon}" alt="" />
              <div style="color: ${item.color}" class="category">
              ${item.category}
              </div>
            </div>

            <div class="category-score"><span>${item.score}</span> / 100</div>
          </li>
        `;
        categoryWiseScoresContainer.insertAdjacentHTML("beforeend", html);
      });
    });

  //   data.forEach((item) => {
  //     console.log(item);
  //   });

  //   categoryWiseScoresContainer.insertAdjacentElement("beforeend", html);
});
