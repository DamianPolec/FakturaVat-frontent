import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InvoiceComponent } from './invoice.component';

describe('InvoiceComponent', () => {
  let component: InvoiceComponent;
  let fixture: ComponentFixture<InvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceComponent, HttpClientModule],
      providers: [provideAnimationsAsync()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
