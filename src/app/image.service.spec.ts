import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  })


  describe('getImages', () => {
    it('cuando se llame el metodo, entonces debe retornar todas (5) imagenes', () => {
      // Arrange : es el before each
      
      // Act
      let resp = service.getImages();
      // Assert
      expect(resp.length).toBe(5);
    });
  });

  describe('getImage' , () =>{
    it('cuando se envia 3(que esta en la lista) entonces debe retornar este elemento (Gato)' , () => {
      const id = 3;
      let resp = service.getImage(id);
      expect(resp.brand).toBe('gato');
      expect(resp.url).toBe('assets/images/gato1.jpg')
    });

    it('cuando se envia 1(que esta en la lista) entonces debe retornar este elemento (Perro)' , () => {
      const id = 1;
      let resp = service.getImage(id);
      expect(resp.brand).toBe('perro');
      expect(resp.url).toBe('assets/images/perro1.jpg')
    });
    
    it('cuando envie 7 debe retornar indefinido',() => {
        const id = 7;
        let resp = service.getImage(id);
        expect(resp).toBeUndefined();
    });
  })
});
