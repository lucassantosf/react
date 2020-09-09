"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Task extends Model {
  projetc() {
    return this.belongsTo("App/Models/Projeto");
  }
  user() {
    return this.belongsTo("App/Models/User");
  }
  file() {
    return this.belongsTo("App/Models/File");
  }
}

module.exports = Task;
