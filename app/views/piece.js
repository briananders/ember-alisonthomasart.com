import Ember from 'ember';

export default Ember.View.extend({

  classNames: ['piece-view'],

  didInsertElement: function() {
    var art = $("#art"),
      window_size = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if(window_size > 768) {

      art.attr('data-zoom-image', art.attr('src'));

      art.elevateZoom({
        zoomType   : "lens",
        lensShape : "round",
        lensSize : 300,
        cursor: "crosshair",
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 300
      });

    } else {
      $('meta[name=viewport]').attr('content', "user-scalable=yes, initial-scale=1, maximum-scale=10, minimum-scale=0.5, width=device-width, height=device-height, target-densitydpi=device-dpi");
    }
  },

  willDestroyElement: function() {
    var art = $("#art");
    // art.removeAttr('data-zoom-image');
    $.removeData(art, 'elevateZoom');//remove zoom instance from image
    $('.zoomContainer').remove();// remove zoom container from DOM
  }

});
