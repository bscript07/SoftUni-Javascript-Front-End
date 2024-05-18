function create(words) {
   
   const content = document.getElementById("content");

   words.forEach(word => {
      const div = document.createElement("div");
      const p = document.createElement("p");

      p.style.display = "none";
      p.textContent = word;

      div.addEventListener('click', onClick);
      div.appendChild(p);
      content.appendChild(div);
   });

   function onClick(event) {
      const div = event.currentTarget;
      const p = div.children[0];
      p.style.display = "block";
   }
}