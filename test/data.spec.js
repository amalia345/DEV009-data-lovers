import { filterDirector } from '../src/data.js';
import { sortAlphabeticYear } from '../src/data.js';
import { ordenarPorNumeros } from '../src/data.js'; 

describe('Tests de sortAlphabeticYear', () => {
  it('Test para filtrar las peliculas de la A a la Z', () => {
    const peliculas = [
      {title: 'Castle in the Sky'},
      {title: 'My Neighbors the Yamadas'},
      {title: 'Whisper of the Heart'}
    ]
    const resultadoEsperado =[
      {title: 'Castle in the Sky'},
      {title: 'My Neighbors the Yamadas'},
      {title: 'Whisper of the Heart'}
    ]
    const peliculasfiltradas = sortAlphabeticYear (peliculas, 'alfabeto');
    expect(peliculasfiltradas).toEqual(resultadoEsperado);
  });
  it('Test para filtrar las películas de la Z a la A', () => {
    const peliculas =[
      {title: 'Whisper of the Heart,'},
      {title: 'The Wind Rises'},
      {title: 'Castle in the Sky'}
    ]
    const resultadoEsperado =[
      {title: 'Whisper of the Heart,'},
      {title: 'The Wind Rises'},
      {title: 'Castle in the Sky'}
    ]
    const peliculasfiltradas = sortAlphabeticYear (peliculas, 'alfabetoReversa');
    expect(peliculasfiltradas). toEqual(resultadoEsperado)
  });
});

describe('Tests de sortAlphabeticYear', () => {
  it('Test para filtrar las peliculas de la más nueva a la más vieja', () => {
    const peliculas = [
      {
        "title": "When Marnie Was There",
        "release_date": "2014",
      },
      {
        "title": "Princess Mononoke",
        "release_date": "1997",
      },
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
      }
    ]
    const resultadoEsperado =[
      {
        "title": "When Marnie Was There",
        "release_date": "2014",
      },
      {
        "title": "Princess Mononoke",
        "release_date": "1997",
      },
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
      }
    ]
    const peliculasfiltradas = sortAlphabeticYear (peliculas, 'nuevas');
    expect(peliculasfiltradas).toEqual(resultadoEsperado);
  });
  it('Test para filtrar las peliculas de la más vieja a la más nueva', () => {
    const peliculas = [
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
      },
      {
        "title": "Princess Mononoke",
        "release_date": "1997",
      },
      {
        "title": "When Marnie Was There",
        "release_date": "2014",
      }
    ]
    const resultadoEsperado =[
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
      },
      {
        "title": "Princess Mononoke",
        "release_date": "1997",
      },
      {
        "title": "When Marnie Was There",
        "release_date": "2014",
      }
    ];
    const peliculasfiltradas = sortAlphabeticYear (peliculas, 'viejas');
    expect(peliculasfiltradas).toEqual(resultadoEsperado);
  });
});

