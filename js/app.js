$(function () {
    var vm = new Vue({
        el: "#app",
        data: {
            obj: {
                id: 1,
                name: "Bosy",
                age: 1.8,
                nickname: "BosBos",
                img: "images/img1.jpeg"
            },
            cats: [{
                    id: 1,
                    name: "Bosy",
                    age: 1.8,
                    nickname: "BosBos",
                    img: "images/img1.jpeg"
                },
                {
                    id: 2,
                    name: "Hasle",
                    age: 1,
                    nickname: "Hero",
                    img: "images/img2.jpeg"
                },
                {
                    id: 3,
                    name: "Muzzle",
                    age: 3,
                    nickname: "Moza",
                    img: "images/img3.jpeg"
                },
                {
                    id: 4,
                    name: "Tuna",
                    age: 1.8,
                    nickname: "To To",
                    img: "images/img4.jpeg"
                }
            ]
        },
        methods: {
            sayHi: function () {
                alert("Hi");
            }
        },
        computed: {
            fullname: function () {
                return `${this.name} ${this.nickname}`;
            }
        }
    });
    $(".list-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});