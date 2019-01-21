@extends('layouts.app')

@section('title', 'Subscription')

@section('content')
    <main role="main" id="loginPage">
        <form class="form-signin">
            <img class="mb-4 text-center" src="img/LgoSml.png" alt="Logo FastQuizz">
            <h1 class="h3 mb-3 font-weight-normal">Register now</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>

            <label for="inputPseudo" class="sr-only">Pseudo</label>
            <input type="text" id="inputPseudo" class="form-control rounded-0" placeholder="Pseudo" required autofocus>

            <label for="inputFirstName" class="sr-only">First name</label>
            <input type="text" id="inputFirstName" class="form-control rounded-0" placeholder="First name" required
                   autofocus>

            <label for="inputLastName" class="sr-only">Last name</label>
            <input type="text" id="inputLastName" class="form-control rounded-0" placeholder="Last name" required autofocus>

            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control rounded-0" placeholder="Password" required>

            <label for="inputPasswordConfirm" class="sr-only">Re-enter password</label>
            <input type="password" id="inputPasswordConfirm" class="form-control" placeholder="Re-enter password" required>

            <button class="btn btn-lg bg-light-blue hover-lighten rounded-0 text-white mt-2 btn-block" type="submit">
                Register
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2019 Copyright - Fast Quizz Inc.</p>
        </form>
    </main>

    <script>
        var password = document.getElementById("inputPassword")
            , confirm_password = document.getElementById("inputPasswordConfirm");

        function validatePassword() {
            if (password.value != confirm_password.value) {
                inputPasswordConfirm.setCustomValidity("Please Match Passwords!");
            } else {
                inputPasswordConfirm.setCustomValidity('');
            }
        }

        inputPassword.onchange = validatePassword;
        inputPasswordConfirm.onkeyup = validatePassword;
    </script>
@endsection


