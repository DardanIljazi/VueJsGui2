let quizzList = new Vue({
    el: '#quizzListPage',
    data: {
        questionId: 0,
        lastUserResponse: [],
        listOfUsersResponse: [],
        actualResponses: {},
        lastQuestionId: "",
        numberOfGoodResponses: 0,

        quizzes: [
            {
                "title": "Quizz Géométrie",
                "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
                "description": "Questions sur les formes et volumes",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 0,
                "id": "5c4592fb28a39b00045f1945"
            },
            {
                "title": "Quizz Web Bases",
                "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
                "description": "Questions de base sur le développement web",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 2,
                "id": "5c4592fb28asda39b00045f1945"
            },
            {
                "title": "Quizz Géométrie",
                "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
                "description": "Questions sur les formes et volumes",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 0,
                "id": "5c3f45e155a8180004b47aeeasda"
            },
            {
                "title": "Quizz Web Bases",
                "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
                "description": "Questions de base sur le développement web",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 2,
                "id": "5c4592fb2asd8a39b00045f1945"
            },
            {
                "title": "Quizz Géométrie",
                "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
                "description": "Questions sur les formes et volumes",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 0,
                "id": "5c3f45e155a8180004asdb47aea"
            },
            {
                "title": "Quizz Web Bases",
                "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
                "description": "Questions de base sur le développement web",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 2,
                "id": "5c4592asdfb28a39b00045f1945"
            },
            {
                "title": "Quizz Géométrie",
                "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
                "description": "Questions sur les formes et volumes",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 0,
                "id": "5c3f45e155a818asd0004b47aea"
            },
            {
                "title": "Quizz Web Bases",
                "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
                "description": "Questions de base sur le développement web",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 2,
                "id": "5c4592fb28aasd39b00045f1945"
            },
            {
                "title": "Quizz Géométrie",
                "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
                "description": "Questions sur les formes et volumes",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 0,
                "id": "5c3f45e155aasd8180004b47aea"
            },
            {
                "title": "Quizz Web Bases",
                "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
                "description": "Questions de base sur le développement web",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 2,
                "id": "5c4592fasdb28a39b00045f1945"
            },
            {
                "title": "Quizz Géométrie",
                "image": "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
                "description": "Questions sur les formes et volumes",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 0,
                "id": "5c3f45e155aasd8180004b47aea"
            },
            {
                "title": "Quizz Web Bases",
                "image": "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
                "description": "Questions de base sur le développement web",
                "created_by": {
                    "id": "5c3ef507ae97ab0004daad7c",
                    "username": "amr"
                },
                "number_participants": 2,
                "id": "5c4592fasdb28a39b00045f1945"
            }
        ],

        quizzesQuestions: [
            {
                "id": "5c3f45e155a8180004b47aea",
                "title": "Quizz GÃ©omÃ©trie",
                "description": "Questions sur les formes et volumes",
                "created_by": "amr",
                "questions": [
                    {
                        "id": "5c3f0c696f912a0004c01251",
                        "question": "Combien de cÃ´tÃ©s possÃ¨de un cube",
                        "image": "test.png",
                        "answers": [
                            {
                                "name": "Quatre",
                                "value": "false"
                            },
                            {
                                "name": "Six",
                                "value": "true"
                            }
                        ]
                    },
                    {
                        "id": "5c3f0c346f912a0004c01250",
                        "question": "Combien de cÃ´tÃ©s possÃ¨de une pyramide",
                        "image": "test.png",
                        "answers": [
                            {
                                "name": "Quatre",
                                "value": "true"
                            },
                            {
                                "name": "Cinq",
                                "value": "false"
                            },
                            {
                                "name": "Six",
                                "value": "false"
                            },
                            {
                                "name": "Sept",
                                "value": "false"
                            }
                        ]
                    },
                    {
                        "id": "5c3f0bd46f912a0004c0124e",
                        "question": "Combien de sommets possÃ¨de un dodecaÃ¨dre",
                        "image": "test.png",
                        "answers": [
                            {
                                "name": "12",
                                "value": "false"
                            },
                            {
                                "name": "18",
                                "value": "false"
                            },
                            {
                                "name": "20",
                                "value": "true"
                            },
                            {
                                "name": "24",
                                "value": "false"
                            }
                        ]
                    },
                    {
                        "id": "5c3f0be56f912a0004c0124f",
                        "question": "Combien de sommets possÃ¨de un cube",
                        "image": "test.png",
                        "answers": [
                            {
                                "name": "4",
                                "value": "false"
                            },
                            {
                                "name": "6",
                                "value": "false"
                            },
                            {
                                "name": "8",
                                "value": "true"
                            },
                            {
                                "name": "12",
                                "value": "false"
                            }
                        ]
                    }
                ],
                "number_participants": 0
            },
            {
                "id": "5c4592fb28a39b00045f1945",
                "title": "Quizz Web Bases",
                "description": "Questions de base sur le dÃ©veloppement web",
                "created_by": "amr",
                "questions": [
                    {
                        "id": "5c45922628a39b00045f1944",
                        "question": "CSS est l'abrÃ©viation de Computed Style Sheets",
                        "image": "test.png",
                        "answers": [
                            {
                                "name": "vrai",
                                "value": "false"
                            },
                            {
                                "name": "faux",
                                "value": "true"
                            }
                        ]
                    },
                    {
                        "id": "5c45911328a39b00045f1943",
                        "question": "Quelle est l'extension de fichier de type image ?",
                        "image": "test.png",
                        "answers": [
                            {
                                "name": "xls",
                                "value": "false"
                            },
                            {
                                "name": "png",
                                "value": "true"
                            },
                            {
                                "name": "zip",
                                "value": "false"
                            }
                        ]
                    }
                ],
                "number_participants": 2
            }
        ]
    },
    mounted: function(){

    },
    methods: {
        takeUserResponse: function (answer, question, id) {
            console.log(JSON.stringify(question[0]));
            let trueResponse = false;
            if(answer["value"] === "true"){
                trueResponse = true;
                this.numberOfGoodResponses++;
            }

            this.actualResponses["responses"] = {"question":  question.question, "isGoodResponse": (answer["value"] === "true")};

            if(this.questionId+1 > question.length-1) {
                // Let's redirect now
                console.log(id);
                this.ajaxRequest = true;
                console.log($('.quizzTitle').text());
                // Route::get('/quizzes/finished/{quizzTitle}/{userScore}/{numberOfQuestions}', function ($quizzTitle, $userScore, $numberOfQuestion) {
                $.get( "/quizzes/finished/" + $('.quizzTitle').text() + "/" + this.numberOfGoodResponses + "/" + question.length, function( data ) {
                    $("#quizzListPage").empty();
                    $("#quizzListPage").prepend(data);
                });

            }else {
                this.questionId++;
            }

        }
    }
});

