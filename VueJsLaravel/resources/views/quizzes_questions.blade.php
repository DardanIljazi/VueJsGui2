@extends('layouts.app')

@section('title', 'Quizzes')

@section('menu')
@section('menu-list')
    @foreach($menus as $menu => $link)
        <li class="nav-item">
            <a class="nav-link text-dark" href="{{ $link }}">{{ $menu }}</a>
        </li>
    @endforeach
@endsection
@include('layouts.menu')
@endsection

@section('content')
    <main role="main" id="quizzListPage" class="questions">
        <input id="pageType" type="hidden" value="questions" />
        <input id="quizzId" type="hidden" value="{{ $id }}" />
        <div class="quizzContainer  justify-content-center justify-content-center flex-column">

            <template v-for="quizz in quizzes.data.quizzes">

                <template v-if="quizz.id === '{{ $id }}'">
                    <div class="quizzTitle align-self-start ml-5 mt-4">@{{ quizz.title }}</div>
                    <template v-for="question in quizzesQuestions">

                        <template v-if="question.id === quizz.id">
                            <div class="quizzQuestion mb-2 align-self-center mt-5 text-center">@{{ question.questions[questionId].question  }}</div>
                            <div class="responsesContainer mt-5 container">
                                <div class="row">
                                    <div class="col-md col-sm  response-button text-center mt-3" v-for="answer in question.questions[questionId].answers">

                                        <div class="btn btn-primary btn-lg bg-brandblue rounded-0" v-on:click="takeUserResponse(answer, question.questions, '{{ $id }}')">
                                            @{{ answer.name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </template>
                </template>
            </template>
        </div>
    </main>
@endsection


