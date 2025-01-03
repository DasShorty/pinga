import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {NgClass} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'add-service',
  standalone: true,
  template: `
    <div #divElement [ngClass]="{'visible' : visible}" (click)="closePopup($event)" class="popup">
      <div class="form-background">
        <div class="heading">
          <h1>Add Service</h1>
          <img (click)="closePopupWithExit()" src="/images/cross.png" alt="close add service screen" width="30" height="30"
          style="cursor: pointer">
        </div>
        <form [formGroup]="formControl">
         <div class="row gap-small">
           <label>
             service name
             <input class="input"
                    formControlName="serviceName"
                    type="text"
                    placeholder="Website">
           </label>
           <label>
             short name of the service
             <input class="input"
                    formControlName="shortName"
                    type="text"
                    placeholder="We">
           </label>
         </div>
          <div class="row gap-small">
            <label>
              request uri to reach the service
              <input class="input"
                     formControlName="requestUri"
                     type="text"
                     placeholder="https://website.com">
            </label>
            <label>
              Farbe
              <input formControlName="hexColor"
                     type="color"
                     placeholder="Service Color">
            </label>
          </div>

          <div class="save-button">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>`,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  styles: `
    .popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      color: white;
      display: none;
    }

    .visible {
      display: flex;
    }

    .form-background {
      background: #151515;
      padding: 1rem;
      border-radius: 0.5rem;
    }

    .heading {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-between;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1.3rem;
      margin-top: 1rem;
      padding: 0.25rem;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;
      font-weight: normal;
    }

    .input {
      color: #d2d2d2;
      background: #0A0A0A;
      border: none;
      padding: 0.5rem;
      outline: none;
      height: 2rem;
    }

    input {
      border-radius: 0.25rem;
    }

    input[type="color"] {
      height: 3rem;
      width: 3rem;
      border: none;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      background: #0A0A0A;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    input[type="color"]::-webkit-color-swatch {
      border: none;
      border-radius: 0.25rem;
    }

    button {
      background: green;
      border: 2px solid green;
      border-radius: 0.25rem;
      color: white;
      padding: 0.25rem 0.5rem;
      transition: 0.3s;
      cursor: pointer;
    }

    button:hover {
      background: darkgreen;
    }

    .color-field {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
    }

    .save-button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    label {
      display: flex;
      flex-direction: column;
      justify-content: start;
      color: gray;
      text-align: start;
    }

  `
})
export class AddServiceComponent implements OnInit {

  protected visible: boolean = false;
  @ViewChild('divElement') divElement?: ElementRef;
  protected formControl: FormGroup;

  constructor(protected service: ServiceService) {
    this.formControl = new FormGroup({
      serviceName: new FormControl('', {updateOn: 'change'}),
      shortName: new FormControl(''),
      requestUri: new FormControl(''),
      hexColor: new FormControl(this.getRandomHexColor()),
      expectedStatusCode: new FormControl(200)
    })
  }

  ngOnInit() {
    this.service.addService.subscribe(value => {
      this.visible = value;
    });

    this.formControl.get('serviceName')?.valueChanges.subscribe(value => {
      this.updateServiceShortName();
    });
  }

  protected updateServiceShortName() {
    let value = this.formControl.get('serviceName')?.value;
    let shortName = value.replace(/[^A-Z]/g, '') as string;
    if (shortName.length <= 1) {

      if (shortName.length === 0) {
        shortName = value.substring(0, 2);
      } else {
        shortName = shortName + value.substring(1, 2);
      }
    }
    this.formControl.get('shortName')?.setValue(shortName);
  }

  closePopup(event: MouseEvent) {
    if (event.target === this.divElement?.nativeElement) {
      this.service.addService.emit(false);
    }
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  closePopupWithExit() {
    this.service.addService.emit(false);
  }
}
