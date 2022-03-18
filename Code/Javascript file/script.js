fetch('https://reqres.in/api/users?page=1').then((data)=>{
   
    return data.json();

}).then((complete)=>{
    let data1="";
    complete.data.map((values)=>{
        data1+=` <div class="card">
        <img src=${values.avatar} alt="img" class="images">
        <h1 class="title">${values.first_name} ${values.last_name}</h1>
        <p class="mail">${values.email}</p>
        <p class="mail">User id ${values.id}</p>
        
    </div>`;
    });
    document.getElementById("cards").innerHTML=data1;  
}).catch((err)=>{
    console.log(err);
})