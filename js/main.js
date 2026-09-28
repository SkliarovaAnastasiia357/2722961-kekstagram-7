//Массивы с данными для генерации
const NAMES = [
  'Артём',
  'Ирина',
  'Дмитрий',
  'Елена',
  'Максим',
  'Ольга',
  'Сергей',
  'Анна',
  'Павел',
  'Мария'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

const createComment = () => {
  return {
    id: getRandomInteger(1, 1000), // Уникальность id в рамках всего массива мы обеспечим позже, либо используем просто рандом
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    const comment = createComment();
    comments.push(comment);
  }
  return comments;
};

const createPhotos = () => {
  const photos = [];

  // Используем цикл от 1 до 25 чтобы id и url не повторялись
  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии №${i}`, // Придумайте своё описание
      likes: getRandomInteger(15, 200),
      comments: createComments()
    });
  }
  return photos;
};

// Вызываем функцию и сохраняем результат в переменную
const photos = createPhotos();
