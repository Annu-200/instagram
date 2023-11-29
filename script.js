var arry = [{dp:"https://images.unsplash.com/photo-1625053120942-13c058603c18?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1629125972679-3ce2e5567116?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
},
{dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
story:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
},
{dp:"https://images.unsplash.com/photo-1575439462433-8e1969065df7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D//%20%20https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?auto=format&fit=crop&q=80&w=1923&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?auto=format&fit=crop&q=80&w=1923&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
story:"https://images.unsplash.com/photo-1555617171-a072c97e09a7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
},
{dp:"https://images.unsplash.com/photo-1697049938422-38f28ca41dd7?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1697049938416-21a2cebff401?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
}
];
var storiyan = document.querySelector("#storiya");
 var heading = document.querySelector("h1");
var fltter =""
arry.forEach(function(ele,idx){
   fltter += `<div class="story"><img id="${idx}" src="${ele.dp}" alt=""> </div>`;
});
 storiyan.innerHTML = fltter;
 storiyan.addEventListener("click", function(dete){
    // (arry[dete.target.id].story)\
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage =`url(${(arry[dete.target.id].story)})`;
    setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none";
    },3000)
 });

 var  con = document.querySelector("#post");
var love = document.querySelector('.ri-heart-3-fill');
 
con.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50% ,-50%) scale(1)";
    love.style.opacity ="0.8";     

    setTimeout(function(){
    love.style.opacity ="0";     
    },1000);
    setTimeout(function(){
    love.style.transform = "translate(-50% ,-50%) scale(0)";     
    },2000);
})


// https://images.unsplash.com/photo-1575439462433-8e1969065df7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D//  https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?auto=format&fit=crop&q=80&w=1923&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D