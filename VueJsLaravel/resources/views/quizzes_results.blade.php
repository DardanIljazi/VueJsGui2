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
    <main role="main" id="quizzListPage">

        <div class="container container-fluid">
            <div class="row flex-row flex-wrap">

                <div class="col-lg-12 col-md-12 mt-md-3 mt-sm-5 mt-xs-3 mt-3" v-for="(quizz, key) in quizzes">
                    <span v-if="quizz.id === '5c3f45e155a8180004b47aea'">
                        <div class="col-12 quizz-box">
                            <a href="#">
                                <div class="title-description-container">
                                    <h3 class="title">@{{ quizz.title }}</h3>
                                    {{--<h6 class="description">@{{  }}</h6>--}}
                                    <span v-for="question in quizzesQuestions">
                                        <span v-if="question.id === quizz.id">
                                            <h3>Your score is: &nbsp;@{{ trueResultsFromUser }}/@{{ question.questions.length  }}</h3>
                                        </span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </main>
@endsection

@section('footer')
    <footer>
        @include('layouts.footer')
    </footer>
@endsection

