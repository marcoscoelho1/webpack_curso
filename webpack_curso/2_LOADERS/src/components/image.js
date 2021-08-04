
import Samurai from '../img/samurai.jpg';

class Image {
    inserImage() {
      const img = document.createElement('img');
      
      img.src = Samurai;

      img.width = 200;
      img.height = 200

      document.body.appendChild(img);
    }
}

export default Image