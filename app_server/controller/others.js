module.exports.about = function(req, res) {
    res.render('generic-text', {
    title: 'About Tourism',
    content: 'Tourism is travel for pleasure or business, and the commercial activity of providing and supporting such travel."Welcome to Explore Wonders, where we invite you to explore the worlds hidden gems and discover unforgettable travel experiences. Our mission is to inspire and guide travelers to make the most of their journeys, providing them with the information they need to create lasting memories."Our mission at Explore Wonders is to empower and inspire travelers to embark on enriching journeys, fostering a deep appreciation for diverse cultures, breathtaking landscapes, and the beauty of the world around us. We strive to provide authentic and insightful travel content that guides our readers to make informed decisions and create meaningful travel experiences.'
    });
    };
    
  
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
      res.render('signin', { title: 'signin' });
      content: '"Welcome back! Sign in to access your account and personalize your Explore Wonders experience.""Ready to continue your travel adventure? Sign in now and let the journey begin!"'
    }
    /* GET 'register' page */
    module.exports.register = function(req, res){
      res.render('register', { title: 'register' });
      content: '"Create an Account on Explore Wonders""Join the Explore Wonders community! Register now to unlock exclusive features and personalized recommendations.'
    }