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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';



@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [
    MatListModule,

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
    MatButtonModule,
    MatCardModule,

  ],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit {
  contact!: Contact;
  contactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.service.getContact(id).subscribe(data => {
        this.contact = data;
        this.contactForm = this.formBuilder.group({
          id: [this.contact.id],
          surname: [this.contact.surname, [Validators.required]],
          name: [this.contact.name, [Validators.required]],
          email: [this.contact.email, [Validators.required, Validators.email]],
          tel: [this.contact.tel, [Validators.required, Validators.pattern('^[0-9]+$')]],
          propic: [this.contact.propic, [Validators.required]],
 
        })
      });
    } else {
      this.contact = {
        id: null,
        surname: '',
        name: '',
        email: '',
        tel: '',
        propic: '/assets/placeholder.png'
      };
      this.contactForm = this.formBuilder.group({
        id: [this.contact.id],
        surname: [this.contact.surname, [Validators.required]],
        name: [this.contact.name, [Validators.required]],
        email: [this.contact.email, [Validators.required, Validators.email]],
        tel: [this.contact.tel, [Validators.required, Validators.pattern('^[0-9]+$')]],
        propic: [this.contact.propic, [Validators.required]],

      })
    }



  }
  onSubmit() {
    if (this.contactForm.valid) {
      if (this.contact && this.contact.id != null && this.contact.id > 0) {
        this.service.updateContact(this.contactForm.value).subscribe((data) => {
          this.snackbar.open('Contact updated!', '', { duration: 1000 });
          this.router.navigate(['/']);
        });
      } else {
        this.service.addContact(this.contactForm.value).subscribe((data) => {
          this.snackbar.open('Contact added!', '', { duration: 1000 });
          this.router.navigate(['/']);
        });
      }
    }
  };
  onCancel() {
    this.router.navigate(['/']);
  }
}
