<div class="nav">
  <ul class="nav-group">
    <li class="nav-group__item">
      <a href="#invite">Invite colleagues</a>
    </li>
    <li class="nav-group__item item--new">
      <a href="#custom">Custom slide</a>
    </li>
    <li class="nav-group__item">
      <a href="#account">My account &or;</a>
    </li>
  </ul>
</div>

<style>
  .nav {
    display: flex;
    justify-content: center;
  }

  .nav-group {
    display: flex;
    list-style: none;
    font-size: 0.875rem;
  }

  .nav-group__item {
    position: relative;
  }

  .nav-group__item a{
    padding: 1.6em;
  }

  .item--new::after {
    position: absolute;
    top: -80%;
    right: 10%;
    padding: 0 0.5em;
    background-color: #32bd7a;
    color: #fff;
    font-size: 0.625rem;
    content: 'new';
  }

  @media (max-width: 991px) {
    .nav-group__item a{
      padding: 1.6em 1.2em;
    }
  }
</style>