
// 定义商品数据

const products = [
    {
        id:1,
        title: "创意一叶暴富毛绒钥匙扣玩偶包包挂件卡通祝福叶子抓机娃娃",
        content: "这款【创意一叶暴富毛绒钥匙扣玩偶】以“好运”、“财富”、“祝福”为核心设计理念，融合了可爱的卡通风格与实用的日常配件功能，是一款集颜值、寓意与实用于一身的潮流小物。主体造型为一片大大的卡通叶子，叶片圆润饱满，配以精致的表情图案和吉祥文字如“暴富”、“好运”、“发财”等，传递出满满的正能量与美好祝愿。采用优质短绒面料，手感柔软舒适，内里填充高弹PP棉，轻盈又有型，适合各种年龄层人群使用。",
        done: 320,
        price: "￥3.68",
        url: "media/products/1.jpg"
    },
    {
        id:2,
        title: "抱抱宝贝泡泡糖系列熊抱枕沙发靠垫毛绒玩具粉色兔子玩偶娃娃睡觉",
        content: "抱抱宝贝泡泡糖系列熊抱枕沙发靠垫毛绒玩具，带来前所未有的温馨与舒适体验。这款粉色兔子玩偶娃娃设计独特，柔软的毛绒材质让人爱不释手，仿佛一个真实的拥抱般温暖安心。无论是放置在沙发上作为装饰，还是用作睡觉时的伴侣，它都能提供极致的放松感受。精美的泡泡糖系列设计，色彩柔和，造型可爱，特别适合儿童或追求生活品质的大人。让这只粉色兔子成为您日常生活中的甜蜜伙伴，陪伴您度过每一个惬意的时光。",
        done: 1025,
        price: "￥17.10",
        url: "media/products/2.png"
    },
    {
        id:3,
        title: "仿真山羊可爱动物摆件毛绒玩具毛绒公仔山羊玩偶动物园纪念品",
        content: "这款仿真山羊可爱动物摆件，不仅是一件毛绒玩具或一个简单的毛绒公仔，它更是将动物园的奇妙与欢乐带入您家的独特纪念品。精心设计的山羊玩偶，以逼真的造型和细腻的手感，完美再现了山羊的自然风貌。每一只山羊玩偶都采用了高品质的毛绒面料，触感柔软舒适，内部填充适量的优质PP棉，既保证了玩偶的立体形态，又不失柔软性，给予人们最舒适的拥抱体验。无论是放置在客厅作为装饰，增添一份自然和谐的气息；还是置于儿童房中，成为孩子成长路上的好伙伴，这款山羊玩偶都能以其独特的魅力赢得各年龄段人群的喜爱。特别适合动物爱好者收藏或是作为赠送亲友的创意礼物。其精美的做工、可爱的外表以及对细节的关注，如逼真的耳朵、眼睛和蹄子的设计，使得这只山羊玩偶不仅仅是玩具，更是一件艺术品。让这份来自动物园的美好记忆，伴随您和您的家人度过无数温馨时光。",
        done: 320,
        price: "￥7.50",
        url: "media/products/3.jpg"
    },
    {
        id:4,
        title: "新款8寸毛绒玩具八寸黄油小熊玩偶公仔可爱",
        content: "新款8寸毛绒玩具——八寸黄油小熊玩偶公仔，以其可爱的外观和柔软的手感成为了每个孩子和童心未泯者的心头好。这款小熊玩偶采用了优质的短绒面料，手感细腻顺滑，内部填充高弹性环保PP棉，既保证了玩偶的形态美观又不失柔软舒适的拥抱体验。黄油小熊的设计灵感来源于温馨的童话故事，黄色的外观搭配上俏皮的表情，仿佛是从书中跳出的小使者，带来无尽的欢乐与温暖。无论是作为礼物送给小朋友，还是作为装饰摆放在家中或办公室，它都能增添一抹温馨的气息。让这只充满魅力的黄油小熊陪伴你，给你带来如同阳光般温暖的感受，成为生活中的甜蜜伙伴。",
        done: 646,
        price: "￥6.50",
        url: "media/products/4.jpg"
    },
    {
        id:5,
        title: "毛衣情侣泰迪熊公仔小熊玩偶哄睡布娃娃毛绒玩具送生日礼物",
        content: "这款毛衣情侣泰迪熊公仔小熊玩偶，是一款集可爱、温暖与浪漫于一体的手感佳作。每一只小熊都穿着精致的针织毛衣，呈现出温馨甜蜜的氛围，特别适合作为情侣礼物或生日惊喜。毛绒玩具采用优质短毛绒面料，触感柔软亲肤，内部填充环保PP棉，手感饱满富有弹性，无论是抱在怀中还是用来哄睡都非常舒适安心。闭着眼睛的可爱表情，仿佛进入甜美的梦乡，陪伴你每一个夜晚。送恋人，表达爱意；送朋友，传递温暖；送孩子，给予陪伴。这不仅是一个布娃娃，更是一份满载心意的温柔祝福。",
        done: 51,
        price: "￥43.5",
        url: "media/products/5.jpg"
    },
    {
        id:6,
        title: "恐龙公仔可爱霸王龙毛绒玩具儿童安抚布娃娃玩偶女生礼物",
        content: "这款恐龙公仔以可爱的霸王龙造型为设计灵感，将原本威猛的史前霸主变身成为萌趣十足的毛绒玩具。采用高品质短绒面料，手感柔软亲肤，内部填充环保PP棉，结实耐用又富有弹性，适合儿童抱在怀中或作为睡前安抚布娃娃使用。卡通化的大眼睛、圆滚滚的身体搭配短小四肢，展现出憨态可掬的模样，深受小朋友尤其是女生的喜爱。不仅是一款玩偶，更是一份陪伴成长的温暖礼物，适合生日、节日或亲子互动时光中送出，传递关爱与温情。让这只温柔又有安全感的霸王龙公仔，成为孩子童年中的亲密伙伴。",
        done: 69,
        price: "￥16.00",
        url: "media/products/6.jpg"
    },
    {
        id:7,
        title: "ins同款可爱恐龙公仔小狮子毛绒玩具软萌儿童玩偶生日礼物小号",
        content: "这款ins同款可爱恐龙公仔小狮子毛绒玩具，以软萌造型和精致细节迅速走红网络，成为众多宝妈和年轻潮人追捧的热门单品。虽然是小号尺寸，但做工毫不含糊，选用优质短绒面料，触感柔软亲肤，适合儿童抱玩、搂睡或作为日常安抚玩具。卡通化的大眼设计搭配圆润可爱的身形，展现出十足的萌趣魅力，无论是恐龙造型还是小狮子款式，都充满童趣与想象力。作为生日礼物、节日赠礼或居家装饰都非常合适，尤其受到小朋友的喜爱。小巧便携，也可挂在包包上作为潮流挂件，是亲子家庭和年轻收藏爱好者的理想之选。",
        done: 10508,
        price: "￥10.58",
        url: "media/products/7.jpg"
    },
    {
        id:8,
        title: "迪士尼正版草莓熊草莓味公仔玩具总动员玩偶毛绒玩具礼物",
        content: "迪士尼正版草莓熊公仔，源自《玩具总动员》系列，以其独特的草莓味设计和可爱的外观成为众多粉丝的心头好。这款毛绒玩具采用高品质的材料制作，柔软细腻的短绒面料带来无与伦比的手感体验，内部填充环保PP棉，既保证了玩偶的立体造型又不失其柔软性，给予每一位拥抱它的朋友以最大的舒适感。草莓熊那标志性的粉色外衣搭配上俏皮的表情，仿佛是从电影中走出来的小明星，充满了无限的魅力。无论是作为儿童节礼物、生日惊喜还是自我收藏之用，这款草莓熊都能为您的生活增添一抹甜蜜色彩，是迪士尼爱好者不可错过的经典纪念品。它不仅是玩具，更是陪伴您度过美好时光的朋友。",
        done: 10827,
        price: "￥12.63",
        url: "media/products/8.jpg"
    },
    {
        id:9,
        title: "正版赛特嘟嘟趴姿毛绒玩具带颗粒猫咪公仔玩偶可爱娃娃女生日礼物",
        content: "这款正版赛特嘟嘟趴姿毛绒玩具，以其独特的设计和超高的可爱度成为了理想的女生日礼物。它以带颗粒的短毛绒面料制作而成，不仅手感独特、舒适，而且外观上更加生动逼真，仿佛一只慵懒的小猫咪正惬意地趴着休息。赛特嘟嘟的设计灵感来源于真实的猫咪姿态，细腻的做工和精心挑选的材料使得每一个细节都栩栩如生，从精致的面部表情到柔软蓬松的尾巴，无不展现出它的独特魅力。作为玩偶，它不仅是装饰房间的理想选择，也是陪伴入睡的好伙伴。无论是送给女友、朋友还是家中的小朋友，这款趴姿猫咪公仔都能传递出温馨与爱意，成为收到礼物的人心中最特别的存在。它不仅仅是一个简单的玩偶，更是一份充满心意的礼物。",
        done: 4052,
        price: "￥22.00",
        url: "media/products/9.jpg"
    },
    {
        id:10,
        title: "卡皮巴拉鼻涕水豚公仔乌龟背包水豚毛绒玩具女生礼物",
        content: "这款卡皮巴拉（水豚）鼻涕水豚公仔，是一款别具一格的毛绒玩具，特别适合作为女生礼物。设计灵感来源于可爱慵懒的水豚形象，搭配上趣味横生的“鼻涕”细节，既增添了玩偶的独特性，又不失其萌趣本质。选用高品质的短毛绒面料制作，手感柔软顺滑，内部填充环保PP棉，确保了玩偶的饱满形态和舒适触感。此外，还特别设计了一款乌龟造型的背包，可以挂在水豚公仔身上，增加了更多的趣味性和互动性。无论是作为书包挂饰、房间装饰还是日常陪伴的小物件，这款水豚毛绒玩具都能以其独特的风格赢得喜爱。让这只充满创意与温暖的水豚成为您生活中的一抹亮色，为您带来无尽的欢乐与温馨。",
        done: 1022,
        price: "￥8.59",
        url: "media/products/10.jpg"
    },
    {
        id:11,
        title: "新款可爱大熊猫公仔定制动物可换装酷炫高端毛绒玩具站立熊猫娃娃",
        content: "新款可爱大熊猫公仔，是一款集创意与趣味于一身的高端毛绒玩具。这款站立熊猫娃娃不仅拥有憨态可掬的外表，还特别设计了可换装的功能，让您的熊猫玩偶随心变换风格，从酷炫到可爱的多种造型轻松驾驭。采用优质长绒面料制作，手感柔软细腻，仿佛真实触摸大熊猫的绒毛，内部填充适量环保PP棉，确保玩偶既饱满立体又不失柔软舒适。定制化的选项更增加了它的独特性，无论是作为礼物还是个人收藏都极具意义。每一只熊猫公仔都经过精心制作，细节处理到位，尤其是那对标志性黑眼圈，更是让人忍俊不禁。不论是儿童还是成人，都会被这份充满创意和乐趣的设计所吸引，成为家中或办公室里最引人注目的装饰品。",
        done: 6527,
        price: "￥19.00",
        url: "media/products/11.jpg",
    },
    {
        id:12,
        title: "正版可爱卡皮巴拉水豚零食抱枕玩偶娃娃机公仔布娃娃女生儿童礼物",
        content: "这款正版可爱卡皮巴拉（水豚）零食抱枕玩偶，以呆萌治愈的造型和实用的设计，成为娃娃机与礼品市场的新宠。整体采用高品质短毛绒面料，触感柔软亲肤，填充环保PP棉，手感饱满富有弹性，无论是抱着、靠着还是搂着都非常舒适。水豚形象设计灵感来源于其标志性的慵懒神态，搭配手中抱着的零食造型，展现出轻松惬意的生活趣味。适合作为女生礼物、儿童节赠礼或生日惊喜，也适合放置在家中作为软装摆件，增添一份温暖与童趣。无论是从品质还是外观来看，这款布娃娃都体现了精致做工与贴心设计的完美结合，是一份既实用又充满心意的暖心礼物。",
        done: 1875,
        price: "￥41.56",
        url: "media/products/12.jpg"
    },
    {
        id:13,
        title: "正版迪士尼萌动史迪仔玩偶公仔史迪奇星际宝贝毛绒玩具女生日礼物",
        content: "这款正版迪士尼萌动史迪仔玩偶公仔，灵感来源于经典动画《星际宝贝》中的角色史迪奇，以其独特的外星生物形象和超凡的魅力成为了理想的女生日礼物。玩偶采用高品质的短毛绒面料制作，触感柔软细腻，仿佛触摸云朵般舒适；内部填充环保PP棉，确保玩偶既保持立体形态又不失柔软性，给予每一位拥抱它的朋友以最大的安心与温暖。史迪仔标志性的大耳朵、蓝色皮肤以及机灵的大眼睛被精细地还原，每一个细节都栩栩如生，完美捕捉了原作中史迪奇的俏皮可爱。无论是作为装饰摆件增添生活趣味，还是陪伴入眠的理想伙伴，这款史迪仔毛绒玩具都能以其独特的方式传递欢乐与温馨，成为收到礼物的人心中独一无二的存在。不仅是玩具，更是承载着美好回忆的珍贵礼物。",
        done: 17962,
        price: "￥26.00",
        url: "media/products/13.jpg"
    },
    {
        id:14,
        title: "网红鸭梨毛绒玩具可爱水果黄鸭娃娃玩偶儿童抱睡安抚抱枕生日礼物",
        content: "这款网红鸭梨毛绒玩具，将可爱的黄鸭与清新的水果梨造型完美结合，成为了一款极具创意和吸引力的儿童抱睡安抚抱枕。选用柔软舒适的短毛绒面料，手感细腻顺滑，仿佛轻抚云朵般温柔；内部填充高弹性环保PP棉，确保玩偶既饱满立体又不失柔软性，给予孩子们最安心的拥抱体验。鲜明的黄色调搭配俏皮的表情设计，使得这款鸭梨娃娃不仅视觉上十分吸引人，而且充满了趣味性和亲和力。无论是作为生日礼物、节日赠礼还是日常陪伴的小物件，都能为小朋友带来无尽的欢乐与温馨。它不仅是孩子们的心爱玩伴，还能装饰房间，增添一抹活泼的气息。让这只充满创意的鸭梨毛绒玩具成为孩子童年时光中不可或缺的甜蜜伙伴。",
        done: 4256,
        price: "￥15.30",
        url: "media/products/14.jpg"
    },
    {
        id:15,
        title: "超软萌粉可爱猪猪玩偶毛绒玩具陪睡大抱枕女布娃娃睡觉猪公仔礼物",
        content: "这款超软萌粉可爱猪猪玩偶，是一款集柔软、温暖与治愈于一身的毛绒玩具，特别适合作为陪睡大抱枕使用。采用高品质短毛绒面料，手感细腻柔滑，亲肤舒适，带来如云朵般的拥抱体验；内部填充环保PP棉，饱满蓬松，既能保持完美造型，又不失柔软支撑力，是女生和小朋友理想的睡前陪伴伙伴。卡通化的大眼睛搭配粉嫩可爱的造型，尽显俏皮与甜美气质，让人一见倾心。无论是作为生日礼物、节日惊喜，还是日常安慰小物，这款猪猪布娃娃都能传递满满的温暖与爱意，为每一个夜晚增添安心与幸福感。让这只萌态十足的小猪陪你入睡，守护你的甜美梦境。",
        done: 5215,
        price: "￥10.60",
        url: "media/products/15.jpg"
    }
]

