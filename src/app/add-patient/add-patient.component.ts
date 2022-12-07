import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  ptn_Id = ""
  name = ""
  age = ""
  mobNo = ""

constructor(private api:ApiService){}

  readValue=()=>{

    let data:any = {"ptn_Id":this.ptn_Id,"name":this.name,"age":this.age,"mobNo":this.mobNo}
    console.log(data)
    
    this.api.addPatient(data).subscribe(

      (response:any)=>{

        console.log(response)
      }

    )
  }

}
