<div class="quizzContainer  justify-content-center justify-content-center flex-column">
    <div class="quizzTitle align-self-start ml-5 mt-4">{{ $quizzTitle }}</div>
    <div class="quizzQuestion mb-2 align-self-center mt-5 text-center">
        Your score is: &nbsp;{{ $userScore }} /{{ $numberOfQuestion  }}
    </div>
    <div class="responsesContainer mt-5 container">
        <div class="row">
            <div class="col-md col-sm  response-button text-center mt-3" v-for="answer in question.questions[questionId].answers">
                <a href="/quizzes">
                    <div class="btn btn-primary btn-lg bg-brandblue rounded-0">
                        Return to quizzes page
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>