<script>
  import signUpForm from '../models/signUp';
  import pricePlans from '../models/pricePlans';
  
  export let setNextStep;

  let { info: pricePlansInfo } = pricePlans;
  let choosenPlanName = pricePlansInfo[0].name;

  const choosePricePlan = ({target}) => {
    const choosenPlanDiv = target.closest('.group__item');

    if (choosenPlanDiv) {
      choosenPlanName = choosenPlanDiv.dataset.name;

      pricePlansInfo = pricePlans.setNewPlan(choosenPlanName);
    }
  };

  const switchStep = () => {
    signUpForm.setFieldInfo({ choosenPlanName });
    setNextStep();
  };
</script>

<div class="sign-up">
  <div class="plan-group" on:click={choosePricePlan}>
    <div class="history-url">
      <span class="url__link link--active">Choose Plan</span>
      <span class="url__pointer">&gt;</span>
      <span class="url__link">Create account</span>
      <span class="url__pointer">&gt;</span>
      <span class="url__link">Complete order</span>
    </div>
    {#each pricePlansInfo as {name, description, price, styleClassName}, id (name)}
      <div class={styleClassName} data-name={name}>
        <div class="item__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <h2>{price}</h2>
      </div>
    {/each}
    <button class="next-step-btn" on:click={switchStep}>Continue</button>
  </div>
</div>

<style>
  .sign-up {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plan-group {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 75%;
    min-width: 350px;
  }

  .group__item {
    position: relative;
    margin-bottom: 0.5em;
    padding: 1.3em 3% 1.3em 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 85px;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
  }

  .group__item::before,
  .item--selected::after {
    position: absolute;
    top: calc(50% - 6px);
    left: 3%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    content: '';
  }

  .group__item::before {
    border: 2px solid #000;
  }

  .item--selected::before {
    border-color: #fede00;
  }

  .item--selected::after {
    top: calc(50% - 1px);
    left: calc(3% + 5px);
    width: 6px;
    height: 6px;
    background: #000;
  }

  .group__item:hover {
    background-color: #e6e6e6;
  }

  .next-step-btn {
    margin-top: 2em;
    width: 135px;
    height: 50px;
    background-color: #359be5;
    color: #fff;
  }

  .history-url {
    margin: 3em 0;
    width: 100%;
    align-self: flex-start;
    font-size: 1.2rem;
    text-align: justify;
  }

  .url__link, 
  .url__pointer {
    cursor: default;
    color: #808080;
  }

  .url__pointer {
    padding: 0 5%;
  }

  .link--active {
    color: #000;
    cursor: pointer;
  }

  h2, h3 {
    font-weight: 600;
  }

  @media (max-width: 767px) {
    .plan-group {
      min-width: 300px;
    }
  }
</style>