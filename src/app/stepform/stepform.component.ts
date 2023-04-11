import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-stepform',
  templateUrl: './stepform.component.html',
  styleUrls: ['./stepform.component.scss']
})
export class StepformComponent {
  title = "AngularApp";
    firstFormGroup!: FormGroup;
    secondFormGroup!: FormGroup;
    thirdFormGroup!: FormGroup;
    firstFormGroup1!: FormGroup;
    secondFormGroup1!: FormGroup;
    thirdFormGroup1!: FormGroup;
    constructor(private _formBuilder: FormBuilder) { }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ["", Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ["", Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
          thirdCtrl: ["", Validators.required]
        });
        this.firstFormGroup1 = this._formBuilder.group({
            firstCtrl1: ["", Validators.required]
        });
        this.secondFormGroup1 = this._formBuilder.group({
            secondCtrl1: ["", Validators.required]
        });
        this.thirdFormGroup1 = this._formBuilder.group({
          thirdCtrl1: ["", Validators.required]
        });
    }
}
