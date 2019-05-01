FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y postgresql-client curl \
		&& curl -sL https://deb.nodesource.com/setup_10.x | bash - \
		&& apt-get update && apt-get install -y nodejs

RUN mkdir /band-name-generator

WORKDIR /band-name-generator

COPY Gemfile /band-name-generator/Gemfile

COPY Gemfile.lock /band-name-generator/Gemfile.lock

RUN bundle install

COPY . /band-name-generator

RUN npm install && bundle exec rake assets:precompile

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh

# ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
