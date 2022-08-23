module DolibarrHelper

  def get_token(ref)
    config = Rails.configuration.database_configuration
    host = config[Rails.env]["host"]
    username = config[Rails.env]["username"]
    password = config[Rails.env]["password"]

    client = Mysql2::Client.new(:host => host, :username => username, :password => password, :database => 'dolibarrdebian' )
    results = client.query("SELECT api_key FROM llx_user WHERE rowid='#{ref}'")
    client.close

    api_key = results.first["api_key"]

    return api_key
  end

  def set_user_access_token(user)
    api_key = ApplicationController.helpers.get_token(user.ref)
    user.update(access_token: api_key)
  end

  # ApplicationController.helpers.current_user(args)
  def current_user(args)
    p args
    (args.nil? || (args.class == Array && args.empty?)) ? User.first : args
  end

  def set_connection(user)
    base_url = ENV["api_url"]
    # user = ApplicationController.helpers.current_user user
    api_key = user.access_token

    conn = Faraday.new(
      url: base_url,
      # params: {},
      headers: {'Content-Type' => 'application/json', 'DOLAPIKEY' => api_key},
      ssl: {:verify => false}
    )
    return conn
  end

  def dolibarr_api_get(method, params, *args)
    base_uri = "/dolibarr/api/index.php"
    status = 0
    data = {}
    user = ApplicationController.helpers.current_user args

    begin
      retries ||= 0
      conn = ApplicationController.helpers.set_connection user
      response = conn.get("#{base_uri}#{method}", params, {})
      status = response.status
      data = JSON.parse(response.body)
    rescue Exception => e
      p e.message
      Rails.logger.warn "dolibarr_api_get error: #{e.message}"
      ApplicationController.helpers.set_user_access_token(user) if status == 401
      retry if ((retries += 1) < 3 && status == 401)
    end

    return status, data
  end

  def dolibarr_api_post(method, params, *args)
    base_uri = "/dolibarr/api/index.php"
    status = 0
    data = {}
    user = ApplicationController.helpers.current_user args

    begin
      retries ||= 0
      conn = ApplicationController.helpers.set_connection user
      response = conn.post("#{base_uri}#{method}") do |req|
        req.params['DOLAPIKEY'] = ""
        req.body = params.to_json
      end
      status = response.status
      if status == 200
        data = JSON.parse(response.body)
      else
        data = JSON.parse(response.body)["error"]
      end
    rescue Exception => e
      p e.message
      Rails.logger.warn "dolibarr_api_post error: #{e.message}"
      ApplicationController.helpers.set_user_access_token(user) if status == 401
      retry if ((retries += 1) < 3 && status == 401)
    end

    return status, data
  end

  def dolibarr_api_put(method, params, *args)
    base_uri = "/dolibarr/api/index.php"
    status = 0
    data = {}
    user = ApplicationController.helpers.current_user args

    begin
      retries ||= 0
      conn = ApplicationController.helpers.set_connection user
      response = conn.put("#{base_uri}#{method}") do |req|
        req.params['DOLAPIKEY'] = ""
        req.body = params.to_json
      end
      status = response.status
      if status == 200
        data = JSON.parse(response.body)
      else
        data = JSON.parse(response.body)["error"]
      end
    rescue Exception => e
      p e.message
      Rails.logger.warn "dolibarr_api_post error: #{e.message}"
      ApplicationController.helpers.set_user_access_token(user) if status == 401
      retry if ((retries += 1) < 3 && status == 401)
    end

    return status, data
  end

  # status, token = ApplicationController.helpers.dolibarr_login(ENV["test_login"], ENV["test_password"])
  def dolibarr_login(login, password)
    token = ""
    method = "/login"
    params = {login: login, password: password}
    status, data = ApplicationController.helpers.dolibarr_api_post(method, params)
    token = data["success"]["token"] if status == 200

    return status, token
  end

  # status, data = ApplicationController.helpers.dolibarr_orders({})
  def dolibarr_orders(params)
    method = "/orders"
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_order(171)
  def dolibarr_order(id)
    method = "/orders/#{id}"
    params = {id: id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_users
  def dolibarr_users
    method = "/users"
    params = {limit: 0}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_products
  def dolibarr_products
    method = "/products"
    params = {limit: 0}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_thirdparties({limit: 0})
  def dolibarr_thirdparties(params)
    method = "/thirdparties"
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_thirdparty(8703)
  def dolibarr_thirdparty(id)
    method = "/thirdparties/#{id}"
    params = {id: id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_contacts({limit: 0})
  def dolibarr_contacts(params)
    method = "/contacts"
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_contact(27)
  def dolibarr_contact(id)
    method = "/contacts/#{id}"
    params = {id: id}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end

  # status, data = ApplicationController.helpers.dolibarr_test()
  def dolibarr_test
    method = "/status"
    params = {}
    status, data = ApplicationController.helpers.dolibarr_api_get(method, params)

    return status, data
  end
end
