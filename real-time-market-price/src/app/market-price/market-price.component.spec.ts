import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPriceComponent } from './market-price.component';

describe('MarketPriceComponent', () => {
  let component: MarketPriceComponent;
  let fixture: ComponentFixture<MarketPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
