@if(count($menus)>0)

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseFastQuizzMenu"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
@endif

<div class="collapse navbar-collapse" id="collapseFastQuizzMenu">
    <ul class="navbar-nav ml-auto">
        @yield('menu-list')
    </ul>
</div>
