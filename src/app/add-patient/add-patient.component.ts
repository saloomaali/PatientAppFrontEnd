import { Component } from '@angular/core';

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

  readValue=()=>{

    let data:any = {"ptn_Id":this.ptn_Id,"name":this.name,"age":this.age,"mobNo":this.mobNo}
    
  }

}
