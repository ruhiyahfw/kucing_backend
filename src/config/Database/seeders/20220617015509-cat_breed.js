'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('breed_cats', [
      {
          breed_name: 'Abyssinian',
          photo_path: "images/breeds/Abyssinian.jpg"
      },
      {
          breed_name: 'American Bobtail',
          photo_path: "images/breeds/American Bobtail.jpg"
      },
      {
          breed_name: 'American Curl',
          photo_path: "images/breeds/American Curl.png"
      },
      {
          breed_name: 'American Shorthair',
          photo_path: "images/breeds/American Shorthair.jpg"
      },
      {
          breed_name: 'American Wirehair',
          photo_path: "images/breeds/American Wirehair.jpg"
      },
      {
          breed_name: 'Balinese',
          photo_path: "images/breeds/Balinese.jpg"
      },
      {
          breed_name: 'Bengal',
          photo_path: "images/breeds/Bengal.jpg"
      },
      {
          breed_name: 'Birman',
          photo_path: "images/breeds/Birman.jpg"
      },
      {
          breed_name: 'Bombay',
          photo_path: "images/breeds/Bombay.jpg"
      },
      {
          breed_name: 'British Shorthair',
          photo_path: "images/breeds/British Shorthair.jpg"
      },
      {
          breed_name: 'Burmese',
          photo_path: "images/breeds/Burmese.jpg"
      },
      {
          breed_name: 'Burmilla',
          photo_path: "images/breeds/Burmilla.jpg"
      },
      {
          breed_name: 'Chartreux',
          photo_path: "images/breeds/Chartreux.jpg"
      },
      {
          breed_name: 'Cornish Rex',
          photo_path: "images/breeds/Cornish Rex.jpg"
      },
      {
          breed_name: 'Devon Rex',
          photo_path: "images/breeds/Devon Rex.jpg"
      },
      {
          breed_name: 'Domestic',
          photo_path: "images/breeds/Domestic.jpg"
      },
      {
          breed_name: 'Egyptian Mau',
          photo_path: "images/breeds/Egyptian Mau.jpg"
      },
      {
          breed_name: 'Exotic',
          photo_path: "images/breeds/Exotic.jpg"
      },
      {
          breed_name: 'Havana Brown',
          photo_path: "images/breeds/Havana Brown.jpg"
      },
      {
          breed_name: 'Himalaya',
          photo_path: "images/breeds/Himalaya.jpg"
      },
      {
          breed_name: 'Japanese Bobtail',
          photo_path: "images/breeds/Japanese Bobtail.jpg"
      },
      {
          breed_name: 'Khao Manee',
          photo_path: "images/breeds/Khao Manee.jpg"
      },
      {
          breed_name: 'Korat',
          photo_path: "images/breeds/Korat.jpg"
      },
      {
          breed_name: 'LaPerm',
          photo_path: "images/breeds/LaPerm.jpg"
      },
      {
          breed_name: 'Lykoi',
          photo_path: "images/breeds/Lykoi.png"
      },
      {
          breed_name: 'Maine Coon',
          photo_path: "images/breeds/Maine Coon.jpg"
      },
      {
          breed_name: 'Manx',
          photo_path: "images/breeds/Manx.jpg"
      },
      {
          breed_name: 'Munchkin',
          photo_path: "images/breeds/Munchkin.jpg"
      },
      {
          breed_name: 'Norwegian Forest',
          photo_path: "images/breeds/Norwegian Forest.jpg"
      },
      {
          breed_name: 'Ocicat',
          photo_path: "images/breeds/Ocicat.jpg"
      },
      {
          breed_name: 'Oriental',
          photo_path: "images/breeds/Oriental.jpg"
      },
      {
          breed_name: 'Persian',
          photo_path: "images/breeds/Persian.jpg"
      },
      {
          breed_name: 'RagaMuffin',
          photo_path: "images/breeds/RagaMuffin.jpg"
      },
      {
          breed_name: 'Ragdoll',
          photo_path: "images/breeds/Ragdoll.jpg"
      },
      {
          breed_name: 'Russian Blue',
          photo_path: "images/breeds/Russian Blue.jpg"
      },
      {
          breed_name: 'Scottish Fold',
          photo_path: "images/breeds/Scottish Fold.jpg"
      },
      {
          breed_name: 'Selkirk Rex',
          photo_path: "images/breeds/Selkirk Rex.jpg"
      },
      {
          breed_name: 'Siamese',
          photo_path: "images/breeds/Siamese.jpg"
      },
      {
          breed_name: 'Siberian',
          photo_path: "images/breeds/Siberian.jpg"
      },
      {
          breed_name: 'Singapura',
          photo_path: "images/breeds/Singapura.jpg"
      },
      {
          breed_name: 'Snowshoe',
          photo_path: "images/breeds/Snowshoe.png"
      },
      {
          breed_name: 'Somali',
          photo_path: "images/breeds/Somali.jpg"
      },
      {
          breed_name: 'Sphynx',
          photo_path: "images/breeds/Sphynx.jpg"
      },
      {
          breed_name: 'Tonkinese',
          photo_path: "images/breeds/Tonkinese.jpg"
      },
      {
          breed_name: 'Toybob',
          photo_path: "images/breeds/Toybob.png"
      },
      {
          breed_name: 'Turkish Angora',
          photo_path: "images/breeds/Turkish Angora.png"
      },
      {
          breed_name: 'Turkish Van',
          photo_path: "images/breeds/Turkish Van.jpg"
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('breed_cats', null, {});
  }
};
