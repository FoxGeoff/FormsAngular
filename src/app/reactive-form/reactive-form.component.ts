import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  /**
   * Factory method for FormControl:
   * .control() , .group(), .array()
   *
   * For generating instances in your component
   * classes including form controls, form groups,
   * and form arrays.
   */
  name = new FormControl('');
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    //.array() is used to populate the form
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  // dynamically insert an alias control into the alias's form array. The FormArray.push() 
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


}
