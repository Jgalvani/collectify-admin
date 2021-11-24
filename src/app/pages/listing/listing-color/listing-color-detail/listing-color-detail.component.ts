import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/api/color/color.service';

@Component({
  selector: 'app-listing-color-detail',
  templateUrl: './listing-color-detail.component.html',
  styleUrls: ['./listing-color-detail.component.scss']
})
export class ListingColorDetailComponent implements OnDestroy {
  // Booleans
  public isEdition: boolean = false;
  public displayMessage: boolean = false;

  // Form
  public form: FormGroup;

  // Model based variables
  public color: Color | undefined;

  //Subscriptions
  colorSubscription: SubscriptionLike | undefined;

  constructor(
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    const color_id = this.route.snapshot.paramMap.get('id');
    this.form = this.getForm();

    if (color_id !== null) {
      this.isEdition = true;
      this.colorSubscription = this.colorService.getColorFromId(+color_id)
        .subscribe(
          (color: Color) => {
            this.color = color;
            this.form = this.getForm();
        });
    }
   }

   ngOnDestroy(): void {
    if (this.colorSubscription) {
      this.colorSubscription.unsubscribe();
    }
   }

  private getForm(): FormGroup {

    const name = this.color?.name || '';

    return this.formBuilder.group({
      name: new FormControl(name, [Validators.required, Validators.maxLength(255)]),
    });
  }

  private colorSerializer(): Color {

    const color: Color = {
      id: this.color?.id,
      ...this.form.value,
    }

    return color;
  }

  public onSubmit() {

    const color: Color = this.colorSerializer();

    if (this.isEdition) {

      this.colorService.editColor(color)
        .subscribe(
          (color: Color) => this.color = color,
          (error: Error) => console.log('error:', error),
          () => this.resetForm()
      );

      return;
    }

    this.colorService.addColor(color)
      .subscribe(
        (color: Color) => this.color = color,
        (error: Error) => console.log('error:', error),
        () => this.resetForm()
      );
  }

  resetForm(): void {
    if (!this.isEdition) {
      this.color = undefined;
    }

    this.displayMessage = true;

    setTimeout(()=> this.displayMessage = false, 5000);

    this.form = this.getForm();
  }
}
