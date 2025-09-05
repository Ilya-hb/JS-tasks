const photosGallery = (title, dimensions, date) => {
  return {
    title,
    dimensions,
    date,
    [dimensions]: true, // Вычисляемое свойство
    
    info() {
      console.log(`Фото "${this.title}" имеет разрешение ${this.dimensions}`);
    },
    
    publishInfo() {
      console.log(
        `Фото было опубликовано ${Math.floor(
          (new Date().getTime() - this.date.getTime()) / 1000
        )} секунды назад`
      );
    }
  };
};

const myDogPhoto = photosGallery("My dog", "1920x1080", new Date());

const testDimension1 = "1920x1080";
const testDimension2 = "1080x720";

console.log(myDogPhoto[testDimension1]); // true
console.log(myDogPhoto[testDimension2]); // undefined

myDogPhoto.info();
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000);
/* Фото "My dog" было опубликовано 2 секунды назад */