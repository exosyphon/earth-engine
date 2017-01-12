class PhotoFinder
  def call
    return unless fetch_new_records?

    conn = Faraday.new(:url => 'https://www.reddit.com') do |faraday|
      faraday.request :url_encoded
      faraday.response :logger
      faraday.adapter Faraday.default_adapter
    end

    conn.headers[:user_agent] = 'ASDFASdfasdfasFDasdfas'

    make_request(conn)
  end

  private

  def fetch_new_records?
    return true if Record.all.count == 0
    Record.all.last.created_at < 1.day.ago
  end

  def make_request(conn)
    response = conn.get do |req|
      req.url '/r/EarthPorn/top.json?limit=50'
    end

    json_body = JSON.parse(response.body)
    create_records(json_body['data']['children'])
  end

  def create_records(children)
    children.each do |child|
      url = child['data']['preview']['images'].first['source']['url']
      title = child['data']['title']
      Record.create(title: title, url: url) unless Record.where(url: url).exists?
    end
  end
end
