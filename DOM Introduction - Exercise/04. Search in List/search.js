function search() {
   const listOnTowns = Array.from(document.querySelectorAll("ul li"));
   const searchContent = document.getElementById("searchText").value;
   let counter = 0;

   for (const el of listOnTowns) {
      const text = el.textContent;

      if (text.includes(searchContent)) {
         el.style.textDecoration = "underline";
         el.style.fontWeight = "bold";
         counter++;
      } else {
         el.style.textDecoration = "none";
         el.style.fontWeight = "normal";
      }
   }

   document.getElementById("result").textContent = `${counter} matches found`;
}