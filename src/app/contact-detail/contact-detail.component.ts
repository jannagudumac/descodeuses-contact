import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
    imports: [
      MatListModule,
      RouterModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule, //Necessaire pour la directive ngModel (template driven form)
      MatIconModule,
      MatButtonModule,
      CommonModule, MatMenuModule,
      MatDividerModule,
      MatSnackBarModule,
      MatSelectModule,
      ReactiveFormsModule,
    ],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit{
  contactForm! : FormGroup;
  constructor(private formBuilder : FormBuilder){
    
  }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }
  onSubmit(){
    if (this.contactForm.valid){
      console.log(this.contactForm.value);
    }
  }
}
