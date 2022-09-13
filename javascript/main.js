
let contenedor = document.querySelector('#content') 

const getUser = async () => {
   try{
       const res = await fetch('https://randomuser.me/api/'); 
       const {results} = await res.json();
       const [user] = results;
       const {
            name:{title,first,last},
            picture:{large},
            email
       } = user;

       contenedor.innerHTML=`
           <img src="${large}" alt="Foto Usuario" width="150px">
           <p>Nombre: ${title}. ${first} ${last}</p>
           <p>Email: ${email}</p>
           `;
   }catch (e){
       console.warn(e);
   }
}