<script>
  import Form from './Form.svelte';
  import Nav from './Nav.svelte';
</script>

<main>
  <section class="left-screen">
    <div class="logo">
      <h1>slidedeck.<!--
      --><span>pro</span>
      </h1>
    </div>
    <Form />
  </section>
  <section class="right-screen">
    <Nav />
  </section>
</main>

<style>
  main {
    display: flex;
  }

  .left-screen {
    padding: 3.8em 0;
    flex: 1 1 52%;
  }

  .right-screen {
    padding-top: 2em;
    background-color: #fede00;
    flex: 1 1 48%;
  }

  .logo {
    margin-left: 5.6em;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }

  h1 > span {
    color: #ffffff;
    background-color: #000000;
  }

  span {
    display: inline-block;
    padding-bottom: 0.2em;
  }

  @media (max-width: 767px) {
    .right-screen {
      display: none;
    }
  }
</style>