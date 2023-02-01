import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class NointroGuard implements CanActivate {
  
  constructor(private storage: Storage, private router: Router) {
  }

  async canActivate() {
    const intro = await this.storage.get('isIntroShowed');
    if (intro) {
      this.router.navigateByUrl('/menu/home');
      return false;

    } else {
      return true;
    }
  } 
}
