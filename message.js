! function () {
  var view = document.querySelector('section.message')

  var model = {
    init: function () {
      var APP_ID = 'Mgyd4BsqnbuXyX3iMpVS6kt4-gzGzoHsz'
      var APP_KEY = 'JmPTXsy7OmaxUNI7co13YIeq'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function () {
      var query = new AV.Query('message')
      return query.find()
    },
    save: function (name, content) {
      var Message = AV.Object.extend('message')
      var message = new Message()
      return message.save({
        'name': name,
        'content': content
      })
    }
  }

  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function(view, model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('form')
      this.form = view.querySelector('#postMessageForm')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },

    loadMessages: function () {
      this.model.fetch().then((messages) => {
        // 成功获得实例
        // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
        let array = messages.map((item) => item.attributes)
        array.forEach((item) => {
          let li = document.createElement('li')
          li.innerText = `${item.name}:${item.content}`
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
        })
      })
    },
    bindEvents: function () {
      this.form.addEventListener('submit',  (e)=> {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
      this.model.save(name, content).then((object) => {
        console.log('保存成功')
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view,model)
}.call()