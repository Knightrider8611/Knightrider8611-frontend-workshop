export default async function userLogin(userEmail:string,userPassword:string){
    const response = await fetch("http://localhost:5000/api/v1/auth/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            email:userEmail,
            password:userPassword
        })
    })
    if(!response.ok){
        throw new Error ("Failed to login");
    }
    return await response.json();
}