let card=()=>{
    let row=document.getElementById('cardlist');
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((getdata)=>{
        getdata.map((e)=>{
                    let card=document.createElement('div')
                    card.setAttribute('id','card')
                    let img = document.createElement('img')
                    img.setAttribute('src',e.image)
                    let title=document.createElement('h4')
                    title.innerHTML=e.title
                    let cate=document.createElement('p')
                    cate.innerText=e.category
                    let price=document.createElement('p')
                    price.innerText=e.price+'$'
                    card.append(img,title,cate,price)
                    row.appendChild(card)
                })
              
              

            });
}
card()