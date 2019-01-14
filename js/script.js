let app = new Vue({
    el: '#app',
    data: {
        lastUserResponse : [],
        listOfUsersResponse: [],
        indexQuestionInQuizzList: 0,
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
                    "answers": [
                        {
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
        takeUserResponse: function (id) {
            console.log("id");
            console.log(id);
            this.listOfUsersResponse.push({"id": id, "response": this.lastUserResponse });
            console.log("listOfUserResponse[id,response]: ");
            console.log(this.listOfUsersResponse[this.listOfUsersResponse.length-1].id + "," + this.listOfUsersResponse[this.listOfUsersResponse.length-1].response);
            this.indexQuestionInQuizzList += 1;
            console.log(this.indexQuestionInQuizzList);
        }//,
         // loadQuestionAndResponsesFor: function(index){
         //
         // },
         // mounted: function() {
         //     this.loadQuestionAndResponsesFor(this.indexQuestionInQuizzList);
         // },

    }
})
