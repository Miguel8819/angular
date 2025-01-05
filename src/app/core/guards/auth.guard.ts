import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('guard')

  const router = inject(Router)
  const authservice = inject(AuthService);

  const isAuth = authservice.verifyToken()

  return isAuth || router.createUrlTree(['auth']);


  // return authservice.authUser$.pipe(
  //   map((authUser) => {
  //     if (!authUser) {  
  //       return router.createUrlTree(['auth']);
  //     }
  
  //     return true;
  //   })
  // );
};
