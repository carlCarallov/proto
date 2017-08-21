$('document').ready(function(){
    loadGoods();
});

function loadGoods(){
    //загрузка товаров на страницу
    
    $.getJson('goods.json', function(data){
        console.log(data);
    })
}