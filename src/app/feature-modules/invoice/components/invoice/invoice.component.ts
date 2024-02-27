import { Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { Invoice } from '../../models/invoice.model';
import { InvoiceService } from '../../services/invoice.service';
import { LayoutComponent } from '../../../../shared/components/layout/layout.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButton,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  invoiceForm = this.formBuilder.group({
    invoiceNumber: ['', [Validators.required]],
    invoiceDate: [new Date(), [Validators.required]],
    issuerCompanyName: ['', [Validators.required]],
    issuerNip: ['', [Validators.required]],
    recipientName: ['', [Validators.required]],
    saleDate: [new Date(), [Validators.required]],
    itemName: ['', [Validators.required]],
    netPrice: [0, [Validators.required, Validators.min(0)]],
    vatValue: [0, [Validators.required, Validators.min(0)]],
    grossPrice: [0, [Validators.required, Validators.min(0)]],
    totalAmount: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly invoiceService: InvoiceService,
    private readonly destroyRef: DestroyRef
  ) {}

  generateInvoice() {
    this.invoiceForm.markAllAsTouched();

    if (this.invoiceForm.valid) {
      this.invoiceService.generateInvoice(this.invoiceForm.value as Invoice).pipe(
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((response) => {
        console.log(response)
      })
    }
  }
}
