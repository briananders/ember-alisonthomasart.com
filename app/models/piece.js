import DS from 'ember-data';

var Piece = DS.Model.extend({
  // name: DS.attr('string'),
  year: DS.attr('number'),
  size: DS.attr('string'),
  media: DS.attr('string'),
  animal: DS.attr('string'),
  src380: DS.attr('string'),
  src760: DS.attr('string'),
  src1040: DS.attr('string'),
  src2080: DS.attr('string')
});

Piece.reopenClass({
  FIXTURES: [
    {
      id: 'Akeela',
      year: '2013',
      size: '14" x 17&frac12;"',
      media: 'Paper, 9 different patterns',
      animal: 'Coyote',
      src380: 'images/piece/380/Akeela.jpg',
      src760: 'images/piece/760/Akeela.jpg',
      src1040: 'images/piece/1040/Akeela.jpg',
      src2080: 'images/piece/2080/Akeela.jpg'
    },{
      id: 'Alfred',
      year: '2013',
      size: '11" x 24"',
      media: 'Paper, 5 different patterns',
      animal: "Grévy's Zebra",
      src380: 'images/piece/380/Alfred.jpg',
      src760: 'images/piece/760/Alfred.jpg',
      src1040: 'images/piece/1040/Alfred.jpg',
      src2080: 'images/piece/2080/Alfred.jpg'
    },{
      id: 'Amelia',
      year: '2013',
      size: '15" x 14&frac12;"',
      media: 'Paper, 5 different patterns',
      animal: 'Cheetah',
      src380: 'images/piece/380/Amelia.jpg',
      src760: 'images/piece/760/Amelia.jpg',
      src1040: 'images/piece/1040/Amelia.jpg',
      src2080: 'images/piece/2080/Amelia.jpg'
    },{
      id: 'Bruce',
      year: '2013',
      size: '19&frac12;" x 32"',
      media: 'Paper, 7 different patterns',
      animal: 'Eastern Lowland Gorilla',
      src380: 'images/piece/380/Bruce.jpg',
      src760: 'images/piece/760/Bruce.jpg',
      src1040: 'images/piece/1040/Bruce.jpg',
      src2080: 'images/piece/2080/Bruce.jpg'
    },{
      id: 'Chloe',
      year: '2013',
      size: '14&frac12;" x 20"',
      media: 'Paper, 7 different patterns',
      animal: 'Giraffe',
      src380: 'images/piece/380/Chloe.jpg',
      src760: 'images/piece/760/Chloe.jpg',
      src1040: 'images/piece/1040/Chloe.jpg',
      src2080: 'images/piece/2080/Chloe.jpg'
    },{
      id: 'Colin',
      year: '2013',
      size: '15" x 18"',
      media: 'Paper, 7 different patterns',
      animal: 'Fennec Fox',
      src380: 'images/piece/380/Colin.jpg',
      src760: 'images/piece/760/Colin.jpg',
      src1040: 'images/piece/1040/Colin.jpg',
      src2080: 'images/piece/2080/Colin.jpg'
    },{
      id: 'Gerald',
      year: '2013',
      size: '19&frac12;" x 27&frac12;"',
      media: 'Paper, 13 different patterns',
      animal: "Thompson's Gazelle",
      src380: 'images/piece/380/Gerald.jpg',
      src760: 'images/piece/760/Gerald.jpg',
      src1040: 'images/piece/1040/Gerald.jpg',
      src2080: 'images/piece/2080/Gerald.jpg'
    },{
      id: 'Jimmy',
      year: '2013',
      size: '22" x 33"',
      media: 'Paper, 15 different patterns',
      animal: 'African Lion',
      src380: 'images/piece/380/Jimmy.jpg',
      src760: 'images/piece/760/Jimmy.jpg',
      src1040: 'images/piece/1040/Jimmy.jpg',
      src2080: 'images/piece/2080/Jimmy.jpg'
    },{
      id: 'Lola',
      year: '2013',
      size: '15&frac12;" x 15&frac12;"',
      media: 'Paper, 15 different patterns',
      animal: "Linnaeus's Two-toed Sloth",
      src380: 'images/piece/380/Lola.jpg',
      src760: 'images/piece/760/Lola.jpg',
      src1040: 'images/piece/1040/Lola.jpg',
      src2080: 'images/piece/2080/Lola.jpg'
    },{
      id: 'Napoleon',
      year: '2013',
      size: '14" x 17"',
      media: 'Paper, 15 different patterns',
      animal: 'Alpaca',
      src380: 'images/piece/380/Napoleon.jpg',
      src760: 'images/piece/760/Napoleon.jpg',
      src1040: 'images/piece/1040/Napoleon.jpg',
      src2080: 'images/piece/2080/Napoleon.jpg'
    },{
      id: 'Petunia',
      year: '2013',
      size: '14&frac12;" x 22"',
      media: 'Paper, 6 different patterns',
      animal: 'Red Panda',
      src380: 'images/piece/380/Petunia.jpg',
      src760: 'images/piece/760/Petunia.jpg',
      src1040: 'images/piece/1040/Petunia.jpg',
      src2080: 'images/piece/2080/Petunia.jpg'
    },{
      id: 'Sally',
      year: '2013',
      size: '6" x 9"',
      media: 'Paper, 7 different patterns',
      animal: 'Hippopotamus',
      src380: 'images/piece/380/Sally.jpg',
      src760: 'images/piece/760/Sally.jpg',
      src1040: 'images/piece/1040/Sally.jpg',
      src2080: 'images/piece/2080/Sally.jpg'
    },{
      id: 'Sampson',
      year: '2013',
      size: '15&frac12;" x 16&frac12;"',
      media: 'Paper, 10 different patterns',
      animal: 'Polar Bear',
      src380: 'images/piece/380/Sampson.jpg',
      src760: 'images/piece/760/Sampson.jpg',
      src1040: 'images/piece/1040/Sampson.jpg',
      src2080: 'images/piece/2080/Sampson.jpg'
    },{
      id: 'Sir Jeffrey',
      year: '2013',
      size: '12" x 17"',
      media: 'Paper, 7 different patterns',
      animal: 'Koala',
      src380: 'images/piece/380/SirJeffrey.jpg',
      src760: 'images/piece/760/SirJeffrey.jpg',
      src1040: 'images/piece/1040/SirJeffrey.jpg',
      src2080: 'images/piece/2080/SirJeffrey.jpg'
    },{
      id: 'Viktor',
      year: '2013',
      size: '14&frac12;" x 26&frac12;"',
      media: 'Paper, 21 different patterns',
      animal: 'Shoebill Pelican',
      src380: 'images/piece/380/Viktor.jpg',
      src760: 'images/piece/760/Viktor.jpg',
      src1040: 'images/piece/1040/Viktor.jpg',
      src2080: 'images/piece/2080/Viktor.jpg'
    }
  ]
});

export default Piece;
