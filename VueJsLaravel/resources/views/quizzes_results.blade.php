<div class="container container-fluid" style="height: 100%;">
    <div class="row flex-row flex-wrap">
        <div class="col-lg-12 col-md-12 mt-md-3 mt-sm-5 mt-xs-3 mt-3" v-for="(quizz, key) in quizzes">
            {{--<span v-if="quizz.id === '5c3f45e155a8180004b47aea'">--}}
                <div class="col-12 quizz-box">
                    <div class="title-description-container justify-content-center align-items-center">
                        <h3 class="title">{{ $quizzTitle }}</h3>
                        <h3>Your score is: &nbsp;{{ $userScore }}/{{ $numberOfQuestion  }}</h3>
                    </div>
                </div>
            {{--</span>--}}
        </div>
    </div>
</div>