function SocialMediaShareService($window) {

  this.fbSDK = $window.fbAsyncInit = function() {
        FB.init({
          appId      : '1368021493228294',
          xfbml      : true,
          version    : 'v3.2'
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

    this.fbShare = (bandName) => {
      $window.FB.ui({
        method: 'share',
        href: 'https://mybanderoo.com',
        quote: 'I just used Banderoo to name my band "' + bandName + '"'
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
