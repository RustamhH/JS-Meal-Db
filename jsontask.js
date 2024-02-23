

// TASK 1

// let img=document.getElementById("mealimg");
// let name=document.getElementById("mealname");
// let button=document.getElementById("btn").addEventListener("click",async()=>{
//     let object=await fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()).then(data=>data.meals[0]);
//     img.src=object.strMealThumb;    
//     name.innerHTML=object.strMeal;
// })




// TASK 2

// let img=document.getElementById("mealimg");
// let video=document.getElementById("mealvideo");
// let name=document.getElementById("mealname");
// video.style.border="none";
// let button=document.getElementById("btn").addEventListener("click",async()=>{
//     let object=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name.value}`).then(response=>response.json()).then(data=>data.meals[0]);
//     video.style.border="1px solid";
//     img.style.width="460px";
//     img.style.height="300px";
//     img.style.objectFit="cover";
//     img.src=object.strMealThumb;
//     video.src=`https://www.youtube.com/embed/${object.strYoutube.slice(-11)}`;
// })