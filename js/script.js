var app = new Vue({
    el: '#app',
    data: {
        lastUserResponse : [],
        listOfUsersResponse: [],
        quizzList: {
            "id": "5c1a1e0a1b25c0003f2c872a",
            "title": "Maths Vecteurs",
            "description": "Questions sur les vecteurs",
            "questions": [
                {
                    "question": " Qu’estce qu’un vecteur ?",
                    "image": "vecteur2D.png",
                    "answers": [
                        {
                            "value": "Un chiffre",
                            "correct": "false",
                        },
                        {
                            "value": "Un segment de droite orientée",
                            "correct": "true",
                        },
                        {
                            "value": "Une surface",
                            "correct": "false",
                        }
                    ]
                },
                {
                    "question": "Qu’est-ce qu’une fonction?",
                    "image": "",
                    "answers": [                        {
                        "value": "Un nombre",
                        "correct": "false",
                    },
                        {
                            "value": "Une opération",
                            "correct": "true",
                        }
                    ]
                },
            ]
        },
        "created_by": "Steven Avelino",
        "number_participants": 28
    },
    methods: {
        takeUserResponse: function (test) {
            console.log("id");
            console.log(id);
            this.listOfUsersResponse.push({"id": test, "response": this.lastUserResponse });
            console.log("listOfUserResponse: ");
            console.log(this.listOfUsersResponse);
            // console.log("listOfUserResponse: ");
            // console.log(this.lastUserResponse);
        }
    }
})
