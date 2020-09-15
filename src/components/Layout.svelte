<script>
  import PricePlan from './PricePlan.svelte';
  import Form from './Form.svelte';
  import Nav from './Nav.svelte';

  let signUpStep = 2;

  const setNextStep = () => {
    signUpStep += 1;
  };
</script>

<section class="left-screen">
  <div class="logo">
    <a href="https://slidedeck.pro/">
      <img src="https://slidedeck.pro/wp-content/uploads/2020/06/slidedeck-logo-pr.png" alt="Slidedeck logo">
    </a>
  </div>
  {#if signUpStep === 1}
    <PricePlan {setNextStep} />
  {:else}
    <div class="sign-up">
      <p>Not a member? <strong>Sign up now</strong></p>
      <Form />
    </div>
  {/if}
</section>
<section class="right-screen">
  <Nav />
  <img src="https://slidedeck.pro/wp-content/uploads/2020/06/PRO-slidedeck-screen-v.jpg" alt="Screen PRO slidedeck">
</section>

<style>
  .left-screen {
    padding: 3.8em 0;
    flex: 1 1 52%;
  }

  .logo {
    padding-left: 10%;
  }

  .logo img {
    height: 35px;
  }

  .sign-up {
    padding-top: 5em;
  }

  .sign-up > p {
    padding-left: 25%;
  }

  .right-screen {
    position: relative;
    padding-top: 2em;
    flex: 1 1 48%;
    overflow: hidden;
  }

  .right-screen img {
    position: absolute;
    top: 25%;
    left: 50%;
    max-width: 1200px;
  }

  @media (max-width: 767px) {
    .right-screen {
      display: none;
    }
  }
</style>