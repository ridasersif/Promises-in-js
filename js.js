function getUsersUsingAxios(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response)
        document.getElementById('users').innerHTML=""
        for(user of response.data){
             users.innerText+=`
          
           ${user.name}
            ${user.email}
           
            `
        }

    })
}

function getPostesAxios(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        console.log(response)
    })
}
getPostesAxios()
getUsersUsingAxios()


jkbcbndkcb 