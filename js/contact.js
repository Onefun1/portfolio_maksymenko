// Download all

// (function() {
//   const links = [
//     "./docs/CV_Maksym_Maksymenko.pdf",
//     "./docs/CV_Maksym_Maksymenko.docx"
//   ];
//   const div = document.querySelector(".cv-block");
//   let link = document.createElement("a");
//   let span = document.createElement("span");
//   span.classList.add("text-secondary");
//   span.innerText = "Download";
//   link.setAttribute("download", "CV_Maksym_Maksymenko");
//   link.innerText = "CV (*.pdf, *.docx) ";
//   link.appendChild(span);
//   div.appendChild(link);

//   function downloadAll(urls) {
//     for (let i = 0; i < urls.length; i++) {
//       link.setAttribute("href", urls[i]);
//       link.click();
//     }
//   }
//   div.addEventListener("click", () => downloadAll(links));
// })();
