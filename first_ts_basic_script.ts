// Interfaces
interface User {
    id: number,
    name: string,
    email: string,
    birthdate: Date
}

const nicole: User = {
    id: 1,
    name: 'Nicole Cayambas',
    email: 'nicolescayambas@gmail.com',
    birthdate: new Date('2000-12-22')
};

type NewsStatus = 'pending' | 'approved' | 'rejected' | 'published'

interface Tag {
    id: number,
    tag_title: string
};
type NewsTags = Array<Tag>;



// Interface with classes
class News {
    id: number;
    title: string;
    body: string;
    author: User;
    created_at: Date;
    updated_at: Date;
    status: NewsStatus;
    is_active: boolean;
    tags: NewsTags;

    constructor(id: number, title: string, body: string, author: User, created_at: Date, updated_at: Date, status: NewsStatus, is_active: boolean, tags: NewsTags) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.status = status;
        this.is_active = is_active;
        this.tags = tags;
    }

    getNumberOfTags(tags: NewsTags): number {
        return tags.length;
    }

    searchTags(searchValue: string): NewsTags|[] {
        return this.tags.filter((item, key) => item.tag_title.toLowerCase().includes(searchValue.toLowerCase()));
    }
}

const dummyTags = [
    {id: 1, tag_title: 'Baguio City'},
    {id: 2, tag_title: 'breaking'},
    {id: 3, tag_title: 'something'},
]
const today = new Date();
const news1 = new News(
    1,
    'Breaking: Something Happened',
    'Someone did something at some place at some time and it was shocking.',
    nicole,
    today,
    today,
    'published',
    true,
    dummyTags
);
// console.log(news1);
const userSearch = prompt('Enter keyword to search tags') ?? '';
console.log(news1.searchTags(userSearch));
