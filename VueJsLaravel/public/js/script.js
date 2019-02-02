$(function () {
    let type = $('#pageType').val();
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
            actualHtmlPage: null
        },
        beforeCreate: function () {

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

                    this.quizzesQuestions = response;
                    animateFromRightToOrigin($('.quizzContainer'), 9999);
                });
            }

        },
        methods: {
            takeUserResponse: function (answer, question, id) {
                console.log(JSON.stringify(question[0]));
                let trueResponse = false;
                if (answer["value"] == true) {
                    trueResponse = true;
                    this.numberOfGoodResponses++;
                }

                this.actualResponses["responses"] = {
                    "question": question.question,
                    "isGoodResponse": answer["value"]
                };

                if (this.questionId + 1 > question.length - 1) {
                    // Let's redirect now
                    console.log(id);
                    this.ajaxRequest = true;
                    console.log($('.quizzTitle').text());
                    // Route::get('/quizzes/finished/{quizzTitle}/{userScore}/{numberOfQuestions}', function ($quizzTitle, $userScore, $numberOfQuestion) {
                    $.get("/quizzes/finished/" + $('.quizzTitle').text() + "/" + this.numberOfGoodResponses + "/" + question.length, function (data) {
                        $("#quizzListPage").empty();
                        $("#quizzListPage").prepend(data);
                    });

                } else {
                    this.questionId++;
                }

            },

            getQuizzes: function () {
                axios.get('http://awa-quizz.herokuapp.com/api/quizzes', {
                    headers: {
                        "quizz-token": this.quizzToken
                    },
                    method: 'get',
                }).then((response) => {
                    this.quizzes = response;
                });
            }
        }
    });

    $('body').on('click', 'a.linktopage', function (e) {
        let actualLinkToPage = $(this);
        e.preventDefault();
        $('.box-container').velocity({
            translateX: "9999px",
        }, {
            /* Velocity's default options */
            duration: 1200,
            visibility: "hidden",
            display: "none",
            complete: function () {
                console.log(actualLinkToPage.attr('href'));
                window.location.href = actualLinkToPage.attr('href');
            }
        });

        $('footer').velocity({
            translateY: "500px",
        }, {
            /* Velocity's default options */
            duration: 1200,
            display: "none",
        });
    });

});
