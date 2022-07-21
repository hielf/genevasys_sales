class Order < ApplicationRecord
  validates_lengths_from_database
  belongs_to :user

  state_machine :status, :initial => :'initial' do
    event :submit do
      transition :'initial' => :'submitted'
    end
    event :failing do
      transition :'initial' => :'failed'
    end
    event :retry do
      transition :'failed' => :'submitted'
    end
  end
end
