import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YgParaguayComponent } from './yg-paraguay.component';

describe('YgParaguayComponent', () => {
  let component: YgParaguayComponent;
  let fixture: ComponentFixture<YgParaguayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YgParaguayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YgParaguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
