import Vue from 'vue';
import Vuex from 'vuex';

import villains from './villains'
import heroes from './heroes'
import player from './player'
import ai from './ai'
import game from './game'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    villains,
    heroes,
    player,
    ai,
    game
  }
});