var APP_ID = 'Mgyd4BsqnbuXyX3iMpVS6kt4-gzGzoHsz';
    var APP_KEY = 'JmPTXsy7OmaxUNI7co13YIeq';

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });

    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
      words: 'Hello World!'
    }).then(function (object) {
      alert('LeanCloud Rocks!');
    })