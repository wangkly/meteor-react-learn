import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export default Task = new Mongo.Collection('task');

Meteor.methods({
    'addTask':function(text){
        Task.insert({text,  createdAt:new Date()})
    }
})