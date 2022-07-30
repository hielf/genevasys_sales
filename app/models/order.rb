class Order < ApplicationRecord
  validates_lengths_from_database
  belongs_to :user

  state_machine :status, :initial => :'initial' do
    event :submit do
      transition :'initial' => :'submitted'
    end
    event :unsuccess do
      transition any => :'failed'
    end
    event :retry do
      transition :'failed' => :'initial'
    end

    after_transition any => :failed  do |order, transition|
      p transition
      order.retry_times = order.retry_times + 1
    end
  end
end
