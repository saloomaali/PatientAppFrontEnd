import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  ptn_Id = ""
  

  constructor(private api:ApiService){}

searchData:any = []

  readValue=()=>{

    let data:any = {"ptn_Id":this.ptn_Id}

    this.api.searchPatient(data).subscribe(

      (response:any)=>{

        

        if (response.length == 0) {

          alert("No such patiend found")

          
        } else {

          this.searchData = response
        }

      }
    )
  }
  deleteBtn=(id:any)=>{

    let data:any = {"id":id}

    this.api.deletetPatient(data).subscribe(
      (response:any)=>{

        console.log(response)

        if (response.status == "success") {

          alert("Patient deleted successfully")
          this.searchData = []
          
        }


      }
    )

  }

}
