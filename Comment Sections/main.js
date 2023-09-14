var array = [
    {
        img: "./Assets/103335139.jpg",
        name: 'Khizer Ali',
        time: '1 month ago',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    },{
        img: "./Assets/103335139.jpg",
        name: 'Hamza ',
        time: '2 month ago',
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
    }
]


document.addEventListener('DOMContentLoaded', function () {
    var name1 = document.querySelector('.mainTitle');
    var main = document.querySelector('.main')
    for(i=0; i<=array.length; i++){
        var card = document.createElement('div');
        card.className = 'card';
        // main.innerText = array[i]

        main.appendChild(card)
    
    }
    
    console.log(name);
});
