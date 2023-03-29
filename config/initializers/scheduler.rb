require 'rufus-scheduler'
require 'open-uri'
require 'net/http'
require 'json'


s = Rufus::Scheduler.singleton

s.every '5s' do

    # Returns last two days of data for blue rate
    url = 'https://api.bluelytics.com.ar/v2/evolution.json?days=4'
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    result = JSON.parse(response.body)
    # puts result['blue']['value_avg']


    current_value_avg = (result[1]['value_sell'] + result[1]['value_buy']) / 2
    prev_value_avg = (result[3]['value_sell'] + result[3]['value_buy']) / 2
    change_ratio = current_value_avg/prev_value_avg

    product = Product.first
    base_price = product.price
    new_price = base_price * change_ratio
    product.update!(price: new_price.to_i)
    

    # I want to see the day before price, and the new price
    


end