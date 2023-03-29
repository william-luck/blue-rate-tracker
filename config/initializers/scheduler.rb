require 'rufus-scheduler'
require 'open-uri'
require 'net/http'
require 'json'


scheduler = Rufus::Scheduler.singleton

# Every day at 9:00 AM UTC (6:00 AM Argentina Standard Time)
scheduler.cron '00 09 * * *' do

    # Returns last two days of data for blue rate
    url = 'https://api.bluelytics.com.ar/v2/evolution.json?days=4'
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    result = JSON.parse(response.body)

    # Calculates change in price
    current_value_avg = (result[1]['value_sell'] + result[1]['value_buy']) / 2
    prev_value_avg = (result[3]['value_sell'] + result[3]['value_buy']) / 2
    change_ratio = current_value_avg/prev_value_avg

    # Updates each product price according to change ratio
    products = Product.all
    products.each{ |product| 
        base_price = product.price
        new_price = base_price * change_ratio
        product.update!(price: new_price.to_i)
    }

end