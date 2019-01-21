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

                <div class="col-lg-3 col-md-6 mt-md-3 mt-sm-5 mt-xs-3 mt-3" v-for="quizz in quizzes">
                    <div class="col-12 quizz-box">
                        <a href="#">
                            <div class="title-description-container">
                                <h3 class="title">@{{ quizz.title }}</h3>
                                <h6 class="description">@{{ quizz.description }}</h6>
                            </div>
                            <button type="button" class="bottom-button text-light text-center">Start</button>
                        </a>
                    </div>
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

