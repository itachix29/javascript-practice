






async function fetcher() {
    console.log("fetcher called");
    const USERNAME =document.getElementById("Input-js").value;
   const url =`https://api.github.com/users/${USERNAME}`;
const response = await fetch(url);
const data = await response.json();
console.log(data);
document.getElementById("display-js").innerHTML=`AvatarImage:<img src="${data.avatar_url}"> | Name: ${data.name} | Followers: ${data.followers} | Public Repos:${data.public_repos}`
}




function search(){
    const Element =document.getElementById("Search-button")
    Element.addEventListener('click',fetcher)
    console.log("search initialized");
}
search();

