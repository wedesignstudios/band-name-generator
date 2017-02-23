## Configure Rack CORS Middleware, so that CloudFront can serve our assets.
## See https://github.com/cyu/rack-cors

if defined? Rack::Cors
  Rails.configuration.middleware.insert_before 0, Rack::Cors do
    allow do
        origins %w[
            https://mybanderoo.com
             http://mybanderoo.com
            https://www.mybanderoo.com
             http://www.mybanderoo.com
            https://mybanderoo.herokuapp.com
             http://mybanderoo.herokuapp.com
        ]
        resource '/assets/*'
    end
  end
end