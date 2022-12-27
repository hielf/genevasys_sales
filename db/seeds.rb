# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.find_by(product_id: "76").update(customer_purchase_available: true)
Product.find_by(product_id: "78").update(customer_purchase_available: true)
Product.find_by(product_id: "8").update(customer_purchase_available: true)
Product.find_by(product_id: "19").update(customer_purchase_available: true)
Product.find_by(product_id: "17").update(customer_purchase_available: true)

ProductRel.create(upper_product_id: '17', lower_product_id: '33', start_date: Date.today, end_date: Date.parse('20230228'))


# user = User.find_by(user_name: 'online_sales')
#
# ThirdParty.where.not(email: nil).each do |tp|
#   if Contact.find_by(email: tp.email).nil?
#     contact_params = {"address": tp.address,
#      "zip": tp.zip,
#      "town": tp.town,
#      "state_id": "172",
#      "socid": tp.ref,
#      "statut": "1",
#      "email": tp.email,
#      "phone_pro": tp.phone,
#      "country_id": "14",
#      "country_code": "CA",
#      "lastname": tp.name.split[-1],
#      "firstname": (tp.name.split.length > 2) ? tp.name.split[0..-2].join(' ') : tp.name.split[0],
#      "socname": "#{tp.name}",
#      "mail": tp.email}
#
#      p contact_params
#
#      flag, contact_id = ApplicationController.helpers.create_contact(contact_params, user)
#
#      if flag == true
#        flag, @user_ref = ApplicationController.helpers.create_contact_user(contact_id, User.find_by(user_name: 'online_sales'))
#        ApplicationController.helpers.set_contact_user_group(@user_ref, 7) if flag
#      end
#   else
#     p "exists"
#   end
#
#   sleep 1
# end;0
