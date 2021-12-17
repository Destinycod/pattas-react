const productos = [
    { id: 1,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/243077177_4401573763254282_1560347093517381843_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeExNcwKqsmzHcAfGIxvgC9Th3oVA6K_LUWHehUDor8tRTWrQweJ_l-EFmHumzz0nDRr1CodSHw8oXUO_bWCOrYt&_nc_ohc=qkdGLW5UuegAX8l1L8U&_nc_ht=scontent.faep35-1.fna&oh=890bbad5ec1b3a307cda1972b6aaa1d4&oe=61B79757' ,categoria: 'remeras', name: "Remeras personalizadas"},
    { id: 2,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/243077177_4401573763254282_1560347093517381843_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeExNcwKqsmzHcAfGIxvgC9Th3oVA6K_LUWHehUDor8tRTWrQweJ_l-EFmHumzz0nDRr1CodSHw8oXUO_bWCOrYt&_nc_ohc=qkdGLW5UuegAX8l1L8U&_nc_ht=scontent.faep35-1.fna&oh=890bbad5ec1b3a307cda1972b6aaa1d4&oe=61B79757' ,categoria: 'gorras', name: "Gorras personalizadas"},
    { id: 3,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/243077177_4401573763254282_1560347093517381843_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeExNcwKqsmzHcAfGIxvgC9Th3oVA6K_LUWHehUDor8tRTWrQweJ_l-EFmHumzz0nDRr1CodSHw8oXUO_bWCOrYt&_nc_ohc=qkdGLW5UuegAX8l1L8U&_nc_ht=scontent.faep35-1.fna&oh=890bbad5ec1b3a307cda1972b6aaa1d4&oe=61B79757' ,categoria: 'tazas', name: "Tazas personalizadas"},
    { id: 4,img:'https://scontent.faep35-1.fna.fbcdn.net/v/t39.30808-6/243077177_4401573763254282_1560347093517381843_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeExNcwKqsmzHcAfGIxvgC9Th3oVA6K_LUWHehUDor8tRTWrQweJ_l-EFmHumzz0nDRr1CodSHw8oXUO_bWCOrYt&_nc_ohc=qkdGLW5UuegAX8l1L8U&_nc_ht=scontent.faep35-1.fna&oh=890bbad5ec1b3a307cda1972b6aaa1d4&oe=61B79757' ,categoria: 'banners', name: "Banners personalizados"}
];

export const getFetch = new Promise((resolve)=>{
     setTimeout(()=>{
         resolve(productos)
     }, 2000)
}) 

