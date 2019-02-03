@extends('layouts.app')

@section('title', 'Login')

@section('content')
    <main role="main" id="loginPage">
        <form class="form-signin">
            <img class="mb-4 text-center" src="img/LgoSml.png" alt="Logo FastQuizz">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <div class="checkbox mb-3 w-100">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg bg-brandblue hover-lighten rounded-0 text-white mt-2 btn-block" type="submit">
                Sign in
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2019 Copyright - Fast Quizz Inc.</p>
        </form>
    </main>
@endsection
