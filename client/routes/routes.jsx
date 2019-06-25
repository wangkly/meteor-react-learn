import React,{Component} from 'react';

import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import App from '/imports/ui/App';
import Hello from '/imports/ui/Hello';
import Todo from '/imports/ui/todo';
import Links from '/imports/ui/Info';

FlowRouter.route('/hello',{
    name:'Hello',
    action(){
      mount(App,{
        content: <Hello />
      })
    }
  })


FlowRouter.route('/links',{
  name:'Links',
  action(){
    mount(App,{
      content:<Links />
    })
  }
})  


FlowRouter.route('/todo',{
  name:'Todo',
  action(){
    mount(App,{
      content:<Todo />
    })
  }
})  