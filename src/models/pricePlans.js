import { DEFAULT_PLAN_CLASS, SELECTED_PLAN_CLASS } from '../constants/className';
import pricePlansInfo from '../configs/pricePlans';

const defaultPlanId = 0;

const updateStyleClass = (choosenPlanId, currentPlan, currentPlanId) => {
  currentPlan.styleClassName = (currentPlanId === choosenPlanId) ? `${DEFAULT_PLAN_CLASS} ${SELECTED_PLAN_CLASS}` : DEFAULT_PLAN_CLASS;

  return currentPlan;
};

export default {
  info: pricePlansInfo.map((plan, id) => updateStyleClass(defaultPlanId, plan, id)),
  setNewPlan(newPlanName) {
    const choosenPlanId = this.info.findIndex((plan) => plan.name === newPlanName);

    this.info = this.info.map((plan, id) => updateStyleClass(choosenPlanId, plan, id));

    return this.info;
  },
};
