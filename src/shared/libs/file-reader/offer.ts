import { Rent, HouseType} from '../../types/index.js';

export function createRent(rentData: string): Rent {

  const [
    name,
    description,
    date,
    town,
    mainImage,
    images,
    isPremium,
    isFavorite,
    rating,
    houseType,
    roomCount,
    guestCount,
    price,
    comfort,
    author,
    commentCount,
    latitude,
    longitude
  ] = rentData.replace('\n', '').split('\t');


  return {
    name,
    description,
    date: new Date(date),
    town,
    mainImage,
    images: images.split(';'),
    isPremium: Boolean(isPremium),
    isFavorite: Boolean(isFavorite),
    rating: +rating,
    houseType: HouseType[houseType as 'apartment' | 'house' | 'room' | 'hotel'],
    roomCount: +roomCount,
    guestCount: +guestCount,
    price: +price,
    comfort: comfort.split(';'),
    author,
    commentCount: +commentCount,
    latitude: +latitude,
    longitude: +longitude


    //   title,
    //   description,
    //   image,
    //   user,
    //   postDate: new Date(createdDate),
    //   type: OfferType[type as 'Buy' | 'Sell'],
    //   price: Number.parseInt(price, 10),
    //   categories: categories.split(';')
    //     .map((name) => ({name})),
    // };

    // .split('\n')
    // .filter((row) => row.trim().length > 0)
    // .map((line) => line.split('\t'))
    // .map(([name, description, date, town, mainImage, images, isPremium, isFavorite, rating, houseType, roomCount, guestCount, price, comfort, author, commentCount, latitude, longitude]) => ({
    //   name,
    //   description,
    //   date: new Date(date),
    //   town,
    //   mainImage,
    //   images: images.split(';'),
    //   isPremium: Boolean(isPremium),
    //   isFavorite: Boolean(isFavorite),
    //   rating: +rating,
    //   houseType: HouseType[houseType as 'apartment' | 'house' | 'room' | 'hotel'],
    //     roomCount: +roomCount,
    //     guestCount: +guestCount,
    //     price: +price,
    //     comfort: comfort.split(';'),
    //     author,
    //     commentCount: +commentCount,
    //     latitude: +latitude,
    //     longitude: +longitude,
    // }));
  };
}
