import { Component } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface Prod {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<Prod[]>;

  pproducts: Prod[] = [
    {      
      "name": "Casio AE-1200",
      "flag": "http://localhost/casio.jpg"
    },
    {      
      "name": "Airpods",
      "flag": "http://localhost/airpods.jpg"
    },
    {      
      "name": "Groceries",
      "flag": "http://localhost/rice.jpg"
    },
    {      
      "name": "Harry Potter",
      "flag": "http://localhost/aot-1.jpg"
    },
    {      
      "name": "Boat Airdopes 441",
      "flag": "http://localhost/boatairpods.jpg"
    },
    {      
      "name": "Dry Fruits",
      "flag": "http://localhost/oats.jpg"
    },
    {      
      "name": "Smart Watch",
      "flag": "http://localhost/ax.jpg"
    },
    {      
      "name": "Mahabharath",
      "flag": "http://localhost/naruto.jpg"
    },
    {      
      "name": "perfume",
      "flag": "http://localhost/jaguar.jpg"
    },
    {
      "name": "Asus Zenbook 14X 2022",
      "flag": "http://localhost/lap.jpg"
    },
    {
      "name": "Face Serum",
      "flag": "http://localhost/face.jpg"
    }
  ];
  // 
  fname:any;
  email:any;
  message:any;
  product:any;
  errors:string[] = [];
  //
  constructor(private cs:ComplaintsService){
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(prod => (prod ? this._filterStates(prod) : this.pproducts.slice())),
    );
    // 
    
    //
  }
  
  //
  ngOnInit(): void {
  }
  submit(){
    this.errors=[]
    if(this.errors.length==0){
      let obj={
        id:Math.round(Math.random()*100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product:this.product
      }
      this.cs.postComplaint(obj).subscribe({
        next:()=>{
          console.log(obj)
          alert("You complaint is raised")
            this.fname="",
            this.email="",
            this.message="",
            this.product=""
          },
          error: ()=>alert("there is a problem raising your complaint")
        }
        )
      }
  }
  //
  private _filterStates(value: string): Prod[] {
    const filterValue = value.toLowerCase();
    return this.pproducts.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
