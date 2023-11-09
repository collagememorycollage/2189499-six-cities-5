import { MockServerData } from '../../types/mock-server-data.type.js';
import { getRandomItem, generateRandomValue } from '../../../helpers/helpers/common.js';
import { OfferGenerator } from './offer-generator.interface.js';
import { City } from '../../types/index.js';
import dayjs from 'dayjs';

const MAX_RATING = 5;
const MIN_RATING = 1;

const MAX_ROOM_COUNT = 8;
const MIN_ROOM_COUNT = 1;

const MAX_PRICE = 100000;
const MIN_PRICE = 100;

const MAX_GUEST_COUNT = 10;
const MIN_GUEST_COUNT = 1;

const MIN_COMMENT = 1;
const MAX_COMMENT = 5;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {

  constructor (private readonly mockData: MockServerData) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.name);
    const description = getRandomItem<string>(this.mockData.description);
    const cities = getRandomItem([City.Paris, City.Amsterdam, City.Brussels, City.Cologne]);
    const mainImage = getRandomItem<string>(this.mockData.mainImage);
    const images = getRandomItem<string[]>(this.mockData.images);
    const isPremium = getRandomItem<boolean>(this.mockData.isPremium);
    const isFavorite = getRandomItem<boolean>(this.mockData.isFavorite);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING, 1).toString();
    const houseType = getRandomItem(this.mockData.houseType);
    const roomCount = generateRandomValue(MIN_ROOM_COUNT, MAX_ROOM_COUNT).toString();
    const guestCount = generateRandomValue(MIN_GUEST_COUNT, MAX_GUEST_COUNT).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const comfort = getRandomItem<string>(this.mockData.comfort);
    const author = getRandomItem<string>(this.mockData.author);
    const commentCount = generateRandomValue(MIN_COMMENT, MAX_COMMENT).toString();

    const date = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();

    // const [firstName, lastName] = author.split(' ');

    return [
      name,
      description,
      date,
      cities,
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
    // firstName,
    // lastName,
    ].join('\t');
  }
}
