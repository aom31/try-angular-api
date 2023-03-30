import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AddressInfo,Customer } from './test-request-get';
import { ResponseCustomerByBranch } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss']
})
export class TestRequestGetComponent implements OnInit{
  
  public customerList: Customer[] = [];
  

  public customerAddressDropdown: AddressInfo[] = [];

  constructor(private http: HttpClient) { }
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization' : 'bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJBZFVzZXJJZCI6IlRCVEVNUDIiLCJFbXBsb3llZUlkIjoiVEJURU1QMiIsIkVtcGxveWVlVGFnIjoiSjI2MzgzIiwiRmlyc3ROYW1lIjoiRGV2ZWxvcGVyIDIiLCJMb2NhbEZpcnN0TmFtZSI6IuC4meC4seC4geC4nuC4seC4kuC4meC4suC4o-C4sOC4muC4miAyIiwiTGFzdE5hbWUiOiJSZWdpb24zYW5kNyIsIkxvY2FsTGFzdE5hbWUiOiLguKDguLLguITguKrguLLguKHguYHguKXguLDguYDguIjguYfguJQiLCJDb21wYW55Q29kZSI6IjYyMDAiLCJQZXJtaXNzaW9ucyI6eyJBcHByb3ZlRG9jdW1lbnQiOnRydWUsIkNhbmNlbERvY3VtZW50Ijp0cnVlLCJDcmVhdGVEb2N1bWVudCI6dHJ1ZSwiUmVhZERvY3VtZW50cyI6dHJ1ZSwiUmVqZWN0RG9jdW1lbnQiOnRydWUsIlVwZGF0ZUFueURvY3VtZW50Ijp0cnVlLCJVcGRhdGVVc2VyUm9sZVBlcm1pc3Npb24iOnRydWV9LCJpc3MiOiJodHRwczovL2xvZ2lzdGljc2V4ZWN1dGlvbmRldi50aGFpYmV2YXBwLmNvbSIsInN1YiI6IjIxNTkzOCIsImF1ZCI6WyJodHRwczovL2xvZ2lzdGljc2V4ZWN1dGlvbmRldi50aGFpYmV2YXBwLmNvbS9hcGkvdjAvb3RjaW50ZXJmYWNlIiwidXNlcnMiXSwiZXhwIjoxNjgwMTcxODM4LCJpYXQiOjE2ODAxNzAwMzh9.inusyD9a4pF_mUpLzQpzQDQ8W3duc2Zo6rulKS6DpGGw1YiiJYvIPcssTwfSu-XiPLPPm02IjEUNteOvTrJZ_nKxepQY1vRsbBf7T2EXFx2l_TVhyFDPUHxoBMC4jTrxxAdZcNbPxTYU7MoKe_KwHO27L3Wq8XEfO0hfKw5jlrP2SQ07oDqQebyd0lwiRondFDrZaJKG2TPt0HyPbfezgnFLe848oWUQN-hhDrgpWcdjM32jkNrJkTNrCghQX29fmbKmPmTFH1M9M77zd4QjqQkvj25AhhQzmL_bxXfMHOL2IKflQSf5R8MPsKvxvAiYGxr7GOlrL25COqoTglcqmI5-hapSoWAZaBbkSHX_lY9AUg-ifN_8AXtshAgI5EnF1dE8VY0INxuvb627SHKQqxBXIDAXrnMp18Y6Ursrl6MShN1IRVKDr1zYcNk6h-nvvp9wdrONtAzB_VxdSEBHOMl1K363OYhoBwbK_32giTp7ML5Z22ypUYpE5cdPKxb1_kG_Zc3_BnqZTWojDtj3reWdDbpNvlbNuRlZqDE5CA6-UNjJlMrP27Rj8FXAuEHbTXxLDu-GxA5CizWTJTcmsQWhr3lSeV6ikgMqGwqNe2qKAbq7QpYn5B6tpULL7uk9XWpK6mKlnxbhmCic3A_UGTeSNQc46S-LvOvKW5LpeacSRMkFvpZ8kyl3fYDc9rNgAcxToqg6OoL6F_XSIfff6CrGig4HKTstyxAWMjduTwPazGg8dJV7y09oUpFu1GCL3qs79wKsO6xjyFZr0OYS4ACvOQVoviec0-L2JDJmNpEW8KOS6YPVGCj95r7P1uggZq9zu-Q9x6Zkyqe3eSH4_P-uu-gWVqj1Ba8aauzxI9tKco-Xj4Ej_B7RcGriYR3pU-xESqON9p5RGxK34sjnua2TTJMjTUzjYz1WW06E_lUo7H_URFDtnO4coVu1NExWXyrEUt3PXbggGyeTa1neKJ3rtpuWcON-666rrQK06D1mXlYT8SGYjuxAh1DR8GRyaq7Es6Eg4e6b3szJVGu5QJw8DPM2NsVzwYAKJ0vrP51hkmxZTFGVhXbHy1oM1BaxEBgMFIfVKkI7JoPmx9My3VzQmbJIID3E96vf3y7aym0vs1gBaUX6NijiaTKGv7-xRTTVefFe8nCbPDAum0Bo7RqffX3x9soA6Us5URhA16jF-aSG0H71I3MzVYX544mmauZJLI8x-XDMUcGvJMo8gFxeV60c-1gLpJKa-whzVWAzO7Mf9HS06nw9uhQlQxd32o-jvoBcCVn2Tiut-TiQFK1g8jaDeXqbTr8cTdpNhMnOYg78r8wI8ewbFVP298ABvEUcKoR87pG94nXNckRV-Q'
    })
  };
  api = "https://logisticsexecutiondev.thaibevapp.com/api/v0/otcinterface/customers";

  ngOnInit(): void {
    
    this.http.get<ResponseCustomerByBranch>(this.api, {headers: this.httpOptions.Headers})
    .subscribe(Response => {
      this.customerList = Response.Data;
      //console.log('response', Response)
    })
    
  }

}
