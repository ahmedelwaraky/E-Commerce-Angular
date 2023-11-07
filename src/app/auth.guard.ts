import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Replace this condition with your own logic
    const isAuthenticated =false;
    
    if (localStorage.getItem('userToken')!== null){
      return true
    }else {
      this.router.navigate(['/login'])
      return false
    }
    
    
}
}


