const productos = [
    { id: 1,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/253744817_4527566267321697_6500068600605912287_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEQ7dQ-MFNPQITSrptizzop1Y9j7-J08vXVj2Pv4nTy9UoXEnCZLyArJNMFbnfEl8nc9OkVZbNLf2IsUCCBb6wb&_nc_ohc=sJW2pZ5RkmQAX8_oyiX&_nc_ht=scontent.faep35-1.fna&oh=4eabca60e6260ab5241b7a41cea3f63d&oe=61B86B32' ,categoria: 'Remeras', name: "Remeras personalizadas"},
    { id: 2,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/251201216_4519493924795598_3900419702547546624_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHDeyprOOpfq0l3of8cZBqBLbLpN_nKAuwtsuk3-coC7E23adN9974-yG-YD1_p7amea8gvSYZLEIZWVQPAUQQN&_nc_ohc=_S1TpAzYIIUAX8-TTLD&_nc_ht=scontent.faep35-1.fna&oh=d5ad79c40b158d224fb909cb73a22956&oe=61B7D60B' ,categoria: 'Gorras', name: "Gorras personalizadas"},
    { id: 3,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/251408573_4515856078492716_8533789447190088774_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeH_VzFliCiGaKsS-Kd50pBgVZHsYZrNC2BVkexhms0LYIZQWQwh6gjEpPucSDrP4frGUbvJBQ_NoNTAS7tOmmAy&_nc_ohc=qUKD1u5hZzsAX-TB6oY&_nc_ht=scontent.faep35-1.fna&oh=00_AT-q6cUyPFdhjUPvL8cl5BoAX8yxxvYgIXNTsqEu_CPZkw&oe=61B86C0F' ,categoria: 'Tazas', name: "Tazas personalizadas"},
    { id: 4,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/243077177_4401573763254282_1560347093517381843_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeExNcwKqsmzHcAfGIxvgC9Th3oVA6K_LUWHehUDor8tRTWrQweJ_l-EFmHumzz0nDRr1CodSHw8oXUO_bWCOrYt&_nc_ohc=qkdGLW5UuegAX8l1L8U&_nc_ht=scontent.faep35-1.fna&oh=890bbad5ec1b3a307cda1972b6aaa1d4&oe=61B79757' ,categoria: 'Banners', name: "Banners personalizados"}
];//

export const getFetch = new Promise((resolve)=>{
     setTimeout(()=>{
         resolve(productos)
     }, 2000)
}) 

