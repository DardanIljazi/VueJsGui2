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
    <div class="mainContainer">
        <main role="main" id="quizzListPage">
            <input id="pageType" type="hidden" value="mainQuizzPage">
            @{{ actualHtmlPage }}
        </main>
    </div>
@endsection

@section('footer')
    <footer>
        @include('layouts.footer')
    </footer>
@endsection

