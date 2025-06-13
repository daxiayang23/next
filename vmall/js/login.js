
// 定义用户数据

const users = [
    {
        id:1,
        avatar: "",
        username: "张三",
        password: "123",
        address: "北京市海淀区",
        interest: ["打三角洲", "吃鸡", "玩王者荣耀"]
    },
    {
        id:2,
        avatar: "",
        username: "李四",
        password: "123",
        address: "上海市闵行区",
        interest: ["逛街", "吃零食", "追剧", "聊八卦"]
    }
]

const formData = document.querySelector(".login-form")
formData.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = formData.username.value
    const password = formData.password.value
    const user = users.find(user => user.username === username)
    if(user && user.password === password) {
        localStorage.setItem("username", username)
        alert(`欢饮您，${username}`)
        location.href = "../index.html"
    } else {
        alert("用户名或者密码错误, 请重新输入")
    }
})