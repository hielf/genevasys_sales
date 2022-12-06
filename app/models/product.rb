class Product < ApplicationRecord
  validates_lengths_from_database
  attribute :level, :integer, default: -> { 0 }

  has_many :product_rels, :primary_key => :product_id, :foreign_key => :upper_product_id
  has_many :lower_products, :through => :product_rels

  # scope :valid_lowers, lambda {|id| joins(:product_rels).joins(:lower_products).where('products.id = ? AND product_rels.start_date <= ? AND product_rels.end_date >= ?', id, Date.today, Date.today) }

  def level
    description.gsub(/[^0-9]/, '').to_i
  end

  def as_json(options = {})
    super(methods: [:level])
  end

  def valid_lower_products
    self.lower_products.where("product_rels.start_date <= ? AND product_rels.end_date >= ?", Date.today, Date.today)
  end
end

# ["19", "Bundle 1000", "<div><strong>Package Monthly (</strong>Internet 1000M /&nbsp;IP Phone /&nbsp;&nbsp;Music TV Box <strong>&nbsp;)</strong></div>", "1"]
# ["17", "Bundle 300", "<div><strong>Package Monthly (</strong>Internet 300M /&nbsp;IPPhone /&nbsp;&nbsp;Music TV Box <strong>)</strong></div>", "1"]
# ["8", "Bundle 75", "<div><strong>Package Monthly (</strong>Internet 75M /&nbsp;IP Home Phone /&nbsp;&nbsp;Music TV Box)</div>", "1"]
# ["18", "Bundle 750", "<div><strong>&nbsp;Package Monthly (</strong>Internet 750M /&nbsp;IP Phone /&nbsp;&nbsp;Music TV Box)</div>", "1"]
# ["15", "Internet 1000", "Internet 1000M <strong>Monthly Only</strong>", "1"]
# ["10", "Internet 300", "Internet 300M&nbsp;<strong>Monthly Only</strong>", "1"]
# ["9", "Internet 75", "Internet 75M&nbsp;<strong>Monthly Only</strong>", "1"]
# ["11", "Internet 750", "Internet 750M&nbsp;<strong>Monthly Only</strong>", "1"]
# ["49", "IP Phone", "IP Phone device", "0"]
# ["53", "IP Phone GRP2612W", "IP Phone device<br><strong>ATA/IPPHONE MODEL:</strong> GRP2612W", "0"]
# ["52", "IP Phone GRP2613", "IP Phone device<br><strong>ATA/IPPHONE MODEL:</strong> GRP2613", "0"]
# ["51", "IP Phone GS-HT801", "IP Phone device<br><strong>ATA/IPPHONE MODEL:</strong> GS-HT801", "0"]
# ["50", "IP Phone GS-HT812", "IP Phone device<br><strong>ATA/IPPHONE MODEL:</strong> GS-HT812", "0"]
# ["25", "TV Box", "MagioX Box", "0"]
# ["47", "TV Box FANTASIC Store", "<strong>Store:</strong> FANTASIC Store", "0"]
# ["48", "TV Box Genevasys Store", "<strong>Store:</strong> Genevasys Store", "0"]
# ["41", "MODEM FOR 1000M", "CABLE&nbsp;MODEM FOR 1000M", "0"]
# ["39", "MODEM FOR 300M", "", "0"]
# ["45", "MODEM FOR 300M Hiltron CDA3-35", "<strong>Model:</strong> Hiltron CDA3-35", "0"]
# ["40", "MODEM FOR 750M", "", "0"]
# ["38", "MODEM FOR 75M", "Cable Modem for 75M", "0"]
# ["42", "MODEM FOR 75M Hiltron CDA3-20", "Cable Modem for 75M<br><strong>Model:</strong> Hiltron CDA3-20", "0"]
# ["44", "MODEM FOR 75M SmartRG SR808AC", "Cable Modem for 75M<br><strong>Model:</strong> SmartRG SR808AC", "0"]
# ["32", "ASSCESSORY", "TV BOX POWER ADPATER", "0"]
# ["33", "10 Dollars", "Promotion 10 &nbsp;Dollars", "0"]
# ["30", "5 Dollars", "Promotion 5 Dollars", "0"]
# ["37", "50 Dollars", "Promotion 50 &nbsp;Dollars", "0"]
# ["31", "ASSCESSORY", "TV BOX REMOTE CONTROLLER", "0"]
# ["16", "Magio X", "Magio Box Rental<strong> Monthly</strong>", "1"]
# ["13", "CallForward", "CALL FORWARD FROM:&nbsp;<br />\r\nCALL FORWARD TO:", "1"]
# ["12", "DID", "DID :", "1"]
# ["20", "Home IP Phone", "Home Phone (ATA) for local call free<br />\r\nLD rate 0.02 min", "1"]
# ["14", "Fax2Email", "Fax to Email", "1"]
# ["21", "Cloud PBX standard", "50 Ext.<br />\r\nIVR for reciption<br />\r\nvoice mail&nbsp;<br />\r\n5&nbsp;ring groups<br />\r\n10 DIDs", "1"]
# ["22", "Cloud PBX small business", "10 Ext. &nbsp;<br />\r\n1 IVR&nbsp;<br />\r\n10 Voice Mail<br />\r\n2 Ring group<br />\r\n3 DID", "1"]
# ["23", "Cloud PBX enterprise", "&gt; &nbsp;50 Ext.<br />\r\n2 IVR for reciption<br />\r\n50 voice mail<br />\r\n10 &nbsp;ring group<br />\r\n50 DIDs<br />\r\n1 vCallCenter", "1"]
