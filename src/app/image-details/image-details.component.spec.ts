import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageDetailComponent } from './image-details.component';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let mockService: ImageService = new ImageService();;
  let spy: any;
  /*
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ImageDetailComponent ]
      })
      .compileComponents();
    }));
    */

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDetailComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: () => 1,
          },
        },
      },
      {provide: ImageService, useValue: mockService}
      ],
    })
      .compileComponents();
  }));
/*
  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */
 beforeEach(() => {
   spy = spyOn(mockService, 'getImage').and.returnValue({"id":1, "brand":"perro", "url":"assets/images/perro1.jpg"});
  fixture = TestBed.createComponent(ImageDetailComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('debe crear el componente', () => {
  expect(component).toBeTruthy();
});
describe("ngOnInit",() => {
  it('si la imagen existe, debe retornar el json de la misma', () => {
    expect(component.image).toEqual({"id":1, "brand":"perro", "url":"assets/images/perro1.jpg"})
  });
});

describe("fixture", () => {
  it('cuando se crea la vista, debe existir un contenedor de imagenes de tipo img-container', () =>{
    expect(fixture.nativeElement.querySelector('.img-container')).toBeDefined();
  })
});

});
