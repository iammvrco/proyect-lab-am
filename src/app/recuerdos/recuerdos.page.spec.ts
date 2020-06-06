import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuerdosPage } from './recuerdos.page';

describe('RecuerdosPage', () => {
  let component: RecuerdosPage;
  let fixture: ComponentFixture<RecuerdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuerdosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuerdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
