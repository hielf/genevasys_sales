class RemoveMobileIndexFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_index "users", column: [:mobile]
    # remove_index :users, name: "index_completions_on_survey_id_and_user_id"
  end
end
