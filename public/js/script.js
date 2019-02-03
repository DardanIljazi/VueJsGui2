$(function () {
    let type = $('#pageType').val();
    let alreadyCalledAction = false;

    if (!$('#quizzListPage').length)
        return;

    let quizzList = new Vue({
        el: '#quizzListPage',
        data: {
            questionId: 0,
            lastUserResponse: [],
            listOfUsersResponse: [],
            actualResponses: {},
            lastQuestionId: "",
            numberOfGoodResponses: 0,
            quizzes: {},
            quizzesQuestions: {},
            quizzToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc',
            actualHtmlPage: null,
            isApiDataLoaded: false,
        },
        beforeCreate: function () {
            this.loading = true;
        },
        created: function () {
            this.loading = true;
            if (type === "quizzes") {
                // Let's do it axios !
                this.getQuizzes();
            } else if (type === "questions") {
                this.getQuizzes();
                let quizzId = $('#quizzId').val();
                console.log('http://awa-quizz.herokuapp.com/api/quizzes/' + quizzId);
                axios.get('http://awa-quizz.herokuapp.com/api/quizzes/' + quizzId, {
                    headers: {
                        "quizz-token": this.quizzToken
                    },
                    method: 'get',
                }).then((response) => {
                    console.log(response);

                    this.quizzesQuestions = response;
                });
            }
        },
        methods: {
            takeUserResponse: function (answer, question, id) {
                let parent = this;
                let trueResponse = false;
                if (answer["value"] == true) {
                    trueResponse = true;
                    this.numberOfGoodResponses++;
                }

                $('.questionAndResponsesContainer').velocity(
                    "fadeOut"
                    , {
                        duration: 125,
                        easing: "easeInOutQuart",
                        delay: 20
                    });
                setTimeout(function(){
                    if (parent.questionId + 1 > question.length - 1) {
                        // Let's redirect now
                        this.ajaxRequest = true;
                        $.get("/quizzes/finished/" +
                            $('.quizzTitle').text() + "/" +
                            parent.numberOfGoodResponses + "/" +
                            question.length, function (data) {

                            $("#quizzListPage").empty();
                            $("#quizzListPage").prepend(data);
                        });
                    } else {
                        parent.isApiDataLoaded = true;
                        parent.questionId++;
                    }
                }, 200);

                setTimeout(function() {
                    $('.questionAndResponsesContainer').velocity(
                        "fadeIn"
                        , {
                            duration: 125,
                            easing: "easeInOutQuart",
                            delay: 0
                        });
                }, 200);

            },

            getQuizzes: function () {
                axios.get('http://awa-quizz.herokuapp.com/api/quizzes', {
                    headers: {
                        "quizz-token": this.quizzToken
                    },
                    method: 'get',
                }).then((response) => {
                    let parent = this;
                    this.quizzes = response;
                    parent.isApiDataLoaded = true;
                    zoomIn($('.icon-spinner-2'), 'in');

                    setTimeout(function () {
                        zoomIn($('.quizz-box'), 'in');
                    }, 250);

                });
            }
        }
    });

    $('body').on('click', 'a.linktopage', function (e) {
        let actualLinkToPage = $(this);
        if (alreadyCalledAction)
            return;
        else
            alreadyCalledAction = true;

        e.preventDefault();
        setTimeout(function(){
            $('#quizzListPage .container').velocity({
                translateX: $( window ).width() + 200 +  "px",
            }, {
                /* Velocity's default options */
                duration: 800,
                visibility: "hidden",
                display: "none",
                complete: function () {
                    alreadyCalledAction = false;
                    setTimeout(function(){
                        window.location.href = actualLinkToPage.attr('href');

                    }, 200);
                }
            });

            $('footer').velocity({
                translateY: "500px",
            }, {
                /* Velocity's default options */
                duration: 1200,
                display: "none",
            });
        }, 0);
    });

    function zoomIn(e, inOut) {
        var aniIN = {opacity: [1, 0.5], scale: [1, 0.8]};
        var opt1 = {duration: 350, easing: "easeInOutQuad"};

        if (inOut == 'in') {
            e.css('opacity', '0').velocity(aniIN, opt1);
        }
    }

});
