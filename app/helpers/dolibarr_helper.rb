module DolibarrHelper

  def set_connection
    base_url = ENV["api_url"]
    conn = Faraday.new(
      url: base_url,
      # params: {},
      headers: {'Content-Type' => 'application/json', 'DOLAPIKEY' => '3c44101b1c0b1833a1c92b529e06d981f4459812'},
      ssl: {:verify => false}
    )
    return conn
  end

  def dolibarr_api_get(method, params)
    base_uri = "/dolibarr/api/index.php"
    status = 0
    data = {}

    begin
      conn = ApplicationController.helpers.set_connection
      response = conn.get("#{base_uri}#{method}", params, {})
      status = response.status
      data = JSON.parse(response.body)
    rescue Exception => e
      p e.message
      Rails.logger.warn "dolibarr_api_get error: #{e.message}"
    end

    return status, data
  end

  def dolibarr_api_post(method, params)
    base_uri = "/dolibarr/api/index.php"
    status = 0
    data = {}

    begin
      conn = ApplicationController.helpers.set_connection
      response = conn.post("#{base_uri}#{method}") do |req|
        req.params['DOLAPIKEY'] = ""
        req.body = params.to_json
      end
      status = response.status
      if status == 200
        data = JSON.parse(response.body)["success"]
      else
        data = JSON.parse(response.body)["error"]
      end
    rescue Exception => e
      p e.message
      Rails.logger.warn "dolibarr_api_post error: #{e.message}"
    end

    return status, data
  end

  # status, token = ApplicationController.helpers.dolibarr_login(ENV["test_login"], ENV["test_password"])
  def dolibarr_login(login, password)
    token = ""
    method = "/login"
    params = {login: login, password: password}
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params)
    token = data["token"] if status == 200

    return status, token
  end

  # status, data = ApplicationController.helpers.dolibarr_orders
  def dolibarr_orders
    method = "/orders"
    params = {}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_users
  def dolibarr_users
    method = "/users"
    params = {}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

end
