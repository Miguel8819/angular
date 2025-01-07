import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard: CanDeactivateFn<unknown> = (
  component, 
  currentRoute, 
  currentState, 
  nextState) => {
  console.log('unsaved changed')
  return true;
};