// 将数据写入网页
function writeDate(data) {
    const contentBottom = document.querySelector(".content-bottom-bottom") || ""
    data.map((item) => {
        contentBottom.innerHTML += `
            <div class="specific-product-item">
                <img src="${item.url}" alt="${item.id}" />
                <p class="product-title">
                    <a class="link-to-${item.id}" href="./pages/detail.html?id=${item.id}">${item.title}</a>
                </p>
            </div>
        `
    })
}

const laptopBar = document.querySelector(".tab-bar > div:first-child")
const chargingBar = document.querySelector(".tab-bar > div:last-child")
const laptopArea = document.querySelector(".laptop")
const chargingArea = document.querySelector(".charge-fee")

// tab bar转换效果
function switchLaptop(a1, a2, b1, b2) {
    a1.classList.remove("tab-bar-act")
    b1.classList.add("tab-bar-act")
    b2.style.display = "block"
    a2.style.display = "none"
}

// 调用函数
writeDate(products)


// 监听鼠标移入事件
chargingBar.addEventListener("mouseover", (e) => {
    switchLaptop(laptopBar, laptopArea, chargingBar, chargingArea)
})

laptopBar.addEventListener("mouseover", (e) => {
    switchLaptop(chargingBar, chargingArea, laptopBar, laptopArea)
})


// 登入退出事件
const logoutButton = document.querySelector(".logout-button")
window.addEventListener("DOMContentLoaded", (e) => {
    const username = localStorage.getItem("username") || ""
    function userLogin() {
        const loginButton = document.querySelector(".login-button")
        const registerButton = document.querySelector(".register-button")
        const usernameButton = document.querySelector(".username-button")
        loginButton.style.display = "none"
        registerButton.style.display = "none"
        usernameButton.style.display = "block"
        logoutButton.style.display = "block"
        usernameButton.innerText = username
    }
    if(username) {
        userLogin()
    }
})
logoutButton.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("username")
    location.reload()
})