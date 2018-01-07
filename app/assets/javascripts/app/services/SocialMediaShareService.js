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
        link: 'http://mybanderoo.com',
        title: 'I just used Banderoo to name my band "' + bandName + '"',
        picture: 'http://cdn.mybanderoo.com/assets/facebook_share_image-154be9fc622403b3cc5afbd80fa58cdbdbd48f90a099193cea1bebddbda2699b.png',
        description: 'Need a band name? Banderoo makes naming your band easy. And fun!',
        caption: 'mybanderoo.com',
      }, function(response){});
    }

    this.twtrTweet = (name) => {
      return `https:\/\/twitter.com/intent/tweet?text=I+just+used+Banderoo+to+name+my+band+%22${name}%22&hashtags=bands,bandname,banderoo&url=https%3A%2F%2Fmybanderoo.com%2F`;
    }

}

SocialMediaShareService.$inject = ['$window'];

angular
  .module('app')
  .service('SocialMediaShareService', SocialMediaShareService);