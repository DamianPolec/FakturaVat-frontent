import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Invoice } from "../models/invoice.model";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService {
    constructor(private readonly httpClient: HttpClient) {}

    generateInvoice(invoice: Invoice): Observable<Invoice> {
        return of(invoice);
    }
}