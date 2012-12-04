﻿/// <reference path="_references.js" />

var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    "": "visAksjoner",
    "aksjon/opprett": "opprettAksjon",
    "aksjon/:id": "visAksjon",
    "deltaker" : "visDeltakere",
    "meldinger" : "visMeldinger"
  },

  visAksjoner: function() {
    console.log("i visAksjoner");
    var aksjoner = new app.Aksjoner();
    aksjoner.fetch({
        success: function () {
            var view = new app.AksjonerView({ collection: aksjoner });
            view.render();
        }
    });
  },

  visAksjon: function(id) {
    var model = new app.AksjonModel();
    model.set({id: id});
    model.fetch({success: function(response) {
      var visAksjon = new app.AksjonView();
      visAksjon.render(response);
    }});
  },

  opprettAksjon: function() {
    var opprettAksjon = new app.OpprettAksjonView();
    opprettAksjon.render();
  },

  visDeltakere: function(){
	  var deltakere = new app.Deltakere();
	  deltakere.fetch({
	        success: function () {
	            var view = new app.DeltakereView({ collection: deltakere });
	            view.render();
	        }
	    });
  },

  visMeldinger: function(){
    var meldinger = new app.Meldinger();
    meldinger.fetch({
        success: function() {
          var view = new app.MeldingerView({collection: meldinger});
          view.render();
        }
    })
  }


});

$(function() {
   "use strict";
    new app.Router();
    Backbone.history.start();
});
