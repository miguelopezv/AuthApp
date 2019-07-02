import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);
  profile = new BehaviorSubject<any>(null);

  private auth0Client: Auth0Client;

  config = {
    domain: 'dev-8r1le2pz.auth0.com',
    client_id: 'p2eOH58cE6UHT9L5mhScv9FWBwjY3Bf6',
    redirect_uri: `${window.location.origin}/callback`
  };

  async getAuth0Client(): Promise<Auth0Client> {
    if (!this.auth0Client) {
      this.auth0Client = await createAuth0Client(this.config);

      this.isAuthenticated.next(await this.auth0Client.isAuthenticated());

      this.isAuthenticated.subscribe(async isAuthenticated => {
        if (isAuthenticated) {
          this.profile.next(await this.auth0Client.getUser());

          return;
        }

        this.profile.next(null);
      });
    }

    return this.auth0Client;
  }
}
