// #!/usr/bin/env node

// const fs = require("fs");
// const path = require("path");
// const axios = require("axios").default;
// const download = require('image-downloader')

// const DEF_CACHE_PATH = path.join(process.cwd(), "src", "cache");
// const DEF_ASSETS_PATH = path.join(process.cwd(), "src", "assets");
// const DEF_PUBLIC_PATH = path.join(process.cwd(), "public");

// const DEF_PUBLIC_IMAGES_PATH = path.join(process.cwd(), "public",'images');

// const endPoints = require("../src/services/PokeV2").endPoints;

// function delay(ms) {
//   var init = new Date().getTime();
//   var end = init;
//   while (end < init + ms) {
//     end = new Date().getTime();
//   }
// }

// const pokemonList = async () => {
//   console.log("@ POKEMON LIST")
//   try {
//     const list = [];

//     let index = 1;

//     while (index <= 898) {
//       const res = await axios.get(endPoints.Pokemon + index);
//       console.log("-> " + index, "::", res.status);

//       if (res.status === 200) {
//         const {
//           data
//         } = res;
//         const item = {
//           id: data.id,
//;id           name: data.name,
//;           types: data.types.map((i) => i.type.name),
//;           height: data.height,
//;           weight: data.weight,
//;           default: data.is_default,
//;           stats: data.stats.map((i) => {
//             return {
//               name: i.stat.name,
//               base: i.base_stat,
//               url: i.stat.url,
//             };
//           }),
//         };
//         list.push(item);
//         index++;
//         delay(300);
//       }
//     }
//     fs.writeFile(
//       path.join(DEF_CACHE_PATH, "pokemons.json"),
//       JSON.stringify(list),
//       function (err) {
//         if (err) throw err;
//         console.log("Done!");
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// const pokemonSpriteList = async () => {
//   console.log("@ POKEMON SPRITE LIST")
//   try {
//     const list = [];

//     let index = 1;

//     while (index <= 898) {
//       const res = await axios.get(endPoints.Pokemon + index);
//       console.log("-> " + index, "::", res.status);

//       if (res.status === 200) {
//         const {
//           data
//         } = res;
//         const item = {
//           id: data.id,
//;id           name: data.name,
//;           sprites: data.sprites
//         };
//         list.push(item);
//         index++;
//         delay(100);
//       }
//     }
//     fs.writeFile(
//       path.join(DEF_CACHE_PATH, "sprites.json"),
//       JSON.stringify(list),
//       function (err) {
//         if (err) throw err;
//         console.log("Done!");
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// const pokemonImageDownload = async () => {
//   console.log("@ POKEMON IMAGE DOWNLOAD")
//   try {

//     let index = 1;

//     while (index <= 898) {
//       const res = await axios.get(endPoints.Pokemon + index);
//       console.log("-> " + index, "::", res.status);

//       if (res.status === 200) {
//         const {
//           data
//         } = res;

//         const item = {
//           id: data.id,
//           name: data.name,
//           sprites: {
//             back_default: data.sprites.back_default,
//;back_default             back_female: data.sprites.back_female,
//;             back_shiny: data.sprites.back_shiny,
//;             back_shiny_female: data.sprites.back_shiny_female,
//;             front_default: data.sprites.front_default,
//;             front_female: data.sprites.front_female,
//;             front_shiny: data.sprites.front_shiny,
//;             front_shiny_female: data.sprites.front_shiny_female
//           }
//         }

//         Object.entries(item.sprites).forEach(async (i) => {
//           //console.log(i)
//           if (i[1]) {

//             const ID = item.id.toString().padStart(3, '0')
//             const NAME = item.name.split(' ').join('').split('_').join('')
//             const SUFFIX = i[0].split('_').join('')

//             const fn = `${ID}-${NAME}-${SUFFIX}.png`

//             const options = {
//               url: i[1],
//               dest: path.join(DEF_PUBLIC_IMAGES_PATH, 'pokemons', fn.toUpperCase())
//             }
//             await download.image(options)
//             .then(({
//               filename
//             }) => {
//               console.log('Saved to', filename)
//             })
//             .catch((err) => console.error(err))
//             delay(200);
//           }
//         })
//       };
//       delay(1000);
//       index++;
//     }

//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// const rebuild = async () => {
//   await pokemonList();
//   await pokemonSpriteList();
// }

// rebuild()
