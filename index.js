const Ap_y = "d_Z6tPWu1Xq7shtFmMT484McbnusTUJw0SZEl6PK4iA";

const inputsearch = document.getElementById("search-here")
const imgboxres = document.querySelector('.image-box');
 const showme = document.querySelector('.show-me');
 
 let inputdata = "";
 let pageno = "1";

 async function imagesearch(){
    inputdata = inputsearch.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageno}&query=${inputdata}&client_id=${Ap_y}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results

    if (pageno===1) {
        imgboxres.innerHTML="";
    }

    results.map((result)=> {
       const imgmodify = document.createElement('div');
       imgmodify.classList.add("inner-box");
       const image = document.createElement("img");
       image.src=result.urls.small;
       image.alt = result.alt_description;
       const imglink = document.createElement("a");
       imglink.href=result.links.html;
       imglink.target="_blank";
       imglink.textContent=result.alt_description;

       imgmodify.appendChild(image);
       imgmodify.appendChild(imglink);
       imgboxres.appendChild(imgmodify);
    });

    pageno++;

    if (pageno > 1) {
        showme.style.display = 'block';
    }
 }
 const formsearch =document.querySelector("form");
 formsearch.addEventListener("submit",(event)=>{
    event.preventDefault();
    pageno = 1;
    imagesearch();
 });

 showme.addEventListener("click",()=>{
    imagesearch();
 });