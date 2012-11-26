﻿/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.AksjonerView = Backbone.View.extend({
        el: ".aksjoner p",

        render: function () {
            this.$el.html(this.collection.models[0].get("navn"));
            return this;
        }

    });

})();