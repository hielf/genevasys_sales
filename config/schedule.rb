# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever

every 30.minutes do
  rake "sync_task:users"
  rake "sync_task:products"
  rake "sync_task:third_parties"
  rake "sync_task:contacts"
  rake "sync_task:orders"
end


every 1.day, at: '6:00' do
  command "cat /dev/null > /var/www/genevasys_sales/current/log/production.log"
  command "cat /dev/null > /var/www/genevasys_sales/current/log/puma.access.log"
  command "cat /dev/null > /var/www/genevasys_sales/current/log/puma.error.log"
end
