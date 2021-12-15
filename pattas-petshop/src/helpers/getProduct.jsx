const product = [
    { id: 1,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/253744817_4527566267321697_6500068600605912287_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEQ7dQ-MFNPQITSrptizzop1Y9j7-J08vXVj2Pv4nTy9UoXEnCZLyArJNMFbnfEl8nc9OkVZbNLf2IsUCCBb6wb&_nc_ohc=sJW2pZ5RkmQAX8_oyiX&_nc_ht=scontent.faep35-1.fna&oh=4eabca60e6260ab5241b7a41cea3f63d&oe=61B86B32' ,categoria: 'Remeras', name: "Remeras personalizadas"}
];

const getProduct = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(product);
    }, 2000);
}) 

export default getProduct;