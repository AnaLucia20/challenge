const PrDashboard = (function () {

    const methods = {
        makeCarousel: function () {
            $('.carousel').slick({
                slidesToShow: 1,
                dots: true,
                centerMode: false,
            });
        },
        getInfo: function () {
            $.ajax({
                url: 'https://reqres.in/api/users?page=1',
                success: function (response) {
                    response.data.map((user) => {
                        const container = document.getElementById('people');
                        container.innerHTML = '';
                        for (let index = 0; index < response.data.length; index++) {
                            const element = response.data[index];
                            container.innerHTML += `
                                <div class="people_box">
                                    <img class="people_img" src="${element.avatar}" alt="">
                                    <p class="people_text">${element.first_name} ${element.last_name}</p>
                                </div> 
                            `
                        }
                    })
                },
                error: function () {
                    console.log("No se ha podido obtener la información");
                }
            });
        }
    }

    const initialize = function () {
        methods.makeCarousel();
        methods.getInfo();
    };

    return {
        init: initialize
    };

})();

PrDashboard.init();