namespace :sync_task do
  task :users => :environment do
    ApplicationController.helpers.init_users
  end

  task :products => :environment do
    ApplicationController.helpers.init_products
  end

  task :third_parties => :environment do
    ApplicationController.helpers.init_third_parties
  end

  task :contacts => :environment do
    ApplicationController.helpers.init_contacts
  end

  task :orders => :environment do
    ApplicationController.helpers.order_sync
  end
end
