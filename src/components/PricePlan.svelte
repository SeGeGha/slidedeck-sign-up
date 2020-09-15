<script>
  export let pricePlansInfo;
  export let setNextStep;
  export let setFieldInfo;
  let userPlan;

  const choosePricePlan = ({target}) => {
    const choosenPlanDiv = target.closest('.group__item');

    if (choosenPlanDiv) {
      userPlan = choosenPlanDiv.dataset.name;

      setFieldInfo({userPlan});

      document.querySelectorAll('.group__item').forEach((item) => {
        item.classList.remove('item--selected');
        
        if (item.dataset.name === userPlan) {
          item.classList.add('item--selected');
        }
      });
    }
  };

  const switchStep = () => {
    if (userPlan) {
      setNextStep();
    }
  };
</script>

<div class="sign-up">
  <div class="plan-group" on:click={choosePricePlan}>
    {#each pricePlansInfo as {name, description, price} (name)}
      <div class="group__item" data-name={name}>
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
    margin-top: 151px; 
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 75%;
    min-width: 350px;
  }

  .group__item {
    position: relative;
    padding: 1.3em 3% 1.3em 10%;
    margin-bottom: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 85px;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
  }

  .group__item::before {
    position: absolute;
    top: calc(50% - 6px);
    left: 3%;
    width: 12px;
    height: 12px;
    border: 2px solid #000;
    border-radius: 50%;
    content: '';
  }

  .group__item:hover {
    background-color: #e6e6e6;
  }

  .next-step-btn {
    width: 135px;
    height: 50px;
    background-color: #359be5;
    color: #fff;
  }
</style>