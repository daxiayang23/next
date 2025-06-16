const data =["images/banner.jpeg", "images/banner2.png", "images/banner3.jpeg","images/banner.jpeg"]
const swiperContainer = document.querySelector("#swiper-container")
let content = ""
const insertSwiperContainer = () => {
    data.map((item, index) => {
        content += `
            <img src='${item}' alt='${index}' />
        `
    })
    swiperContainer.innerHTML = content
}
document.addEventListener("DOMContentLoaded", () => {
    insertSwiperContainer()
})