describe('Tests de filterDirector', () => {
  it('Test para validar todas las películas de Hayao Myazaki', () => {
    const nombreDeDirector = 'Hayao Miyazaki'
    const dataSetDePeliculas = [{
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
          "name": "Dola",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
          "gender": "Female",
          "age": "60",
          "eye_color": "Black",
          "hair_color": "Peach",
          "specie": "Human"
        },
        {
          "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
          "name": "Romska Palo Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
          "gender": "Male",
          "age": "33",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e08880d0-6938-44f3-b179-81947e7873fc",
          "name": "Uncle Pom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
          "gender": "Male",
          "age": "Unspecified/Elderly",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
          "name": "General Muoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Black",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
          "name": "Duffi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
          "name": "Louis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
          "gender": "Male",
          "age": "30",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
          "name": "Charles",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
          "name": "Henri",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Reddish brown",
          "specie": "Human"
        },
        {
          "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
          "name": "Motro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
          "name": "Okami",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
          "gender": "Female",
          "age": "50",
          "eye_color": "Dark brown",
          "hair_color": "Orange",
          "specie": "Human"
        },
        {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
          "gender": "Male",
          "age": "33",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
          "name": "Gondoa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
          "climate": "TODO",
          "terrain": "TODO",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
          "name": "Pazu's Mines",
          "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
          "climate": "Dry",
          "terrain": "Hill",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
          "name": "Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
          "name": "Tedis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
          "climate": "Continental",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
          "name": "Air Destroyer Goliath",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
          "description": "A military airship utilized by the government to access Laputa",
          "vehicle_class": "Airship",
          "length": "1,000",
          "pilot": {
            "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
            "name": "Colonel Muska"
          }
        }
      ]
    },{
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "director": "Isao Takahata",
      "producer": "Toru Hara",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
      "release_date": "1988",
      "rt_score": "97",
      "people": [
        {
          "id": "8cb959a8-1959-42f3-bb33-07d7a2e6b830",
          "name": "Seita Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/21/Seita_Yokokawa.jpg",
          "gender": "Male",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "c344d561-6654-4aab-b0df-a1570e7e60cb",
          "name": "Setsuko Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a8/Setsuko_Yokokawa.jpg",
          "gender": "Female",
          "age": "4",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "227c01a6-4e29-4582-bc4b-35106a704ab0",
          "name": "Mrs. Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/39/SeitaMother.png",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "023306e3-9fc6-4d1d-b681-d4649dcbfff9",
          "name": "Kiyoshi Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f6/SeitaFather3.jpg",
          "gender": "Male",
          "age": "40",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "0e18b23d-1f21-4a83-a6de-f01147624875",
          "name": "Seita's Aunt",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/SeitaAunt.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [],
      "vehicles": []
    }]
    const resultadoEsperado = [{
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
          "name": "Dola",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
          "gender": "Female",
          "age": "60",
          "eye_color": "Black",
          "hair_color": "Peach",
          "specie": "Human"
        },
        {
          "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
          "name": "Romska Palo Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
          "gender": "Male",
          "age": "33",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e08880d0-6938-44f3-b179-81947e7873fc",
          "name": "Uncle Pom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
          "gender": "Male",
          "age": "Unspecified/Elderly",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
          "name": "General Muoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Black",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
          "name": "Duffi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
          "name": "Louis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
          "gender": "Male",
          "age": "30",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
          "name": "Charles",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
          "name": "Henri",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Reddish brown",
          "specie": "Human"
        },
        {
          "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
          "name": "Motro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
          "name": "Okami",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
          "gender": "Female",
          "age": "50",
          "eye_color": "Dark brown",
          "hair_color": "Orange",
          "specie": "Human"
        },
        {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
          "gender": "Male",
          "age": "33",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
          "name": "Gondoa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
          "climate": "TODO",
          "terrain": "TODO",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
          "name": "Pazu's Mines",
          "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
          "climate": "Dry",
          "terrain": "Hill",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
          "name": "Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
          "name": "Tedis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
          "climate": "Continental",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
          "name": "Air Destroyer Goliath",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
          "description": "A military airship utilized by the government to access Laputa",
          "vehicle_class": "Airship",
          "length": "1,000",
          "pilot": {
            "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
            "name": "Colonel Muska"
          }
        }
      ]
    }]
    expect(filterDirector( dataSetDePeliculas,nombreDeDirector)).toEqual(resultadoEsperado);
  });
  it('Test para validar todas las películas de Isao Takahata', () => {
    const nombreDeDirector = 'Isao Takahata'
    const dataSetDePeliculas = [{
      "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
      "title": "Pom Poko",
      "description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
      "director": "Isao Takahata",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Pom_Poko.jpg",
      "release_date": "1994",
      "rt_score": "78",
      "people": [
        {
          "id": "575d6943-f9da-445e-8e77-e118c3924a1d",
          "name": "Shoukichi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Raccoon Dog"
        },
        {
          "id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
          "name": "Okiyo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Raccoon Dog"
        },
        {
          "id": "220c7498-c390-4456-b853-bac107d16ff7",
          "name": "Seizaemon",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Seizaemon.jpg",
          "gender": "Male",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Raccoon Dog"
        },
        {
          "id": "718f634a-ea92-4907-a262-5a71a0661dcd",
          "name": "Oroku",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/07/Oroku.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey brown",
          "specie": "Raccoon Dog"
        },
        {
          "id": "7367f154-4d9b-4e3e-89cf-2bd55c4d817f",
          "name": "Gonta",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0b/Gonta.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Raccoon Dog"
        },
        {
          "id": "041cad03-ad0d-4f80-aeaa-71f9f64334df",
          "name": "Inugami Gyōbu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Inugami.jpg",
          "gender": "Male",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey brown",
          "specie": "Raccoon Dog"
        }
      ],
      "locations": [],
      "vehicles": []
    },{
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
      "title": "Whisper of the Heart",
      "description": "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
      "director": "Yoshifumi Kondō",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Whisper_of_the_Heart.jpg",
      "release_date": "1995",
      "rt_score": "91",
      "people": [
        {
          "id": "42a69bf6-b5e8-42b1-b05a-12c3d05e7c1e",
          "name": "Shizuku Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/67/Shizuku_Tsukishima.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Light black",
          "specie": "Human"
        },
        {
          "id": "fc196c4f-0201-4ed2-9add-c6403f7c4d32",
          "name": "Baron Humbert von Gikkingen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Humbert_von_Gikkingen.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Green",
          "hair_color": "Yellow",
          "specie": "Cat"
        },
        {
          "id": "079db09e-0441-442b-8c17-af5cac8321c4",
          "name": "Seiji Amasawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Seiji_Amasawa.jpg",
          "gender": "Male",
          "age": "15",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "494bba43-9f61-4383-a597-5bae6ab26222",
          "name": "Yuko Harada",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cb/Yuko_Harada.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e432a1fe-e937-4575-bade-d11e9f8a9433",
          "name": "Sugimura",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b7/Sugimura.jpg",
          "gender": "Male",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "182c1f2a-e1e0-4035-b87a-754d58ed6e2d",
          "name": "Seiya Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Seiya_Tsukishima.jpg",
          "gender": "Male",
          "age": "40",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d92e61f3-f525-4740-9f06-c9e7b19c3d11",
          "name": "Asako Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/ac/Asako_Tsukishima.jpg",
          "gender": "Female",
          "age": "39",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "61b51987-dd67-479b-aa03-554834b7edd7",
          "name": "Shiro Nishi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Shiro_Nishi.jpg",
          "gender": "Male",
          "age": "70",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "e40b4241-612b-402f-8e6c-067c44e9c618",
          "name": "Shiho Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Shiho_Tsukishima.jpg",
          "gender": "Female",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "42f787d8-1fcb-4d3d-82f2-a74409869368",
          "name": "Seiji's House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Mimi011.jpg",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }]
    const resultadoEsperado = [{
      "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
      "title": "Pom Poko",
      "description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
      "director": "Isao Takahata",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Pom_Poko.jpg",
      "release_date": "1994",
      "rt_score": "78",
      "people": [
        {
          "id": "575d6943-f9da-445e-8e77-e118c3924a1d",
          "name": "Shoukichi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Raccoon Dog"
        },
        {
          "id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
          "name": "Okiyo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Raccoon Dog"
        },
        {
          "id": "220c7498-c390-4456-b853-bac107d16ff7",
          "name": "Seizaemon",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Seizaemon.jpg",
          "gender": "Male",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Raccoon Dog"
        },
        {
          "id": "718f634a-ea92-4907-a262-5a71a0661dcd",
          "name": "Oroku",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/07/Oroku.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey brown",
          "specie": "Raccoon Dog"
        },
        {
          "id": "7367f154-4d9b-4e3e-89cf-2bd55c4d817f",
          "name": "Gonta",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0b/Gonta.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Raccoon Dog"
        },
        {
          "id": "041cad03-ad0d-4f80-aeaa-71f9f64334df",
          "name": "Inugami Gyōbu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Inugami.jpg",
          "gender": "Male",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey brown",
          "specie": "Raccoon Dog"
        }
      ],
      "locations": [],
      "vehicles": []
    }]
    expect(filterDirector( dataSetDePeliculas,nombreDeDirector)).toEqual(resultadoEsperado);
  });
  it('Test para validar todas las películas de Yoshifumi Kondō', () => {
    const nombreDeDirector = 'Yoshifumi Kondō'
    const dataSetDePeliculas = [{
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
      "title": "Whisper of the Heart",
      "description": "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
      "director": "Yoshifumi Kondō",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Whisper_of_the_Heart.jpg",
      "release_date": "1995",
      "rt_score": "91",
      "people": [
        {
          "id": "42a69bf6-b5e8-42b1-b05a-12c3d05e7c1e",
          "name": "Shizuku Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/67/Shizuku_Tsukishima.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Light black",
          "specie": "Human"
        },
        {
          "id": "fc196c4f-0201-4ed2-9add-c6403f7c4d32",
          "name": "Baron Humbert von Gikkingen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Humbert_von_Gikkingen.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Green",
          "hair_color": "Yellow",
          "specie": "Cat"
        },
        {
          "id": "079db09e-0441-442b-8c17-af5cac8321c4",
          "name": "Seiji Amasawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Seiji_Amasawa.jpg",
          "gender": "Male",
          "age": "15",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "494bba43-9f61-4383-a597-5bae6ab26222",
          "name": "Yuko Harada",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cb/Yuko_Harada.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e432a1fe-e937-4575-bade-d11e9f8a9433",
          "name": "Sugimura",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b7/Sugimura.jpg",
          "gender": "Male",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "182c1f2a-e1e0-4035-b87a-754d58ed6e2d",
          "name": "Seiya Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Seiya_Tsukishima.jpg",
          "gender": "Male",
          "age": "40",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d92e61f3-f525-4740-9f06-c9e7b19c3d11",
          "name": "Asako Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/ac/Asako_Tsukishima.jpg",
          "gender": "Female",
          "age": "39",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "61b51987-dd67-479b-aa03-554834b7edd7",
          "name": "Shiro Nishi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Shiro_Nishi.jpg",
          "gender": "Male",
          "age": "70",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "e40b4241-612b-402f-8e6c-067c44e9c618",
          "name": "Shiho Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Shiho_Tsukishima.jpg",
          "gender": "Female",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "42f787d8-1fcb-4d3d-82f2-a74409869368",
          "name": "Seiji's House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Mimi011.jpg",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    },{
      "id": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
      "title": "Princess Mononoke",
      "description": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Princess_Mononoke.jpg",
      "release_date": "1997",
      "rt_score": "92",
      "people": [
        {
          "id": "ba924631-068e-4436-b6de-f3283fa848f0",
          "name": "Ashitaka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Ashitaka.jpg",
          "gender": "Male",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "ebe40383-aad2-4208-90ab-698f00c581ab",
          "name": "San",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3f/San.jpg",
          "gender": "Female",
          "age": "16",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "34277bec-7401-43fa-a00a-5aee64b45b08",
          "name": "Eboshi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9f/Eboshi.png",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Hazel",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "91939012-90b9-46e5-a649-96b898073c82",
          "name": "Jigo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/79/Jigo_%282%29.jpg",
          "gender": "Male",
          "age": "Middle age",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "20e3bd33-b35d-41e6-83a4-57ca7f028d38",
          "name": "Kohroku",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d1/Kohroku_gives.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "8bccdc78-545b-49f4-a4c8-756163a38c91",
          "name": "Gonza",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/42/Gonza_%282%29.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Grey",
          "hair_color": "Bald, but beard is Brown",
          "specie": "Human"
        },
        {
          "id": "116bfe1b-3ba8-4fa0-8f72-88537a493cb9",
          "name": "Hii-sama",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/83/Hii-sama.jpg",
          "gender": "Female",
          "age": "Over 50",
          "eye_color": "Brown",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "030555b3-4c92-4fce-93fb-e70c3ae3df8b",
          "name": "Yakul",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ef/Yakul.jpg",
          "age": "Unknown",
          "gender": "Male",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Red elk"
        },
        {
          "id": "ca568e87-4ce2-4afa-a6c5-51f4ae80a60b",
          "name": "Shishigami",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b7/Forest_Spirit.jpg",
          "age": "400",
          "gender": "Male",
          "eye_color": "Red",
          "hair_color": "Light Orange",
          "specie": "Spirit"
        },
        {
          "id": "e9356bb5-4d4a-4c93-aadc-c83e514bffe3",
          "name": "Moro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5e/Moro.png",
          "gender": "Female",
          "age": "300",
          "eye_color": "Brown",
          "hair_color": "White",
          "specie": "Wolf"
        }
      ],
      "locations": [
        {
          "id": "11014596-71b0-4b3e-b8c0-1c4b15f28b9a",
          "name": "Irontown",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/ac/Mononoke_-_Irontown.jpg",
          "climate": "Continental",
          "terrain": "Mountain",
          "surface_water": "40",
          "residents": [
            {
              "id": "ba924631-068e-4436-b6de-f3283fa848f0",
              "name": "Ashitaka"
            },
            {
              "id": "030555b3-4c92-4fce-93fb-e70c3ae3df8b",
              "name": "Yakul"
            }
          ]
        },
        {
          "id": "615aa48d-8673-4117-b35a-79cb67af1897",
          "name": "Forest",
          "img": "https://www.teahub.io/photos/full/230-2307062_princess-mononoke-forest-spirit.jpg",
          "climate": "Tropical",
          "terrain": "Forest",
          "surface_water": "60",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }]
    const resultadoEsperado = [{
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
      "title": "Whisper of the Heart",
      "description": "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
      "director": "Yoshifumi Kondō",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Whisper_of_the_Heart.jpg",
      "release_date": "1995",
      "rt_score": "91",
      "people": [
        {
          "id": "42a69bf6-b5e8-42b1-b05a-12c3d05e7c1e",
          "name": "Shizuku Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/67/Shizuku_Tsukishima.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Light black",
          "specie": "Human"
        },
        {
          "id": "fc196c4f-0201-4ed2-9add-c6403f7c4d32",
          "name": "Baron Humbert von Gikkingen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Humbert_von_Gikkingen.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Green",
          "hair_color": "Yellow",
          "specie": "Cat"
        },
        {
          "id": "079db09e-0441-442b-8c17-af5cac8321c4",
          "name": "Seiji Amasawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Seiji_Amasawa.jpg",
          "gender": "Male",
          "age": "15",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "494bba43-9f61-4383-a597-5bae6ab26222",
          "name": "Yuko Harada",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cb/Yuko_Harada.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e432a1fe-e937-4575-bade-d11e9f8a9433",
          "name": "Sugimura",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b7/Sugimura.jpg",
          "gender": "Male",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "182c1f2a-e1e0-4035-b87a-754d58ed6e2d",
          "name": "Seiya Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Seiya_Tsukishima.jpg",
          "gender": "Male",
          "age": "40",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d92e61f3-f525-4740-9f06-c9e7b19c3d11",
          "name": "Asako Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/ac/Asako_Tsukishima.jpg",
          "gender": "Female",
          "age": "39",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "61b51987-dd67-479b-aa03-554834b7edd7",
          "name": "Shiro Nishi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Shiro_Nishi.jpg",
          "gender": "Male",
          "age": "70",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "e40b4241-612b-402f-8e6c-067c44e9c618",
          "name": "Shiho Tsukishima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Shiho_Tsukishima.jpg",
          "gender": "Female",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "42f787d8-1fcb-4d3d-82f2-a74409869368",
          "name": "Seiji's House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Mimi011.jpg",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }]
    expect(filterDirector( dataSetDePeliculas,nombreDeDirector)).toEqual(resultadoEsperado);
  });
  it('Test para validar todas las películas de Hiroyuki Morita', () => {
    const nombreDeDirector = 'Hiroyuki Morita'
    const dataSetDePeliculas = [{
      "id": "90b72513-afd4-4570-84de-a56c312fdf81",
      "title": "The Cat Returns",
      "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
      "director": "Hiroyuki Morita",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
      "release_date": "2002",
      "rt_score": "89",
      "people": [
        {
          "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
          "name": "Renaldo Moon aka Moon aka Muta",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "White",
          "hair_color": "Beige",
          "specie": "Cat"
        },
        {
          "id": "3042818d-a8bb-4cba-8180-c19249822d57",
          "name": "Cat King",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg",
          "gender": "Male",
          "age": "87",
          "eye_color": "Emerald",
          "hair_color": "Grey",
          "specie": "Cat"
        },
        {
          "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
          "name": "Yuki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
          "gender": "Female",
          "age": "NA",
          "eye_color": "Blue",
          "hair_color": "White",
          "specie": "Cat"
        },
        {
          "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
          "name": "Haru Yoshioka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b",
          "name": "Natori",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Blue",
          "hair_color": "Grey",
          "specie": "Cat"
        },
        {
          "id": "269dcd81-8037-45bb-892b-1c86c9696222",
          "name": "Toto",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Black",
          "hair_color": "Dark Blue",
          "specie": "Bird"
        },
        {
          "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0",
          "name": "Prince Lune",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Russian blue",
          "specie": "Cat"
        },
        {
          "id": "17aca709-3049-48fc-95a6-e802c01125a2",
          "name": "Hiromi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "911d38e2-ada4-4481-89a2-ba414422d4e4",
          "name": "Naoko Yoshioka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Light Brown",
          "hair_color": "Light brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
          "name": "The Cat Kingdom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg",
          "climate": "Continental",
          "terrain": "Plain",
          "surface_water": "30",
          "residents": [
            {
              "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
              "name": "Renaldo Moon aka Moon aka Muta"
            },
            {
              "id": "3042818d-a8bb-4cba-8180-c19249822d57",
              "name": "Cat King"
            },
            {
              "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
              "name": "Yuki"
            },
            {
              "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
              "name": "Haru"
            }
          ]
        }
      ],
      "vehicles": []
    }, {
      "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
      "title": "Tales from Earthsea",
      "description": "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
      "director": "Gorō Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/%C3%96v%C3%A4rlden.jpg",
      "release_date": "2006",
      "rt_score": "41",
      "people": [
        {
          "id": "68df798d-f73d-4c70-b4ad-05dd84910436",
          "name": "Ged",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/33/Ged.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3f3163bb-e2da-4e87-a1bf-ae2dfcde1a09",
          "name": "Arren / Lebannen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ee/Arren.png",
          "gender": "Male",
          "age": "17",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "84ba6d3d-d225-4a92-bbbc-147808826425",
          "name": "Therru",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1a/Therru.jpg",
          "gender": "Female",
          "age": "circa 14-17",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "60469915-e18e-4cf3-b43d-95ea56cc300c",
          "name": "Tenar",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Tenar.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Grey",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "9bd3091a-8ae2-4741-9265-7f83ec55663a",
          "name": "King of Enlad",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/King-enlad.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "59d22f97-f45d-4a6c-b473-13ee9e69082a",
          "name": "Cob",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/ce/Cob.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Violet",
          "hair_color": "Purple",
          "specie": "Arch-mage/Human"
        },
        {
          "id": "da00cee4-90a2-413b-8cef-c65e57f7e41",
          "name": "Hare",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1e/Hare.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e024d74b-ca9f-49a7-92fb-e8723c6183e4",
          "name": "Hazia Dealer",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Hazia_Dealer.png",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "bcc54f38-8847-45b0-97b1-307c94b2b517",
          "name": "Enland",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Ged007.jpg",
          "climate": "Wet",
          "terrain": "Earthsea",
          "surface_water": "100",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }]
    const resultadoEsperado = [{
      "id": "90b72513-afd4-4570-84de-a56c312fdf81",
      "title": "The Cat Returns",
      "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
      "director": "Hiroyuki Morita",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
      "release_date": "2002",
      "rt_score": "89",
      "people": [
        {
          "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
          "name": "Renaldo Moon aka Moon aka Muta",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "White",
          "hair_color": "Beige",
          "specie": "Cat"
        },
        {
          "id": "3042818d-a8bb-4cba-8180-c19249822d57",
          "name": "Cat King",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg",
          "gender": "Male",
          "age": "87",
          "eye_color": "Emerald",
          "hair_color": "Grey",
          "specie": "Cat"
        },
        {
          "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
          "name": "Yuki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
          "gender": "Female",
          "age": "NA",
          "eye_color": "Blue",
          "hair_color": "White",
          "specie": "Cat"
        },
        {
          "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
          "name": "Haru Yoshioka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b",
          "name": "Natori",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Blue",
          "hair_color": "Grey",
          "specie": "Cat"
        },
        {
          "id": "269dcd81-8037-45bb-892b-1c86c9696222",
          "name": "Toto",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Black",
          "hair_color": "Dark Blue",
          "specie": "Bird"
        },
        {
          "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0",
          "name": "Prince Lune",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Russian blue",
          "specie": "Cat"
        },
        {
          "id": "17aca709-3049-48fc-95a6-e802c01125a2",
          "name": "Hiromi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "911d38e2-ada4-4481-89a2-ba414422d4e4",
          "name": "Naoko Yoshioka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Light Brown",
          "hair_color": "Light brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
          "name": "The Cat Kingdom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg",
          "climate": "Continental",
          "terrain": "Plain",
          "surface_water": "30",
          "residents": [
            {
              "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
              "name": "Renaldo Moon aka Moon aka Muta"
            },
            {
              "id": "3042818d-a8bb-4cba-8180-c19249822d57",
              "name": "Cat King"
            },
            {
              "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
              "name": "Yuki"
            },
            {
              "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
              "name": "Haru"
            }
          ]
        }
      ],
      "vehicles": []
    }]
    expect(filterDirector( dataSetDePeliculas,nombreDeDirector)).toEqual(resultadoEsperado);
  });
  it('Test para validar todas las películas de Gorō Miyazaki', () => {
    const nombreDeDirector = 'Gorō Miyazaki'
    const dataSetDePeliculas = [{
      "id": "45db04e4-304a-4933-9823-33f389e8d74d",
      "title": "From Up on Poppy Hill",
      "description": "The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means “I pray for safe voyages”. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",
      "director": "Gorō Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bb/From_Up_on_Poppy_Hill.jpg",
      "release_date": "2011",
      "rt_score": "83",
      "people": [
        {
          "id": "6a486237-c503-4221-b834-1862f200e939",
          "name": "Umi Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/93/Umi_Matsuzaki.jpg",
          "gender": "Female",
          "age": "16",
          "eye_color": "Hazel",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5c492592-ea9c-45e8-a9cc-4391037c0202",
          "name": "Shun Kazama",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shun_Kazama.jpg",
          "gender": "Male",
          "age": "17",
          "eye_color": "Black",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "f1c170fa-7c60-420a-8437-253dd39a6bde",
          "name": "Yūichirō Sawamura",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3e/Yuuichirou_Sawamura.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "721acf20-3470-4010-801b-31f465467d55",
          "name": "Sora Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Sora_Matsuzaki.jpg",
          "gender": "Female",
          "age": "12-14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "827be987-0563-4a7c-a68b-9d58e46d1687",
          "name": "Shirou Mizunuma",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f1/Shirou_Mizunuma.jpg",
          "gender": "Male",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "bec0cbf4-a03c-4379-b2c6-77fca9d5faa8",
          "name": "Ryōko Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ryouko_Matsuzaki.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "002708e3-d38f-4518-a7a9-bdb92390d0dc",
          "name": "Riku Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Riku_Matsuzaki.jpg",
          "gender": "Male",
          "age": "11",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "daf8627a-dd28-407a-a36b-d41b13ffc2ed",
          "name": "Hana Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Hana_Matsuzaki.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Dark grey",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "be837047-cd6f-477f-a83d-5aec9ed1dda7",
          "name": "Coquelicot Manor",
          "img": "https://cache.desktopnexus.com/thumbseg/2436/2436746-bigthumbnail.jpg",
          "climate": "Warm",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    },{
      "id": "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
      "title": "The Secret World of Arrietty",
      "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
      "director": "Hiromasa Yonebayashi",
      "producer": "Toshio Suzuki",
      "poster": "https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "release_date": "2010",
      "rt_score": "95",
      "people": [
        {
          "id": "89026b3a-abc4-4053-ab1a-c6d2eea68faa",
          "name": "Karigurashi/Arrietty",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/04/Arrietty.jpg",
          "gender": "Female",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Auburn",
          "specie": "Borrower"
        },
        {
          "id": "496031cc-f6af-4f48-b9d1-27f34cb18e10",
          "name": "Sho (Shawn)",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/04/Sho.jpg",
          "gender": "Male",
          "age": "12-14",
          "eye_color": "Brown",
          "hair_color": "Navy blue/black",
          "specie": "Human"
        },
        {
          "id": "ef5ee7c5-ae68-418d-a319-f3e79262cd87",
          "name": "Homily Clock",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Homily_Clock.jpg",
          "gender": "Female",
          "age": "52",
          "eye_color": "Brown",
          "hair_color": "Navy black",
          "specie": "Borrower"
        },
        {
          "id": "3a83aa65-d134-4e58-85b2-e9f6523b047d",
          "name": "Sadako Maki/Jessica",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Jessica.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "9c687441-3eb3-4c4b-8752-55774953aa3f",
          "name": "Haru",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3d/Haru_%28dam%29.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "ce5fb645-f0bb-4c1b-829f-907989d5525f",
          "name": "Spiller",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Spiller.jpg",
          "gender": "Male",
          "age": "Young",
          "eye_color": "Black",
          "hair_color": "Navy black",
          "specie": "Borrower"
        },
        {
          "id": "a27ebdcb-4d29-40ac-8da6-5fc5a7869efb",
          "name": "Pod Clock",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/76/Pod.png",
          "gender": "Male",
          "age": "52",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Borrower"
        },
        {
          "id": "379f1453-38ca-486f-9d8b-f4eddc1e3fd3",
          "name": "Niya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5a/Niya.jpg",
          "gender": "Male",
          "age": "52",
          "eye_color": "White",
          "hair_color": "Beige",
          "specie": "Cat"
        }
      ],
      "locations": [
        {
          "id": "1e7ed524-4b4f-466b-978c-69dda9777396",
          "name": "Sho's house",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/86/Karigurashi002.jpg",
          "climate": "Warm",
          "terrain": "Forest",
          "surface_water": "10",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "f2148ab5-f272-4057-b05a-1321e35227b4",
          "name": "Karigurashi's house",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cd/Karigurashi019.jpg",
          "climate": "Warm",
          "terrain": "Under the floorboards",
          "surface_water": "10",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }]
    const resultadoEsperado = [{
      "id": "45db04e4-304a-4933-9823-33f389e8d74d",
      "title": "From Up on Poppy Hill",
      "description": "The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means “I pray for safe voyages”. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",
      "director": "Gorō Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bb/From_Up_on_Poppy_Hill.jpg",
      "release_date": "2011",
      "rt_score": "83",
      "people": [
        {
          "id": "6a486237-c503-4221-b834-1862f200e939",
          "name": "Umi Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/93/Umi_Matsuzaki.jpg",
          "gender": "Female",
          "age": "16",
          "eye_color": "Hazel",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5c492592-ea9c-45e8-a9cc-4391037c0202",
          "name": "Shun Kazama",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shun_Kazama.jpg",
          "gender": "Male",
          "age": "17",
          "eye_color": "Black",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "f1c170fa-7c60-420a-8437-253dd39a6bde",
          "name": "Yūichirō Sawamura",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3e/Yuuichirou_Sawamura.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "721acf20-3470-4010-801b-31f465467d55",
          "name": "Sora Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Sora_Matsuzaki.jpg",
          "gender": "Female",
          "age": "12-14",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "827be987-0563-4a7c-a68b-9d58e46d1687",
          "name": "Shirou Mizunuma",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f1/Shirou_Mizunuma.jpg",
          "gender": "Male",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "bec0cbf4-a03c-4379-b2c6-77fca9d5faa8",
          "name": "Ryōko Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ryouko_Matsuzaki.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "002708e3-d38f-4518-a7a9-bdb92390d0dc",
          "name": "Riku Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Riku_Matsuzaki.jpg",
          "gender": "Male",
          "age": "11",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "daf8627a-dd28-407a-a36b-d41b13ffc2ed",
          "name": "Hana Matsuzaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Hana_Matsuzaki.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Dark grey",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "be837047-cd6f-477f-a83d-5aec9ed1dda7",
          "name": "Coquelicot Manor",
          "img": "https://cache.desktopnexus.com/thumbseg/2436/2436746-bigthumbnail.jpg",
          "climate": "Warm",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    }]
    expect(filterDirector( dataSetDePeliculas,nombreDeDirector)).toEqual(resultadoEsperado);
  });
  it('Test para validar todas las películas de Hiromasa Yonebayashi', () => {
    const nombreDeDirector = 'Hiromasa Yonebayashi'
    const dataSetDePeliculas = [{
      "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
      "title": "When Marnie Was There",
      "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
      "director": "Hiromasa Yonebayashi",
      "producer": "Yoshiaki Nishimura",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7a/When_Marnie_Was_There.jpg",
      "release_date": "2014",
      "rt_score": "92",
      "people": [
        {
          "id": "4a6a60d1-cb07-464f-889c-fecaff19b4ef",
          "name": "Marnie",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/21/Marnie.jpg",
          "gender": "Female",
          "age": "12",
          "eye_color": "Green",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "28d07ace-c309-48c6-b48e-ae2ece3a238c",
          "name": "Anna Sasaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/ae/Anna.png",
          "gender": "Female",
          "age": "12",
          "eye_color": "Blue",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d0a0bd7c-7521-45a2-a681-573a67f34a5b",
          "name": "Emily",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cd/13_year_old_Emily.png",
          "gender": "Female",
          "age": "20",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "08fdd37a-2cf0-4f91-ae1c-344ecff39753",
          "name": "Kazuhiko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/Kazuhiko.jpg",
          "gender": "Male",
          "age": "Teenager",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "66bca178-9920-4ec3-91e9-0d5b8a76dba1",
          "name": "Setsu Oiwa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6e/Setsu.jpg",
          "gender": "Female",
          "age": "50-60",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5b8e4413-f943-40ba-8f9f-0ba059a401f0",
          "name": "Hisako",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/93/Hisako.png",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Dark brown",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "c827feae-8ccf-4ced-84cb-bc3e226b1cd1",
          "name": "Yoriko Sasaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Yoriko_Sasaki.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "9d3730cb-ec15-4bf9-a2fb-a7772e5e1c03",
          "name": "Sayaka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/79/Sayaka.jpg",
          "gender": "Female",
          "age": "11",
          "eye_color": "Teal",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "31b49ef6-ee60-4603-b983-e67fa0718aa9",
          "name": "Kiyomasa Ōiwa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d7/Kiyomasa.jpg",
          "gender": "Male",
          "age": "50-60",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5d52d16f-ce72-41bd-8d88-436e206d9449",
          "name": "Doctor Yamashita",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8a/Yamashita.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Navy blue",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "56e423c4-d9a1-44c4-8bdb-1cab45fbf63e",
          "name": "The Marsh House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8c/Marsh_house.jpg",
          "climate": "Mild",
          "terrain": "Marsh",
          "surface_water": "60",
          "residents": []
        }
      ],
      "vehicles": []
    },{
      "id": "67405111-37a5-438f-81cc-4666af60c800",
      "title": "The Wind Rises",
      "description": "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2d/The_Wind_Rises.jpg",
      "release_date": "2013",
      "rt_score": "89",
      "people": [
        {
          "id": "97746fd8-1875-4331-8bc6-f43ae25501cd",
          "name": "Naoko Satomi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Nahoko_Satomi.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Navy blue",
          "specie": "Human"
        },
        {
          "id": "07b01fdb-87fb-4f3b-a888-b90cf13bc386",
          "name": "Jiro Horikoshi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d7/Jirou_Horikoshi.jpg",
          "gender": "Male",
          "age": "42",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "53b1d8f7-adb3-49b3-bece-52cda0915e7a",
          "name": "Castorp",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Castorp.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Light brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "ccc07f5c-28bd-4446-aee9-827c61d7f9f1",
          "name": "Kiro Honjo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6c/Kiro_Honjo.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "54eda936-7f86-4bd8-9493-56e0eebd8eb1",
          "name": "Kayo Horikoshi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/91/Kayo_Horikoshi.jpg",
          "gender": "Female",
          "age": "10",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "b2453b6b-0718-4740-a0c4-207f12f1903a",
          "name": "Caproni",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/66/Caproni.jpg",
          "gender": "Male",
          "age": "45",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "c8321219-a816-4921-9a58-48c858becb97",
          "name": "Mr. Kurokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Kurokawa.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Navy blue",
          "specie": "Human"
        },
        {
          "id": "50e9d375-afaa-4769-a31d-dee8e37aa8ba",
          "name": "Hattori",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/Hattori.jpg",
          "gender": "Male",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "2b380662-626d-42fb-9e3a-14f951201c8b",
          "name": "Nagoya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/20/Kazetachinu009.jpg",
          "climate": "Damp",
          "terrain": "Hill",
          "surface_water": "20",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "411f66ed0-771c-46d3-8f68-a3b65c6dd91c",
          "name": "Mitsubishi 1MF9 ",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Kazetachinu044.jpg",
          "description": "The Mitsubishi 1MF9 or Mitsubishi Experimental Taka-type Carrier Fighter was a prototype Japanese fighter aircraft of the 1920s. It was a single-engined, single-seat biplane intended to operate from the Imperial Japanese Navy's aircraft carriers, but only two were built, with the type being rejected by the Navy.",
          "vehicle_class": "War plane",
          "length": "8",
          "pilot": {
            "id": "07b01fdb-87fb-4f3b-a888-b90cf13bc386",
            "name": "Jiro Horikoshi"
          }
        }
      ]
    }]
    const resultadoEsperado = [{
      "id": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
      "title": "When Marnie Was There",
      "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
      "director": "Hiromasa Yonebayashi",
      "producer": "Yoshiaki Nishimura",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7a/When_Marnie_Was_There.jpg",
      "release_date": "2014",
      "rt_score": "92",
      "people": [
        {
          "id": "4a6a60d1-cb07-464f-889c-fecaff19b4ef",
          "name": "Marnie",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/21/Marnie.jpg",
          "gender": "Female",
          "age": "12",
          "eye_color": "Green",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "28d07ace-c309-48c6-b48e-ae2ece3a238c",
          "name": "Anna Sasaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/ae/Anna.png",
          "gender": "Female",
          "age": "12",
          "eye_color": "Blue",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d0a0bd7c-7521-45a2-a681-573a67f34a5b",
          "name": "Emily",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cd/13_year_old_Emily.png",
          "gender": "Female",
          "age": "20",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "08fdd37a-2cf0-4f91-ae1c-344ecff39753",
          "name": "Kazuhiko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/Kazuhiko.jpg",
          "gender": "Male",
          "age": "Teenager",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "66bca178-9920-4ec3-91e9-0d5b8a76dba1",
          "name": "Setsu Oiwa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6e/Setsu.jpg",
          "gender": "Female",
          "age": "50-60",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5b8e4413-f943-40ba-8f9f-0ba059a401f0",
          "name": "Hisako",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/93/Hisako.png",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Dark brown",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "c827feae-8ccf-4ced-84cb-bc3e226b1cd1",
          "name": "Yoriko Sasaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Yoriko_Sasaki.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "9d3730cb-ec15-4bf9-a2fb-a7772e5e1c03",
          "name": "Sayaka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/79/Sayaka.jpg",
          "gender": "Female",
          "age": "11",
          "eye_color": "Teal",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "31b49ef6-ee60-4603-b983-e67fa0718aa9",
          "name": "Kiyomasa Ōiwa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d7/Kiyomasa.jpg",
          "gender": "Male",
          "age": "50-60",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "5d52d16f-ce72-41bd-8d88-436e206d9449",
          "name": "Doctor Yamashita",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8a/Yamashita.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Navy blue",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "56e423c4-d9a1-44c4-8bdb-1cab45fbf63e",
          "name": "The Marsh House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8c/Marsh_house.jpg",
          "climate": "Mild",
          "terrain": "Marsh",
          "surface_water": "60",
          "residents": []
        }
      ],
      "vehicles": []
    }]
    expect(filterDirector( dataSetDePeliculas,nombreDeDirector)).toEqual(resultadoEsperado);
  });
});

describe('Tests para ordenarPorNumeros', () => {
  it('Test para validar las películas de la mejor calificada a la peor', () => {
    const peliculas = [
      {
        "title": "Only Yesterday",
        "rt_score": "100",
      },
      {
        "title": "Howl's Moving Castle",
        "rt_score": "87",
      },
      {
        "title": "Tales from Earthsea",
        "rt_score": "41",
      }
    ]
    const resultadoEsperado = [
      {
        "title": "Only Yesterday",
        "rt_score": "100",
      },
      {
        "title": "Howl's Moving Castle",
        "rt_score": "87",
      },
      {
        "title": "Tales from Earthsea",
        "rt_score": "41",
      }
    ]
    const peliculasfiltradas = ordenarPorNumeros (peliculas, 'mejor');
    expect(peliculasfiltradas).toEqual(resultadoEsperado);
  });
  it('Test para validar las películas de la peor calificada a la mejor', () => {
    const peliculas = [
      {
        "title": "Tales from Earthsea",
        "rt_score": "41",
      },
      {
        "title": "Howl's Moving Castle",
        "rt_score": "87",
      },
      {
        "title": "Only Yesterday",
        "rt_score": "100",
      }
    ]
    const resultadoEsperado = [
      {
        "title": "Tales from Earthsea",
        "rt_score": "41",
      },
      {
        "title": "Howl's Moving Castle",
        "rt_score": "87",
      },
      {
        "title": "Only Yesterday",
        "rt_score": "100",
      }
    ]
    const peliculasfiltradas = ordenarPorNumeros (peliculas, 'peor');
    expect(peliculasfiltradas).toEqual(resultadoEsperado);
  });
});