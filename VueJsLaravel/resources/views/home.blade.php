@extends('layouts.app')

@section('title', 'Home')

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
    <main role="main" id="mainPage">
        <div class="container">
            <h1>Participate to the students and teachers quizzes</h1>
            <h4 class="subtitle mt-4">
                FastQuizz is a easy way to create, share quizzes between teachers and students.<br/>
                Subscribe now to be able to make or respond to quizzes
            </h4>

            <a href="signup">
                <button type="button" class="btn btn-lg bg-brandblue hover-lighten rounded-0 text-white mt-5">
                    Signup
                </button>
            </a>

            <a href="quizzes">
                <button type="button" class="btn btn-lg bg-light-grey hover-lighten rounded-0 text-white mt-5">
                    Try it now
                </button>
            </a>
        </div>
    </main>
@endsection

@section('footer')
    <footer>
        @include('layouts.footer')
    </footer>
@endsection
