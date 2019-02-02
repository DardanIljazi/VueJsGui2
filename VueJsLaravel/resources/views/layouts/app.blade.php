<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>FastQuizz | @yield('title')</title>

    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}"/>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
</head>
<body>
<header>
    <nav class="navbar navbar-expand-md navbar-light">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="{{ asset("img/Lgo.png") }}" alt="FastQuizz logo" id="logoMenu">
            </a>

            @yield('menu')
        </div>
    </nav>
</header>

@yield('content')
@yield('footer')

<script src="{{ asset("js/jquery.js") }}"></script>
<script src="{{ asset("js/bootstrap.js") }}"></script>
<script src="{{ asset("js/script.js") }}"></script>
<script src="{{ asset("js/velocity.min.js") }}"></script>
<script src="{{ asset("js/velocity.ui.min.js") }}"></script>


</body>
</html>
