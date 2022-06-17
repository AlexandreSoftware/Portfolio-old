import { faker } from '@faker-js/faker';
import BlogPost from '../../model/BlogPost';
import randomNumberBetween from './randomNumberBetween';
export default function CreateFakeData():BlogPost{
    return {
        Date : faker.date.recent(),
        ImageLink : faker.internet.url(),
        Post: faker.lorem.words(randomNumberBetween(50,100)),
        Title: faker.lorem.words(randomNumberBetween(3,12))
    }
}