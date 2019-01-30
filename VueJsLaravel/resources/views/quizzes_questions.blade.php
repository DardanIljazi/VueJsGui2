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
        <div class="quizzContainer row justify-content-center justify-content-center flex-column">

            <span v-for="quizz in quizzes">
                <span v-if="quizz.id === '{{ $id }}'">

                    <div class="quizzTitle align-self-start ml-5 mt-4">@{{ quizz.title }}</div>

                    <span v-for="question in quizzesQuestions">
                        <span v-if="question.id === quizz.id">

                            <div class="quizzQuestion mb-2 align-self-center mt-5 text-center">@{{ question.questions[questionId].question  }}</div>

                            <div class="responsesContainer mt-5">
                                <div class="row">
                                    <div class="col-md col-sm  response-button text-center mt-3" v-for="answer in question.questions[questionId].answers">
                                        <div class="btn btn-primary btn-lg bg-brandblue rounded-0" :click="takeUserResponse">
                                            @{{ answer.name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </span>

                    {{--<div class="quizzImage align-self-center">--}}
                    {{--<img src="{{ asset('/img/vehicle.png') }}" alt="questionImage" class="mt-5"/>--}}
                    {{--</div>--}}

                </span>
            </span>
        </div>
    </main>
@endsection

{{--@section('footer')--}}
{{--<footer>--}}
{{--@include('layouts.footer')--}}
{{--</footer>--}}
{{--@endsection--}}

