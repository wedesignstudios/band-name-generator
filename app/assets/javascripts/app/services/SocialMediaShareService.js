function SocialMediaShareService($window) {

  this.fbSDK = $window.fbAsyncInit = function() {
        FB.init({
          appId      : '1368021493228294',
          xfbml      : true,
          version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

    this.fbFeed = (bandName) => {
      $window.FB.ui({
        method: 'feed',                
        link: 'https://mybanderoo.com',
        title: 'I just used Banderoo to name my band "' + bandName + '"',
        picture: 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg',
        description: 'Naming your band is hard. Banderoo makes it easy. And fun!',
        caption: 'mybanderoo.com',
      }, function(response){});
    }

    this.twtrTweet = (name) => {
      return `https:\/\/twitter.com/intent/tweet?text=I+just+used+Banderoo+to+name+my+band+%22${name}%22&hashtags=bands,bandname,banderoo&url=https%3A%2F%2Fmybanderoo.com%2F`;
    }

}

angular
  .module('app')
  .service('SocialMediaShareService', SocialMediaShareService);