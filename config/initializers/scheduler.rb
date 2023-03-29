require 'rufus-scheduler'
require 'open-uri'
require 'net/http'
require 'json'


s = Rufus::Scheduler.singleton

s.every '5s' do

    url = "https://api.bluelytics.com.ar/v2/latest"
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    result = JSON.parse(response.body)
    puts result['blue']['value_avg']

# #   Rails.logger.info "hello, it's #{Time.now}"
# #   Rails.logger.flush
end