$(function(){
    $('.home-slider').owlCarousel({
        margin : 30,
        
        items : 4,
        nav : true
    });




    var datas = [
        
        {
            "id":1,
            "name":"Bisiklet Yaka Düz Kısa Kollu Kadın Elbise",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Elbise/5593210/2268761",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20221/5593210/v1/l_20221-s26331z8-cvl_a.jpg",
            "price":125.99
        },
        {
            "id":2,
            "name":"StandSsart Fit Cep Detaylı Kadın Rodeo Jean Şort",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Jean-Sort/5732790/2374591",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20221/5732790/l_20221-s2ee14z8-311_a.jpg",
            "price":99.99
        },
        {
            "id":3,
            "name":"Bisiklet Yaka Nakış İşlemeli Uzun Kollu Viskon Kadın Bluz",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Bluz/4919203/1591053",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20211/4919203/v1/l_20211-s1ca24z8-lrk_a1.jpg",
            "price":64.99
        },
        {
            "id":4,
            "name":"Bisiklet Yaka Kısa Kollu Erkek Spor Tişört",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Tisort/5622474/2232459",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20212/5622474/l_20212-w1kd76z8-ffb_a.jpg",
            "price":59.99
        },
        {
            "id":5,
            "name":"Büyük Beden V Yaka Düz Kısa Kollu Pamuklu Kadın Elbise",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Elbise/5353958/1689752",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20211/5353958/v2/l_20211-s1lc50z8-cvl_a.jpg",
            "price":125.99
        },
        {
            "id":6,
            "name":"V Yaka Düz Kısa Kollu Pamuklu Hamile Elbise",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Elbise/5771510/2366533",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20221/5771510/l_20221-s2fs71z8-cvl_a.jpg",
            "price":135.99
        },
        {
            "id":7,
            "name":"Bisiklet Yaka Çizgili Kısa Kollu Kadın Elbise",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Elbise/5593222/2300514",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20221/5593222/l_20221-s26332z8-lgs_a.jpg",
            "price": 219.99
        },
        {
            "id":8,
            "name":"Büyük Beden Bisiklet Yaka Düz Kısa Kollu A Kesim Kadın Elbise",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Elbise/5377552/1688005",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20211/5377552/v3/l_20211-s1lk77z8-ufs_a.jpg",
            "price": 123.99
        },
        {
            "id":9,
            "name":"Beli Lastikli Düz Cep Detaylı Kadın Şort",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Sort/5697917/2331359",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20221/5697917/l_20221-s2ci85z8-h9g_a.jpg",
            "price": 345
        },
        {
            "id":10,
            "name":"Bisiklet Yaka Beli Kemerli Kolsuz Pamuklu Kadın Elbise",
            "url":"https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/kadin/Elbise/5088825/1832093",
            "img":"https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20211/5088825/l_20211-s1h145z8-hkd_a.jpg",
            "price": 89
        }
    ]

    function createProductHTML(product) {
        return `
            <a href="${product.url}">
                <img src="${product.img}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>Price: ${product.price} TL</p>
            </a>
        `;
    }

    $(".item").each(function(index){
        var product = datas[index];
        var productHTML = createProductHTML(product);
        
        
        $(this).append(productHTML)
    })

    
})