import { Component } from '@angular/core';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

   data:any = [{"ptn_Id":1234,"name":"salooma","age":22,"mobNo":"8921453137"}]

}
